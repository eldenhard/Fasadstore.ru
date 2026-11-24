import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import test from 'node:test'

test('terraces page keeps the document section order and destinations', async () => {
  const page = await readFile(new URL('../app/pages/terraces.vue', import.meta.url), 'utf8')
  const expectedSections = [
    ["title: 'Раздвижные порталы Алютех(Alutech)'", "to: '/sliding-doors'", "image: '/images/terraces/sliding-portals.jpg'"],
    ["title: 'Входные группы и двери Алютех(Alutech)'", "to: '/doors'", "image: '/images/terraces/entrance-groups.jpg'"],
    ["title: 'Алюминиевые окна Алютех(Alutech)'", "to: '/windows'", "image: '/images/terraces/aluminum-windows.jpg'"],
    ["title: 'Складные двери (гармошка) Алютех(Alutech)'", "to: '/sliding-doors/bf73'", "image: '/images/terraces/folding-doors.jpg'"],
    ["title: 'Витражное остекление Алютех(Alutech)'", "to: '/facades'", "image: '/images/terraces/stained-glass-glazing.jpeg'"]
  ]

  assert.match(page, /<h1>Остекление террас и патио <span class="product-page__brand product-page__brand--light">Алютех\(Alutech\)<\/span><\/h1>/)
  assert.match(page, /Беседка с алюминиевым остеклением становится полноценной зоной отдыха/)

  let previousPosition = -1
  for (const section of expectedSections) {
    const sectionPosition = page.indexOf(section[0])

    assert.ok(sectionPosition > previousPosition, `${section[0]} should keep its document order`)
    for (const expectedValue of section) {
      assert.ok(page.includes(expectedValue), `${expectedValue} should be present`)
    }
    previousPosition = sectionPosition
  }

  assert.doesNotMatch(page, /<ContactBlock\s*\/>/)
})

test('terraces detail buttons have square corners', async () => {
  const page = await readFile(new URL('../app/pages/terraces.vue', import.meta.url), 'utf8')

  assert.match(page, /\.terraces-page__link\s*{[\s\S]*border-radius:\s*0/)
  assert.doesNotMatch(page, /\.terraces-page__link\s*{[\s\S]*border-radius:\s*999px/)
})

test('terraces page is wired into the existing site navigation and metadata', async () => {
  const [directions, navbar, breadcrumbs, seo, nuxtConfig] = await Promise.all([
    readFile(new URL('../app/constants/homeDirections.ts', import.meta.url), 'utf8'),
    readFile(new URL('../app/components/AppNavbar.vue', import.meta.url), 'utf8'),
    readFile(new URL('../app/composables/useBreadcrumbs.ts', import.meta.url), 'utf8'),
    readFile(new URL('../app/composables/useSeoData.ts', import.meta.url), 'utf8'),
    readFile(new URL('../nuxt.config.ts', import.meta.url), 'utf8')
  ])

  assert.match(directions, /title:\s*'Остекление террас и беседок'[\s\S]*to:\s*'\/terraces'/)
  assert.match(navbar, /label:\s*'Остекление террас и патио',\s*to:\s*'\/terraces'/)
  assert.match(breadcrumbs, /'\/terraces':\s*'Остекление террас и патио'/)
  assert.match(seo, /'\/terraces':\s*{[\s\S]*title:\s*'Алютех: остекление террас и патио в Москве'/)
  assert.match(nuxtConfig, /'\/terraces':\s*{\s*prerender:\s*true\s*}/)
})

test('site uses one light color scheme and the requested title', async () => {
  const [nuxtConfig, navbar] = await Promise.all([
    readFile(new URL('../nuxt.config.ts', import.meta.url), 'utf8'),
    readFile(new URL('../app/components/AppNavbar.vue', import.meta.url), 'utf8')
  ])

  assert.match(nuxtConfig, /title:\s*'Алюминиевые окна и двери Алютех в Москве — производство и монтаж'/)
  assert.match(nuxtConfig, /ui:\s*{\s*colorMode:\s*false\b/)
  assert.match(navbar, /content:\s*'[^']*bg-white/)
  assert.match(navbar, /childLink:\s*'[^']*text-gray-900/)
})

test('mobile direction headings end with ALUTECH', async () => {
  const accordion = await readFile(
    new URL('../app/components/HomeDirectionsAccordion.vue', import.meta.url),
    'utf8'
  )

  assert.match(accordion, /{{\s*item\.title\s*}}\s*ALUTECH/)
})

test('YouTube and WhatsApp are replaced with Rutube and MAX everywhere', async () => {
  const componentUrls = [
    '../app/components/AppFooter.vue',
    '../app/components/ContactBlock.vue',
    '../app/components/FloatingPhone.vue'
  ]
  const sources = await Promise.all(
    componentUrls.map((url) => readFile(new URL(url, import.meta.url), 'utf8'))
  )
  const allSources = sources.join('\n')

  assert.doesNotMatch(allSources, /youtube\.com|wa\.me|WhatsApp|lucide:youtube/)
  assert.equal(
    sources.filter((source) => source.includes('https://rutube.ru/channel/53157696/')).length,
    2
  )
  assert.equal(
    sources.filter((source) => source.includes('https://max.ru/join/mpPhGL6NOwn6T6zp06oKRePovLXW7n1rV0DECEXqFiE')).length,
    3
  )
  assert.match(allSources, /aria-label="Rutube"/)
  assert.match(allSources, /aria-label="MAX"/)
  assert.match(allSources, /\/images\/social\/rutube\.svg/)
  assert.match(allSources, /\/images\/social\/max\.svg/)
  assert.match(sources[0], /hover:bg-\[#ed143b\]/)
  assert.match(sources[0], /hover:bg-\[#8419ff\]/)
  assert.match(sources[1], /contact-block__social--rutube:hover\s*{\s*background:\s*#ed143b/)
  assert.match(sources[1], /contact-block__social--max:hover\s*{\s*background:\s*#8419ff/)
  assert.match(sources[2], /\.fac__max:hover\s*{\s*background:\s*#8419ff/)

  await access(new URL('../public/images/social/rutube.svg', import.meta.url))
  await access(new URL('../public/images/social/max.svg', import.meta.url))
})

test('all five supplied terrace photos are installed', async () => {
  const imageNames = [
    'sliding-portals.jpg',
    'entrance-groups.jpg',
    'aluminum-windows.jpg',
    'folding-doors.jpg',
    'stained-glass-glazing.jpeg'
  ]

  await Promise.all(
    imageNames.map((imageName) =>
      access(new URL(`../public/images/terraces/${imageName}`, import.meta.url))
    )
  )
})
