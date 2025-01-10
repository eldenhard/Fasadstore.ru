<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const activeIndex = ref(0)
const tabs = ['Окна классические', 'Окна панорамные', 'Скрытая створка']

const router = useRouter()
const route = useRoute()

onMounted(() => {
  router.push('/windows/classic')
})
// Отслеживаем изменение маршрута и обновляем активный индекс
watch(
  () => route.path,
  (newPath) => {
    if (newPath.includes('classic')) {
      activeIndex.value = 0
    } else if (newPath.includes('panorama')) {
      activeIndex.value = 1
    } else if (newPath.includes('hidden')) {
      activeIndex.value = 2
    }
  }
)

const setActiveTab = (index) => {
  activeIndex.value = index
  const paths = ['classic', 'panorama', 'hidden']
  router.push(`/windows/${paths[index]}`)
}
</script>

<template>
  <div class="page">
    <header class="nav">
      <ul class="nav__list">
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ nav__item: true, nav__item__active: activeIndex === index }"
          @click="setActiveTab(index)"
        >
          {{ tab }}
          <div v-if="activeIndex === index" class="nav__underline"></div>
        </li>
      </ul>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
@use '../style/window-view.scss';
</style>
