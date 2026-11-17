import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
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

test('mobile product menu contains cottage glazing', async () => {
  const navbar = await readFile(new URL('../app/components/AppNavbar.vue', import.meta.url), 'utf8')

  assert.match(navbar, /const productLinks = \[[\s\S]*Остекление коттеджей[\s\S]*to: '\/cottages'/)
})

test('home hero uses background image layout on mobile', async () => {
  const hero = await readFile(new URL('../app/components/HomeHeroSlider.vue', import.meta.url), 'utf8')

  assert.match(hero, /\.slider-hero__image-wrap\s*{[\s\S]*position: absolute/)
  assert.match(hero, /@media screen and \(min-width: 901px\)[\s\S]*\.slider-hero__image-wrap\s*{[\s\S]*position: relative/)
  assert.match(hero, /@media screen and \(max-width: 900px\)[\s\S]*\.slider-hero__text\s*{[\s\S]*background:\s*transparent/)
  assert.match(hero, /@media screen and \(max-width: 900px\)[\s\S]*\.slider-hero__gradient\s*{[\s\S]*rgba\(1,\s*3,\s*5,\s*0\.58\)/)
  assert.doesNotMatch(hero, /max-height:\s*25vh/)
})

test('home hero uses a gap-free fade transition', async () => {
  const hero = await readFile(new URL('../app/components/HomeHeroSlider.vue', import.meta.url), 'utf8')

  assert.match(hero, /\.slider-hero__slide\s*{[\s\S]*opacity:\s*0[\s\S]*transition:\s*opacity 0\.6s/)
  assert.match(hero, /\.slider-hero__slide--active\s*{[\s\S]*opacity:\s*1/)
  assert.doesNotMatch(hero, /slider-hero__slide--left|slider-hero__slide--right/)
})

test('page shell keeps its blue background without changing scroll behavior', async () => {
  const css = await readFile(new URL('../app/assets/css/main.css', import.meta.url), 'utf8')

  assert.match(css, /html\s*{[\s\S]*background:\s*#fff/)
  assert.match(css, /body\s*{[\s\S]*background:\s*#082c43/)
  assert.doesNotMatch(css, /overscroll-behavior/)
})

test('about page shows two responsive production photos', async () => {
  const about = await readFile(new URL('../app/pages/about.vue', import.meta.url), 'utf8')

  assert.match(about, /\/images\/about\/production-workshop\.jpg/)
  assert.match(about, /\/images\/about\/production-overview\.jpg/)
  assert.match(about, /\.about-production\s*{[\s\S]*grid-template-columns:\s*repeat\(2,/)
  assert.match(
    about,
    /@media screen and \(max-width: 900px\)[\s\S]*\.about-production\s*{[\s\S]*grid-template-columns:\s*1fr/
  )

  await Promise.all([
    access(new URL('../public/images/about/production-workshop.jpg', import.meta.url)),
    access(new URL('../public/images/about/production-overview.jpg', import.meta.url))
  ])
})

test('home no longer renders partners and mobile decoration cannot cover company copy', async () => {
  const partner = await readFile(new URL('../app/components/PartnerBlock.vue', import.meta.url), 'utf8')

  assert.doesNotMatch(partner, /partner-block__partners/)
  assert.doesNotMatch(partner, /Swiper|swiper\/css/)
  assert.match(partner, /\.strong-aside\s*{[\s\S]*position:\s*relative[\s\S]*z-index:\s*2/)
  assert.match(partner, /@media screen and \(max-width: 900px\)[\s\S]*\.partner-block__triangle\s*{[\s\S]*display:\s*none/)
})

test('home mobile section headings have spacing and readable contrast', async () => {
  const directions = await readFile(new URL('../app/components/HomeDirectionsSection.vue', import.meta.url), 'utf8')
  const partner = await readFile(new URL('../app/components/PartnerBlock.vue', import.meta.url), 'utf8')

  assert.match(directions, /@media screen and \(max-width: 900px\)[\s\S]*\.home-directions__title\s*{[\s\S]*margin-bottom:\s*1\.5rem/)
  assert.match(partner, /@media screen and \(max-width: 900px\)[\s\S]*\.partner-block__heading\s*{[\s\S]*color:\s*#d7e8f7/)
  assert.match(partner, /@media screen and \(max-width: 900px\)[\s\S]*\.partner-block__sub\s*{[\s\S]*color:\s*#b8cad8/)
})

test('objects page uses an accessible responsive portfolio layout', async () => {
  const [page, gallery] = await Promise.all([
    readFile(new URL('../app/pages/objects.vue', import.meta.url), 'utf8'),
    readFile(new URL('../app/components/ObjectsGallery.vue', import.meta.url), 'utf8')
  ])

  assert.match(page, /class="objects-page__hero"/)
  assert.match(page, /<AppBreadcrumbs\s*\/>/)
  assert.match(page, /<h1>Наши проекты<\/h1>/)
  assert.doesNotMatch(gallery, /openGroups|toggleGroup|group\.period|Проекты по годам/)
  assert.match(gallery, /v-for="project in projects"/)
  assert.equal((gallery.match(/alt: /g) || []).length, 25)
  assert.match(gallery, /class="objects-gallery__caption"/)
  assert.match(gallery, /\.objects-gallery__grid\s*{[\s\S]*grid-template-columns:\s*repeat\(3,/)
  assert.match(gallery, /@media \(max-width: 900px\)[\s\S]*grid-template-columns:\s*repeat\(2,/)
  assert.match(gallery, /@media \(max-width: 560px\)[\s\S]*grid-template-columns:\s*1fr/)
})

test('product details use full-width mobile hero media and consistent copy', async () => {
  const css = await readFile(new URL('../app/assets/css/product-page.css', import.meta.url), 'utf8')

  assert.match(css, /@media screen and \(max-width: 900px\)[\s\S]*\.product-page__hero-image\s*{[\s\S]*width:\s*100%/)
  assert.match(css, /@media screen and \(max-width: 900px\)[\s\S]*\.product-page__hero-image img\s*{[\s\S]*width:\s*100%/)
  assert.match(css, /\.product-page__fullwidth iframe\s*{[^}]*width:\s*100%[^}]*height:\s*auto[^}]*aspect-ratio:\s*16\s*\/\s*9[^}]*border-radius:\s*8px/)
  assert.match(css, /@media screen and \(max-width: 560px\)[\s\S]*\.product-page__subtitle\s*{[\s\S]*text-align:\s*left/)
  assert.match(css, /@media screen and \(max-width: 560px\)[\s\S]*\.product-page__description\s*{[\s\S]*text-align:\s*left/)
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

test('home partner services stay contained on desktop', async () => {
  const partner = await readFile(new URL('../app/components/PartnerBlock.vue', import.meta.url), 'utf8')

  assert.match(partner, /\.strong-aside__services\s*{[\s\S]*width:\s*min\(100% - 48px,\s*1040px\)/)
  assert.match(partner, /\.strong-aside__services-grid\s*{[\s\S]*gap:/)
  assert.match(partner, /\.strong-aside__services-grid\s*{[\s\S]*justify-content:\s*start/)
  assert.match(partner, /\.strong-aside__services-grid\s*{[\s\S]*grid-template-columns:\s*repeat\(auto-fit,\s*minmax\(180px,\s*220px\)\)/)
  assert.doesNotMatch(partner, /@media screen and \(max-width: 1900px\)\s*{\s*\.strong-aside__services\s*{\s*width:\s*100%;/)
})

test('strong aside rating metrics align across aluminum and pvc columns', async () => {
  const partner = await readFile(new URL('../app/components/PartnerBlock.vue', import.meta.url), 'utf8')

  assert.match(partner, /class="strong-aside__facts"/)
  assert.match(partner, /class="strong-aside__metrics"/)
  assert.match(partner, /\.strong-aside__rating\s*{[\s\S]*gap:\s*clamp\(1\.5rem,\s*4vw,\s*4rem\)/)
  assert.match(partner, /\.strong-aside__facts\s*{[\s\S]*min-height:\s*8\.75rem/)
  assert.match(partner, /\.strong-aside__metrics\s*{[\s\S]*margin-top:\s*0\.85rem/)
  assert.match(partner, /\.strong-aside__metrics\s*{[\s\S]*gap:\s*1\.5rem/)
  assert.match(partner, /\.strong-aside__metric\s*{[\s\S]*display:\s*flex/)
  assert.match(partner, /@media screen and \(max-width: 920px\)[\s\S]*\.strong-aside__facts\s*{[\s\S]*min-height:\s*0/)
})

test('facade detail cards use softened gradient styling', async () => {
  const page = await readFile(new URL('../app/pages/facades.vue', import.meta.url), 'utf8')

  assert.match(page, /\.facades-page__detail-card\s*{[\s\S]*background:\s*#fff/)
  assert.match(page, /\.facades-page__detail-card\s*{[\s\S]*box-shadow/)
  assert.match(page, /\.facades-page__detail-card::before\s*{[\s\S]*background:\s*linear-gradient/)
  assert.match(page, /\.facades-page__detail-card:hover\s*{[\s\S]*transform:\s*translateY\(-4px\)/)
  assert.doesNotMatch(page, /\.facades-page__detail-card\s*{[\s\S]*#dbe7ef/)
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

test('category index pages do not render product nav tabs', async () => {
  const component = await readFile(new URL('../app/components/ProductCategoryIndex.vue', import.meta.url), 'utf8')

  assert.doesNotMatch(component, /<ProductTabs/)
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
  const mainCss = await readFile(new URL('../app/assets/css/main.css', import.meta.url), 'utf8')

  assert.match(component, /\.category-index__panel-link\s*{[\s\S]*font:\s*800 clamp\(1rem,\s*1\.6vw,\s*1\.45rem\)/)
  assert.match(component, /\.category-index__panel-link\s*{[\s\S]*overflow-wrap:\s*normal/)
  assert.match(component, /\.category-index__panel-link\s*{[\s\S]*word-break:\s*normal/)
  assert.doesNotMatch(component, /overflow-wrap:\s*anywhere/)
  assert.doesNotMatch(mainCss, /overflow-wrap:\s*anywhere/)
})
