import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('home facade direction links to the facade glazing page', async () => {
  const directions = await readFile(new URL('../app/constants/homeDirections.ts', import.meta.url), 'utf8')

  assert.match(directions, /title:\s*'Остекление фасадов и витражи'[\s\S]*to:\s*'\/facades'/)
})

test('facade glazing page is available as a Nuxt route', async () => {
  const page = await readFile(new URL('../app/pages/facades.vue', import.meta.url), 'utf8')

  assert.match(page, /<h1[^>]*>Фасадное остекление<\/h1>/)
  assert.match(page, /АЛТ Ф50/)
  assert.match(page, /АЛТ Ф50 СА/)
  assert.doesNotMatch(page, />ALUTECH</)
  assert.doesNotMatch(page, /<ContactBlock\s*\/>/)
})

test('facade breadcrumb label is Russian', async () => {
  const breadcrumbs = await readFile(new URL('../app/composables/useBreadcrumbs.ts', import.meta.url), 'utf8')

  assert.match(breadcrumbs, /'\/facades':\s*'Фасадное остекление'/)
})

test('facade glazing is present in product navigation', async () => {
  const navbar = await readFile(new URL('../app/components/AppNavbar.vue', import.meta.url), 'utf8')

  assert.match(navbar, /children:\s*\[[\s\S]*label:\s*'Фасадное остекление',\s*to:\s*'\/facades'/)
  assert.match(navbar, /const productLinks = \[[\s\S]*label:\s*'Фасадное остекление',\s*to:\s*'\/facades'/)
})
