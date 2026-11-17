import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import { createRequire } from 'node:module'
import test from 'node:test'
import { parse, compileScript } from '@vue/compiler-sfc'
import ts from 'typescript'
import { h } from 'vue'
import { renderToString } from '@vue/server-renderer'

const require = createRequire(import.meta.url)
const source = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8')

function loadTs(code, overrides = {}) {
  const output = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText
  const module = { exports: {} }
  new Function('require', 'module', 'exports', output)((name) => overrides[name] || require(name), module, module.exports)
  return module.exports
}

test('video renders a local preview without connecting to Rutube until clicked', async () => {
  const { descriptor } = parse(await source('app/components/RutubeVideo.vue'))
  const script = compileScript(descriptor, { id: 'video-test', inlineTemplate: true })
  const component = loadTs(script.content).default
  const html = await renderToString(h(component, {
    src: 'https://rutube.ru/play/embed/36538d1c10d514a10e1be50cfe632792/',
    title: 'Двери'
  }))
  assert.doesNotMatch(html, /<iframe|src="https?:/)
  assert.match(html, /<button/)
  assert.match(html, /Воспроизвести видео: Двери/)
  assert.match(html, /\/images\/video-posters\/36538d1c10d514a10e1be50cfe632792.webp/)
  assert.match(script.content, /playing\.value\s*=\s*true/)
})

test('scroll reveal keeps first-screen content visible and only hides offscreen sections', async () => {
  let mounted
  let callback
  const makeElement = (top) => ({
    getBoundingClientRect: () => ({ top }),
    classList: { values: new Set(), add(name) { this.values.add(name) }, remove(name) { this.values.delete(name) } }
  })
  const hero = makeElement(100)
  const lower = makeElement(1000)
  globalThis.window = { innerHeight: 800 }
  globalThis.document = { querySelectorAll: () => [hero, lower] }
  globalThis.IntersectionObserver = class {
    constructor(cb) { callback = cb }
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  window.IntersectionObserver = globalThis.IntersectionObserver
  try {
    loadTs(await source('app/composables/useScrollReveal.ts'), {
      vue: { onMounted: (fn) => { mounted = fn }, onBeforeUnmount() {} }
    }).useScrollReveal()
    mounted()
    assert.equal(hero.classList.values.has('reveal--pending'), false)
    assert.equal(lower.classList.values.has('reveal--pending'), true)
    callback([{ target: lower, isIntersecting: true }])
    assert.equal(lower.classList.values.has('reveal--pending'), false)
  } finally {
    delete globalThis.window
    delete globalThis.document
    delete globalThis.IntersectionObserver
  }
  const css = await source('app/assets/css/product-page.css')
  assert.doesNotMatch(css, /\.reveal\s*{[^}]*opacity:\s*0/)
})

test('office gallery uses optimized lazy photos under 1 MB in total', async () => {
  const page = await source('app/pages/about.vue')
  let bytes = 0
  for (const name of ['office_p', 'office1', 'office3', 'shop']) {
    assert.ok(page.includes(`/images/about/${name}.webp`))
    bytes += (await stat(new URL(`../public/images/about/${name}.webp`, import.meta.url))).size
  }
  assert.ok(bytes < 1024 * 1024)
  assert.match(page, /:src="activeImage"[^>]*loading="lazy"/)
  assert.match(page, /:src="img"[^>]*loading="lazy"/)
})

test('static hosting links and directory redirects keep canonical HTTPS addresses', async () => {
  const config = await source('nuxt.config.ts')
  const apache = await source('public/.htaccess')
  const seo = await source('app/composables/useSeoData.ts')
  assert.match(config, /trailingSlash:\s*'append'/)
  assert.match(apache, /RewriteRule.*https:\/\/fasadstore.ru\/\$1\//)
  assert.match(apache, /RewriteCond %\{REQUEST_FILENAME\} -d/)
  assert.match(seo, /route\.path\.replace/)
})
