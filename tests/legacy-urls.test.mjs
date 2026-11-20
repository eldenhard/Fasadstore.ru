import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const source = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8')
const redirects = [
  ['/Продукция/окна-alutech-алютех-2/', '/windows/classic/'],
  ['/Продукция/алюминиевые-окна/', '/windows/'],
  ['/Продукция/aluminievye-dveri/', '/doors/'],
  ['/Продукция/razdvizhnye-dveri-alutech/', '/sliding-doors/'],
  ['/Продукция/razdvizhnye-dveri-alutech-2/', '/sliding-doors/'],
  ['/Продукция/razdvizhnye-dveri/', '/sliding-doors/'],
  ['/Продукция/остекление-коттеджей/', '/cottages/'],
  ['/Продукция/vidy-stekla-i-steklopaketov-dizajner/', '/facades/']
]

test('legacy product URLs have precise permanent redirects to their corresponding new pages', async () => {
  const apache = await source('public/.htaccess')
  const rules = [...apache.matchAll(/^RewriteRule (\S+) (https:\/\/fasadstore\.ru\/\S+) \[R=301,L\]$/gm)]
    .map(([, pattern, target]) => [new RegExp(pattern), target])
  for (const [oldPath, newPath] of redirects) {
    const encoded = oldPath.split('/').map(encodeURIComponent).join('/')
    for (const path of [decodeURIComponent(encoded).slice(1), oldPath.slice(1, -1)]) {
      const rule = rules.find(([pattern]) => pattern.test(path))
      assert.equal(rule?.[1], `https://fasadstore.ru${newPath}`, oldPath)
    }
  }
  assert.equal(rules.find(([pattern]) => pattern.test('Продукция/unknown-product/')), undefined)
})

test('search metadata names the actual company and exposes the sitemap', async () => {
  const [seo, config, robots] = await Promise.all([
    source('app/composables/useSeoData.ts'),
    source('app/composables/useProjectConfig.ts'),
    source('public/robots.txt')
  ])
  assert.doesNotMatch(seo + config, /АлюПроект|aluproject\.ru/)
  assert.match(seo, /Алюминиевые Системы/)
  assert.match(config, /companyEmail:\s*'7655026@mail.ru'/)
  assert.match(robots, /User-agent: \*/)
  assert.match(robots, /Sitemap: https:\/\/fasadstore.ru\/sitemap.xml/)
})
