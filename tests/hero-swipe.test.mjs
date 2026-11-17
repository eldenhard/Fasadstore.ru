import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import test from 'node:test'
import { parse, compileScript } from '@vue/compiler-sfc'
import ts from 'typescript'
import * as vue from 'vue'

const require = createRequire(import.meta.url)
const source = await readFile(new URL('../app/components/HomeHeroSlider.vue', import.meta.url), 'utf8')
const { descriptor } = parse(source)
const script = compileScript(descriptor, { id: 'hero-swipe-test' })
const code = ts.transpileModule(script.content, {
  compilerOptions: { module: ts.ModuleKind.CommonJS }
}).outputText

function slider(t) {
  t.mock.timers.enable({ apis: ['setInterval', 'setTimeout'] })
  const module = { exports: {} }
  const fakeVue = { ...vue, onMounted() {}, onUnmounted() {} }
  new Function('require', 'module', 'exports', code)(
    (name) => name === 'vue' ? fakeVue : require(name), module, module.exports
  )
  return module.exports.default.setup({}, { expose() {} })
}

const start = (x, y) => ({ touches: [{ clientX: x, clientY: y }] })
function end(x, y) {
  return {
    touches: [], changedTouches: [{ clientX: x, clientY: y }], cancelable: true,
    prevented: false, preventDefault() { this.prevented = true }
  }
}

test('horizontal swipes change slides in both directions and suppress the following tap', (t) => {
  const hero = slider(t)
  hero.onTouchStart(start(200, 100))
  const left = end(80, 110)
  hero.onTouchEnd(left)
  assert.equal(hero.current.value, 1)
  assert.equal(left.prevented, true)
  t.mock.timers.tick(600)
  hero.onTouchStart(start(80, 100))
  const right = end(200, 110)
  hero.onTouchEnd(right)
  assert.equal(hero.current.value, 0)
  assert.equal(right.prevented, true)
})

test('taps, short swipes and vertical gestures preserve the slide and native scrolling', (t) => {
  const hero = slider(t)
  for (const [x, y] of [[100, 100], [149, 100], [180, 220], [180, 180]]) {
    hero.onTouchStart(start(100, 100))
    const event = end(x, y)
    hero.onTouchEnd(event)
    assert.equal(hero.current.value, 0)
    assert.equal(event.prevented, false)
  }
})

test('multi-touch and cancelled gestures do not trigger a slide change', (t) => {
  const hero = slider(t)
  hero.onTouchStart(start(200, 100))
  hero.onTouchStart({ touches: [{ clientX: 200, clientY: 100 }, { clientX: 220, clientY: 100 }] })
  hero.onTouchEnd(end(50, 100))
  assert.equal(hero.current.value, 0)
  hero.onTouchStart(start(200, 100))
  hero.onTouchCancel()
  hero.onTouchEnd(end(50, 100))
  assert.equal(hero.current.value, 0)
})

test('autoplay pauses during touch and restarts ten seconds after release', (t) => {
  const hero = slider(t)
  hero.startAutoplay()
  t.mock.timers.tick(9000)
  hero.onTouchStart(start(100, 100))
  t.mock.timers.tick(2000)
  assert.equal(hero.current.value, 0)
  hero.onTouchEnd(end(100, 100))
  t.mock.timers.tick(9999)
  assert.equal(hero.current.value, 0)
  t.mock.timers.tick(1)
  assert.equal(hero.current.value, 1)
})

test('slider wires touch events and lets the browser scroll vertically and pinch to zoom', () => {
  assert.match(source, /@touchstart\.passive="onTouchStart"/)
  assert.match(source, /@touchend="onTouchEnd"/)
  assert.match(source, /@touchcancel\.passive="onTouchCancel"/)
  assert.match(source, /touch-action:\s*pan-y pinch-zoom/)
})

test('autoplay stays paused until all fingers are released after a pinch gesture', (t) => {
  const hero = slider(t)
  hero.onTouchStart({ touches: [{ clientX: 100, clientY: 100 }, { clientX: 200, clientY: 100 }] })
  hero.onTouchEnd({ ...end(200, 100), touches: [{ clientX: 100, clientY: 100 }] })
  t.mock.timers.tick(10000)
  assert.equal(hero.current.value, 0)
  hero.onTouchEnd(end(100, 100))
  t.mock.timers.tick(10000)
  assert.equal(hero.current.value, 1)
})
