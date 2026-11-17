import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const source = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8')

test('doors catalog places its video after the product cards', async () => {
  const [page, category] = await Promise.all([
    source('app/pages/doors/index.vue'),
    source('app/components/ProductCategoryIndex.vue')
  ])
  assert.match(page, /https:\/\/rutube.ru\/play\/embed\/36538d1c10d514a10e1be50cfe632792\//)
  assert.ok(category.indexOf('<slot />') > category.indexOf('class="category-index__cards"'))
  assert.ok(category.indexOf('<slot />') < category.indexOf('</main>'))
})

test('company video follows the production photos', async () => {
  const page = await source('app/pages/about.vue')
  const video = page.indexOf('https://rutube.ru/play/embed/a13e218f7d809db151875c5f7e997e81/')
  assert.ok(video > page.indexOf('/images/about/production-overview.jpg'))
  assert.ok(video < page.indexOf('<section class="three-block-wrapper">'))
})

test('each sliding door model uses the video from its own email', async () => {
  const models = await source('app/constants/pocketDoorModels.ts')
  for (const [model, id] of Object.entries({
    sl160: '8f4cd084172d0dd8b634e7ac1f5e5726',
    sl130: '8f4cd084172d0dd8b634e7ac1f5e5726',
    bf73: '18eb2eefaf5bd4d85ed4ad9c0d978380'
  })) {
    const block = models.split(`  ${model}: {`)[1].split(/\n  (?:sl160|sl130|bf73): {/)[0]
    assert.match(block, new RegExp(`videoUrl: 'https://rutube.ru/play/embed/${id}/'`), model)
  }
})


test('company video is compact and rounded', async () => {
  const page = await source('app/pages/about.vue')
  assert.match(page, /\.about-video\s*{[^}]*width:\s*min\(90%, 800px\)/)
  assert.match(page, /\.about-video iframe\s*{[^}]*aspect-ratio:\s*16\s*\/\s*9[^}]*border-radius:\s*8px/)
})

test('home product videos use the full row without captions', async () => {
  const block = await source('app/components/PartnerBlock.vue')
  assert.match(block, /\.partner-block__videos\s*{[^}]*grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/)
  assert.match(block, /\.partner-block__video\s*{[^}]*aspect-ratio:\s*16\s*\/\s*9[^}]*border-radius:\s*8px/)
  assert.doesNotMatch(block, /min-height:\s*35vh/)
  for (const title of ['Раздвижные системы', 'Окна', 'Двери']) {
    assert.ok(block.includes(`title: '${title}'`))
  }
  assert.doesNotMatch(block, /figcaption|partner-block__caption/)
  assert.match(block, /\.partner-block__videos\s*{[^}]*width:\s*100%/)
})
