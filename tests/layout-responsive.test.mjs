import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('network dev script exposes Nuxt to local network', async () => {
  const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'))

  assert.equal(pkg.scripts['dev:network'], 'nuxt dev --host 0.0.0.0')
})

test('navbar switches to burger earlier and hides while scrolling down', async () => {
  const navbar = await readFile(new URL('../app/components/AppNavbar.vue', import.meta.url), 'utf8')

  assert.match(navbar, /isNavbarHidden/)
  assert.match(navbar, /currentScrollY > lastScrollY/)
  assert.match(navbar, /navbar--hidden/)
  assert.match(navbar, /class="navbar__desktop"/)
  assert.match(navbar, /@media \(min-width: 1180px\)/)
})

test('home hero uses background image layout on mobile', async () => {
  const hero = await readFile(new URL('../app/components/HomeHeroSlider.vue', import.meta.url), 'utf8')

  assert.match(hero, /\.slider-hero__image-wrap\s*{[\s\S]*position: absolute/)
  assert.match(hero, /@media screen and \(min-width: 901px\)[\s\S]*\.slider-hero__image-wrap\s*{[\s\S]*position: relative/)
  assert.doesNotMatch(hero, /max-height:\s*25vh/)
})

test('about page contact CTA links to contacts and commercial CTA is removed', async () => {
  const about = await readFile(new URL('../app/pages/about.vue', import.meta.url), 'utf8')

  assert.match(about, /<NuxtLink to="\/contacts" class="btn-purple">/)
  assert.doesNotMatch(about, /Получить коммерческое предложение/)
})

test('sliding doors index has its own responsive layout', async () => {
  const page = await readFile(new URL('../app/pages/sliding-doors/index.vue', import.meta.url), 'utf8')

  assert.match(page, /<ProductCategoryIndex/)
  assert.match(page, /panel-title="Системы"/)
})

test('contact request form is not rendered anywhere', async () => {
  const contactBlock = await readFile(new URL('../app/components/ContactBlock.vue', import.meta.url), 'utf8')

  assert.doesNotMatch(contactBlock, /<ContactForm\s*\/>/)
  await assert.rejects(
    readFile(new URL('../app/components/ContactForm.vue', import.meta.url), 'utf8'),
    /ENOENT/
  )
})

test('partner strong aside uses non-overlapping responsive layout', async () => {
  const partner = await readFile(new URL('../app/components/PartnerBlock.vue', import.meta.url), 'utf8')

  assert.match(partner, /\.strong-aside\s*{[\s\S]*padding:/)
  assert.match(partner, /\.strong-aside__services\s*{[\s\S]*position: relative/)
  assert.doesNotMatch(partner, /\.strong-aside__services\s*{[\s\S]*height:\s*25vh/)
})

test('facade detail cards use softened gradient styling', async () => {
  const page = await readFile(new URL('../app/pages/facades.vue', import.meta.url), 'utf8')

  assert.match(page, /\.facades-page__detail-card\s*{[\s\S]*linear-gradient/)
  assert.match(page, /\.facades-page__detail-card\s*{[\s\S]*box-shadow/)
  assert.doesNotMatch(page, /background:\s*#102a3d/)
})

test('category index pages share one start layout component', async () => {
  const windows = await readFile(new URL('../app/pages/windows/index.vue', import.meta.url), 'utf8')
  const doors = await readFile(new URL('../app/pages/doors/index.vue', import.meta.url), 'utf8')
  const sliding = await readFile(new URL('../app/pages/sliding-doors/index.vue', import.meta.url), 'utf8')
  const component = await readFile(new URL('../app/components/ProductCategoryIndex.vue', import.meta.url), 'utf8')

  assert.match(windows, /<ProductCategoryIndex/)
  assert.match(doors, /<ProductCategoryIndex/)
  assert.match(sliding, /<ProductCategoryIndex/)
  assert.match(component, /category-index__panel-link/)
  assert.match(component, /@media \(max-width: 980px\)/)
})

test('pocket door color swatches do not collapse labels vertically', async () => {
  const page = await readFile(new URL('../app/components/PocketDoorModelPage.vue', import.meta.url), 'utf8')
  const css = await readFile(new URL('../app/assets/css/product-page.css', import.meta.url), 'utf8')

  assert.match(page, /product-page__color-item/)
  assert.match(css, /\.product-page__color-item\s*{[\s\S]*min-width:/)
  assert.match(css, /\.product-page__color-name\s*{[\s\S]*white-space:\s*nowrap/)
})

test('contact info card is compact after removing form', async () => {
  const contactBlock = await readFile(new URL('../app/components/ContactBlock.vue', import.meta.url), 'utf8')

  assert.match(contactBlock, /\.contact-block__form-section\s*{[\s\S]*max-width:\s*680px/)
  assert.match(contactBlock, /\.contact-block__info\s*{[\s\S]*border-radius:\s*8px/)
  assert.doesNotMatch(
    contactBlock,
    /\.contact-block__form-section\s*{[\s\S]*height:\s*100%;/
  )
})

test('category side panel uses a restrained light palette and hover', async () => {
  const component = await readFile(new URL('../app/components/ProductCategoryIndex.vue', import.meta.url), 'utf8')

  assert.match(component, /\.category-index__panel\s*{[\s\S]*background:\s*linear-gradient/)
  assert.match(component, /\.category-index__panel-link\s*{[\s\S]*background:\s*#123349/)
  assert.match(component, /\.category-index__panel-link:hover\s*{[\s\S]*border-color:\s*#05759f/)
  assert.doesNotMatch(component, /\.category-index__panel\s*{[\s\S]*background:\s*#082c43/)
})

test('category side panel text fits long Russian labels', async () => {
  const component = await readFile(new URL('../app/components/ProductCategoryIndex.vue', import.meta.url), 'utf8')

  assert.match(component, /\.category-index__panel-link\s*{[\s\S]*font:\s*800 clamp\(1rem,\s*1\.6vw,\s*1\.45rem\)/)
  assert.match(component, /\.category-index__panel-link\s*{[\s\S]*overflow-wrap:\s*anywhere/)
  assert.match(component, /\.category-index__panel-link\s*{[\s\S]*hyphens:\s*auto/)
})
