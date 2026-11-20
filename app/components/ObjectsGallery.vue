<script setup lang="ts">
const base = '/src/components/ObjectsPageComponents/assets'

const projects = [
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
  },
  { images: [`${base}/2013_2018/kievka_47/IMG_1287_11zon.webp`], alt: 'Киевка 47' },
  { images: [`${base}/2013_2018/winter_garden/20150522_130354_11zon.webp`], alt: 'Зимний сад' },
  { images: [`${base}/2013_2018/montevil/20160219_140813_11zon (1).webp`], alt: 'Монтевиль' },
  { images: [`${base}/2013_2018/truvill/20141123_115049_11zon.webp`], alt: 'Трувиль' },
  { images: [`${base}/2013_2018/lumoni/20140418_134827_11zon.webp`], alt: 'Лумони' },
  { images: [`${base}/2013_2018/zenitki/20140709_152121_11zon.webp`], alt: 'Зенитки' },
  { images: [`${base}/2008_2013/perevedenovskiy/6.webp`], alt: 'Переведеновский' },
  { images: [`${base}/2008_2013/frazino/10_11zon.webp`], alt: 'Фрязино' },
  { images: [`${base}/2008_2013/dovil_old/20130301_123529.webp`], alt: 'Довиль' },
  { images: [`${base}/2008_2013/krasnye_vorota/DSC01198.webp`], alt: 'Красные ворота' },
  { images: [`${base}/2008_2013/ugolnaya/20231010_115545_11zon.webp`], alt: 'Угольная' },
  { images: [`${base}/2008_2013/vatutinki/20140418_135437_11zon.webp`], alt: 'Ватутинки' }
]
</script>

<template>
  <section class="objects-gallery" aria-label="Выполненные проекты">
    <div class="objects-gallery__grid">
      <figure v-for="project in projects" :key="project.alt" class="objects-gallery__project">
        <NuxtImg
          :src="project.images[0]"
          :alt="project.alt"
          class="objects-gallery__image"
          width="800"
          height="600"
          loading="lazy"
        />
        <figcaption class="objects-gallery__caption">{{ project.alt }}</figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.objects-gallery {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
  padding: clamp(3.5rem, 7vw, 6rem) 0;
}

.objects-gallery__grid {
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.objects-gallery__project {
  position: relative;
  aspect-ratio: 4 / 3;
  margin: 0;
  overflow: hidden;
  background: #dce4e8;
}

.objects-gallery__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.45s ease;
}

.objects-gallery__project:hover .objects-gallery__image {
  transform: scale(1.04);
}

.objects-gallery__caption {
  position: absolute;
  inset: auto 0 0;
  padding: 3rem 1rem 1rem;
  background: linear-gradient(to bottom, transparent, rgba(3, 26, 41, 0.9));
  color: #fff;
  font: 700 0.95rem/1.35 'Montserrat', sans-serif;
}

@media (max-width: 900px) {
  .objects-gallery__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .objects-gallery {
    width: min(100% - 32px, 1180px);
  }

  .objects-gallery__grid {
    grid-template-columns: 1fr;
  }
}
</style>
