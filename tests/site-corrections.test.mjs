import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import test from 'node:test'
import ts from 'typescript'

const source = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8')
const require = createRequire(import.meta.url)
const configCode = await source('app/composables/useProjectConfig.ts')
const module = { exports: {} }
new Function('module', 'exports', ts.transpileModule(configCode, {
  compilerOptions: { module: ts.ModuleKind.CommonJS }
}).outputText)(module, module.exports)
const config = module.exports.useProjectConfig()

test('mobile company intro hides the desktop quote and images together', async () => {
  const intro = await source('app/components/HomeIntroSection.vue')
  const mobile = intro.split('@media screen and (max-width: 900px)')[1]
  assert.match(mobile, /\.mini-about__images\s*{[^}]*display:\s*none/)
  assert.match(mobile, /\.mini-about__mobile-quote\s*{[^}]*display:\s*block/)
})

test('homepage metadata exposes an absolute, decodable sharing image', async () => {
  let meta
  const seoCode = await source('app/composables/useSeoData.ts')
  const module = { exports: {} }
  new Function('module', 'exports', 'useRoute', 'useProjectConfig', 'useSeoMeta', 'useCanonical', 'useRobots',
    ts.transpileModule(seoCode, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText
  )(module, module.exports, () => ({ path: '/' }), () => config, (value) => { meta = value }, () => {}, () => {})
  module.exports.useSeoData()
  assert.ok(meta.ogImage.startsWith('https://fasadstore.ru/'))
  const image = await require('sharp')(await readFile(new URL(`../public${new URL(meta.ogImage).pathname}`, import.meta.url))).metadata()
  assert.equal(image.format, 'jpeg')
  assert.equal(image.width, 1200)
  assert.equal(image.height, 630)
  assert.ok(meta.title.length >= 40 && meta.title.length <= 70)
})

test('static error page offers real links without JavaScript or automatic redirects', async () => {
  const page = await source('public/404.html').catch(() => '')
  assert.match(page, /<html[^>]*lang="ru"/)
  assert.match(page, /<a\s+href="\/"/)
  assert.match(page, /noindex/)
  assert.doesNotMatch(page, /http-equiv="refresh"|<script/)
  assert.match(await source('app/error.vue'), /<a\s+href="\/"/)
  assert.match(await source('nuxt.config.ts'), /ignore:\s*\['\/404.html'\]/)
})

test('cottage glazing page has its own SEO metadata', async () => {
  let meta
  const module = { exports: {} }
  new Function('module', 'exports', 'useRoute', 'useProjectConfig', 'useSeoMeta', 'useCanonical', 'useRobots',
    ts.transpileModule(await source('app/composables/useSeoData.ts'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText
  )(module, module.exports, () => ({ path: '/cottages/' }), () => config, (value) => { meta = value }, () => {}, () => {})
  module.exports.useSeoData()
  assert.ok(meta, 'Cottage page metadata is missing')
  assert.match(meta.title, /Остекление коттеджей/)
  assert.match(meta.ogImage, /^https:\/\/fasadstore.ru\//)
})
