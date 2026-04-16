<script setup lang="ts">
// Галерея выполненных проектов — NuxtImg + Tailwind CSS v4
// Перенос из src/components/ObjectsPageComponents/ObjectsDevelopment.vue

interface ProjectGroup {
  period: string
  projects: { images: string[]; alt: string }[]
}

const base = '/src/components/ObjectsPageComponents/assets'

const groups: ProjectGroup[] = [
  {
    period: '2018-2024',
    projects: [
      { images: [`${base}/2018-2024/admiral/20170324_112311_11zon.webp`], alt: 'Проект Адмирал' },
      { images: [`${base}/2018-2024/besedka/20210827_142240_11zon.webp`], alt: 'Проект Беседка' },
      {
        images: [`${base}/2018-2024/bolshaya_voda/20210906_150702_11zon.webp`],
        alt: 'Проект Большая вода'
      },
      {
        images: [`${base}/2018-2024/dmitrovka/20231214_162451_11zon.webp`],
        alt: 'Проект Дмитровка'
      },
      { images: [`${base}/2018-2024/family_park/20220917_104147_11zon.webp`], alt: 'Family Park' },
      { images: [`${base}/2018-2024/novogorsk_7/101rfMoYKMw_11zon.webp`], alt: 'Новогорск 7' },
      { images: [`${base}/2018-2024/zukovka/20211204_103149_11zon.webp`], alt: 'Жуковка' },
      { images: [`${base}/2018-2024/varvarino/20220406_095959_11zon.webp`], alt: 'Варварино' },
      { images: [`${base}/2018-2024/poluostrov/20200624_172559_11zon.webp`], alt: 'Полуостров' },
      { images: [`${base}/2018-2024/lesniye_dali/20171205_165323_11zon.webp`], alt: 'Лесные дали' },
      {
        images: [`${base}/2018-2024/sergiev_posad/20191006_122454_11zon.webp`],
        alt: 'Сергиев Посад'
      }
    ]
  },
  {
    period: '2013-2018',
    projects: [
      { images: [`${base}/2013_2018/kievka_47/IMG_1287_11zon.webp`], alt: 'Киевка 47' },
      { images: [`${base}/2013_2018/winter_garden/20150522_130354_11zon.webp`], alt: 'Зимний сад' },
      { images: [`${base}/2013_2018/montevil/20160219_140813_11zon (1).webp`], alt: 'Монтевиль' },
      { images: [`${base}/2013_2018/truvill/20141123_115049_11zon.webp`], alt: 'Трувиль' },
      { images: [`${base}/2013_2018/lumoni/20140418_134827_11zon.webp`], alt: 'Лумони' },
      {
        images: [`${base}/2013_2018/gormoshka_iarat/20160206_154008_11zon.webp`],
        alt: 'Гармошка Иарат'
      },
      { images: [`${base}/2013_2018/raisa/20130910_122012_11zon.webp`], alt: 'Раиса' },
      { images: [`${base}/2013_2018/zenitki/20140709_152121_11zon.webp`], alt: 'Зенитки' }
    ]
  },
  {
    period: '2008-2013',
    projects: [
      { images: [`${base}/2008_2013/perevedenovskiy/6.webp`], alt: 'Переведеновский' },
      { images: [`${base}/2008_2013/frazino/10_11zon.webp`], alt: 'Фрязино' },
      { images: [`${base}/2008_2013/dovil_old/20130301_123529.webp`], alt: 'Довиль' },
      { images: [`${base}/2008_2013/krasnye_vorota/DSC01198.webp`], alt: 'Красные ворота' },
      { images: [`${base}/2008_2013/ugolnaya/20231010_115545_11zon.webp`], alt: 'Угольная' },
      { images: [`${base}/2008_2013/vatutinki/20140418_135437_11zon.webp`], alt: 'Ватутинки' }
    ]
  }
]

// Управление раскрытием групп
const openGroups = ref<Record<string, boolean>>({
  '2018-2024': true,
  '2013-2018': false,
  '2008-2013': false
})

function toggleGroup(period: string) {
  openGroups.value[period] = !openGroups.value[period]
}
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-8">
    <h2 class="objects-gallery__title text-gray-200 font-black text-4xl lg:text-6xl mb-8">
      Наши проекты
    </h2>

    <div v-for="group in groups" :key="group.period" class="mb-8">
      <!-- Заголовок периода -->
      <button
        class="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer flex items-center gap-2 min-h-[44px]"
        @click="toggleGroup(group.period)"
      >
        {{ group.period }}
        <span
          class="i-lucide-chevron-down w-6 h-6 text-blue-400 transition-transform"
          :class="{ 'rotate-180': openGroups[group.period] }"
        />
      </button>

      <!-- Сетка проектов -->
      <div
        v-show="openGroups[group.period]"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
      >
        <div v-for="(project, idx) in group.projects" :key="idx" class="rounded-lg overflow-hidden">
          <!-- Показываем первое изображение проекта -->
          <NuxtImg
            :src="project.images[0]"
            :alt="project.alt"
            class="w-full h-48 object-cover rounded-lg"
            width="400"
            height="250"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.objects-gallery__title {
  font-family: 'Arial Black', sans-serif;
}
</style>
