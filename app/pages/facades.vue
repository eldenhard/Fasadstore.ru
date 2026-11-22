<script setup lang="ts">
useSeoData()
useSchemaOrg({
  type: 'Product',
  data: {
    name: 'Фасадное остекление',
    description: 'Светопрозрачные фасадные конструкции, структурные фасады и витражи.',
    brand: { '@type': 'Brand', name: 'Алютех' },
    manufacturer: { '@type': 'Organization', name: 'Алюминиевые Системы' }
  }
})

interface FacadeSystem {
  title: string
  subtitle: string
  image: string
  description: string
  benefits: string[]
  specs: string[]
}

const facadeSystems: FacadeSystem[] = [
  {
    title: 'ALT F50',
    subtitle: 'Стоечно-ригельная система для светопрозрачных конструкций разной сложности.',
    image: '/images/facades/alt-f50.png',
    description:
      'Профили системы обеспечивают максимальную прозрачность и визуальную легкость конструкции за счет оптимальной конфигурации и возможности реализации различных узловых решений.',
    benefits: [
      'Заполнение фиксируется прижимным профилем и декоративной крышкой.',
      'Подходит для интеграции оконно-дверных систем, фасадных окон и лючков дымоудаления.'
    ],
    specs: [
      'Максимальный вес заполнения: 800, 1150 кг',
      'Видимая ширина профиля: 50 или 80 мм',
      'Толщина заполнения: 4-74, 80 мм',
      'Теплопроводность: от 0,6 до 1,8 Вт/(м²*К)',
      'Водопроницаемость: 2100 Па',
      'Звукоизоляция: до 48 дБ',
      'Сейсмостойкость: до 9 баллов'
    ]
  },
  {
    title: 'ALT F60',
    subtitle: 'Фасадная система с увеличенной видимой шириной и высокой несущей способностью.',
    image: '/images/facades/alt-f60.png',
    description:
      'Система рассчитана на крупные светопрозрачные конструкции и удобную переработку на производстве и монтаже.',
    benefits: [
      'Вспененная заглушка примыкания ригеля к стойке улучшает внешний вид узла.',
      'Единая система уплотнителей используется для всей системной платформы.',
      'Кнопочная закладная ускоряет монтаж.',
      'Термомост с твердым сердечником защищает винтовой канал при транспортировке.'
    ],
    specs: [
      'Максимальный вес заполнения: 1150 кг',
      'Видимая ширина профиля: 60 или 80 мм',
      'Максимальный момент инерции: 7 067,53 см⁴',
      'Толщина заполнения: 4-80 мм',
      'Теплопроводность: от 0,65 Вт/(м²*К)',
      'Воздухо-, водо- и ветровая нагрузка: класс А',
      'Звукоизоляция: до 48 дБ'
    ]
  },
  {
    title: 'ALT F50 SG',
    subtitle: 'Решение с минимальной внешней видимой шириной для строгой стеклянной плоскости.',
    image: '/images/facades/alt-f50-sg.png',
    description:
      'Система позволяет создавать визуально цельные фасады с надежной вентиляцией, водоотводом и технологичным монтажом фасадных узлов.',
    benefits: [
      'Качественная система примыканий к строительной конструкции по периметру.',
      'Прижим «бабочка» повышает скорость и технологичность монтажа.',
      'Внешняя видимая ширина профиля составляет 20 мм.',
      'Совместима с оконно-дверными системами и фасадными интегрированными элементами.'
    ],
    specs: [
      'Максимальный вес заполнения: 650 кг',
      'Внутренняя видимая ширина профиля: 50 мм',
      'Внешняя видимая ширина профиля: 20 мм',
      'Толщина заполнения: 32-62 мм',
      'Теплопроводность: от 1,35 Вт/(м²*К)',
      'Воздухопроницаемость: класс А',
      'Сейсмостойкость: до 9 баллов'
    ]
  },
  {
    title: 'ALT F50 SSG',
    subtitle: 'Фасадная система с аккуратной внешней прижимной планкой 40 или 50 мм.',
    image: '/images/facades/alt-f50-ssg.png',
    description:
      'Система сохраняет строгий рисунок фасада, снижает затраты на подготовку и ускоряет фиксацию заполнения самонарезными винтами.',
    benefits: [
      'Готовая прижимная планка с отверстиями для крепления заполнения.',
      'Единая система уплотнителей для всей платформы.',
      'Кнопочная закладная помогает увеличить скорость монтажа.',
      'Термомост с твердым сердечником обеспечивает стабильность винтового канала.'
    ],
    specs: [
      'Максимальный вес заполнения: 650 кг',
      'Внутренняя видимая ширина профиля: 50 мм',
      'Внешняя видимая ширина профиля: 40 или 50 мм',
      'Толщина заполнения: 22-62 мм',
      'Теплопроводность: от 0,6 до 1,8 Вт/(м²*К)',
      'Воздухо-, водо- и ветровая нагрузка: класс А',
      'Звукоизоляция: до 48 дБ'
    ]
  },
  {
    title: 'ALT F50 SA',
    subtitle: 'Светопрозрачный угол с крупноформатными заполнениями без видимых стоек в угловой зоне.',
    image: '/images/facades/alt-f50-sa.png',
    description:
      'Решение позволяет создавать визуально легкие угловые фасады, компенсировать вертикальные перемещения профилей до 20 мм и сохранять качественную герметизацию узла.',
    benefits: [
      'Специализированный адаптер стеклопакета увеличивает жесткость стыка пакетов.',
      'Уплотнитель фальца повышает теплотехнические параметры угловой зоны.',
      'Можно реализовать архитектурную разбивку несколькими ригелями по высоте витража.',
      'Промежуточные ригели не имеют видимых элементов крепления к каркасу здания.'
    ],
    specs: [
      'Максимальный вес одного заполнения: 350 кг',
      'Максимальный вес заполнения угла: 700 кг',
      'Максимальная ширина заполнения: 2000 мм',
      'Максимальная высота заполнения: 3500 мм',
      'Внутренняя видимая ширина профиля: 50 мм',
      'Толщина заполнения: 38-74 мм',
      'Теплопроводность: от 0,65 Вт/(м²*К)'
    ]
  }
]

const facadeAdvantages = [
  {
    title: 'Водоотвод и вентиляция',
    text: 'Повышенные показатели по воздухо- и водопроницаемости помогают фасаду работать стабильно при осадках и ветровых нагрузках.'
  },
  {
    title: 'Долговечность',
    text: 'Алюминиевые системы устойчивы к коррозии и внешним факторам, а срок службы фасадов превышает 50 лет.'
  },
  {
    title: 'Теплоизоляция',
    text: 'Системы помогают поддерживать комфортную температуру, сокращать расходы на отопление и снижать риск конденсата.'
  },
  {
    title: 'Герметичность',
    text: 'Конструкции защищают от продуваний, протечек, пыли и перепадов влажности.'
  },
  {
    title: 'Звукоизоляция',
    text: 'Звукоизоляция до 48 дБ подходит для объектов рядом с проспектами, вокзалами, аэропортами и другими шумными зонами.'
  },
  {
    title: 'Дизайн',
    text: 'Широкий выбор цветов и покрытий позволяет создавать индивидуальный рисунок фасада с аккуратным видом снаружи и изнутри.'
  }
]

const facadeDetails = [
  {
    title: 'Проектирование',
    text: 'Подбираем систему под размеры проемов, ветровую нагрузку, теплотехнику и архитектурный рисунок фасада.'
  },
  {
    title: 'Производство',
    text: 'Изготавливаем стойки, ригели, прижимы и заполнения по проектным размерам, чтобы монтаж шел без подгонки на объекте.'
  },
  {
    title: 'Монтаж',
    text: 'Контролируем геометрию каркаса, герметизацию примыканий, водоотвод и вентиляцию фасадной зоны.'
  },
  {
    title: 'Обслуживание',
    text: 'После сдачи объекта остаются понятные узлы доступа для проверки уплотнений, фурнитуры и водоотводящих каналов.'
  }
]
</script>

<template>
  <div class="facades-page">
    <section class="facades-page__hero">
      <div class="facades-page__hero-inner">
        <div class="facades-page__hero-copy">
          <AppBreadcrumbs />
          <h1>Фасадное остекление</h1>
          <p>
            Внешние ограждающие конструкции, которые частично или полностью состоят из
            стеклянных элементов на несущем алюминиевом каркасе.
          </p>
        </div>
        <NuxtImg
          src="/images/facades/alt-f50.png"
          alt="Фасадное остекление ALT F50"
          class="facades-page__hero-image"
          width="586"
          height="586"
          fetchpriority="high"
        />
      </div>
    </section>

    <main class="facades-page__content">
      <section class="facades-page__intro">
        <p>
          В отличие от традиционных стен из бетона или кирпича, светопрозрачный фасад
          пропускает естественный свет, создает эффект открытости и визуально связывает
          внутреннее пространство с окружающей средой.
        </p>
      </section>

      <section class="facades-page__details-strip" aria-label="Детали работы">
        <article v-for="item in facadeDetails" :key="item.title" class="facades-page__detail-card">
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </article>
      </section>

      <section class="facades-page__systems" aria-label="Виды фасадного остекления">
        <article v-for="system in facadeSystems" :key="system.title" class="facades-page__system">
          <div class="facades-page__system-copy">
            <p class="facades-page__section-label">Виды фасадного остекления</p>
            <h2>{{ system.title }}</h2>
            <p>{{ system.subtitle }}</p>
            <p>{{ system.description }}</p>
          </div>

          <div class="facades-page__image-wrap">
            <NuxtImg
              :src="system.image"
              :alt="system.title"
              class="facades-page__system-image"
              width="586"
              height="586"
              loading="lazy"
            />
          </div>

          <div class="facades-page__details">
            <div>
              <h3>Преимущества</h3>
              <ul>
                <li v-for="benefit in system.benefits" :key="benefit">{{ benefit }}</li>
              </ul>
            </div>
            <div>
              <h3>Технические характеристики</h3>
              <ul>
                <li v-for="spec in system.specs" :key="spec">{{ spec }}</li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section class="facades-page__advantages">
        <h2>Что дает фасадное остекление</h2>
        <div class="facades-page__advantages-grid">
          <article v-for="item in facadeAdvantages" :key="item.title" class="facades-page__advantage">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </section>
    </main>

  </div>
</template>

<style scoped>
.facades-page {
  overflow: hidden;
  background: #fff;
  color: #1f2933;
}

.facades-page__hero {
  background: linear-gradient(120deg, #041e2f, #082c43);
  color: #fff;
}

.facades-page__hero-inner {
  width: min(1180px, calc(100% - 48px));
  min-height: clamp(520px, 72vh, 760px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.9fr);
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
}

.facades-page__hero-copy {
  max-width: 680px;
}

.facades-page__section-label {
  margin: 0 0 0.75rem;
  color: #cad9f5;
  font: 700 0.82rem/1.2 'Montserrat', sans-serif;
  letter-spacing: 0;
  text-transform: uppercase;
}

.facades-page h1,
.facades-page h2,
.facades-page h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
}

.facades-page h1 {
  margin: 0;
  font-size: clamp(2.4rem, 6vw, 5.25rem);
  line-height: 0.98;
}

.facades-page__hero-copy p:last-child {
  max-width: 620px;
  margin: 1.5rem 0 0;
  color: #e6edf7;
  font-size: clamp(1rem, 1.6vw, 1.25rem);
  line-height: 1.65;
}

.facades-page__hero-image {
  width: min(100%, 560px);
  height: auto;
  justify-self: end;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.34);
}

.facades-page__content {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.facades-page__intro {
  max-width: 940px;
  margin: clamp(2.5rem, 6vw, 5rem) auto;
  color: #384654;
  font-size: clamp(1.05rem, 1.8vw, 1.35rem);
  line-height: 1.75;
  text-align: center;
}

.facades-page__details-strip {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: clamp(2.5rem, 6vw, 5rem);
}

.facades-page__detail-card {
  position: relative;
  overflow: hidden;
  min-height: 210px;
  padding: clamp(1rem, 2vw, 1.5rem);
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 16px 38px rgba(15, 23, 42, 0.08);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.facades-page__detail-card::before {
  content: '';
  position: absolute;
  inset: 0 0 auto;
  height: 5px;
  background: linear-gradient(90deg, #05759f, #8b4b84);
}

.facades-page__detail-card:hover {
  border-color: rgba(5, 117, 159, 0.32);
  box-shadow: 0 24px 54px rgba(15, 23, 42, 0.13);
  transform: translateY(-4px);
}

.facades-page__detail-card h2 {
  margin: 0 0 1rem;
  color: #111827;
  font-size: clamp(1.15rem, 1.8vw, 1.45rem);
}

.facades-page__detail-card p {
  margin: 0;
  color: #4b5563;
  line-height: 1.65;
}

.facades-page__systems {
  display: grid;
  gap: clamp(2.5rem, 7vw, 6rem);
}

.facades-page__system {
  display: grid;
  grid-template-columns: minmax(240px, 0.9fr) minmax(260px, 0.85fr) minmax(280px, 1fr);
  gap: clamp(1.5rem, 3vw, 3rem);
  align-items: center;
  padding: clamp(1.25rem, 3vw, 2rem) 0;
  border-top: 1px solid #e1e7ee;
}

.facades-page__system-copy h2,
.facades-page__advantages h2 {
  margin: 0 0 1rem;
  color: #102a3d;
  font-size: clamp(1.7rem, 3vw, 2.5rem);
  line-height: 1.1;
}

.facades-page__system-copy p {
  color: #465564;
  line-height: 1.7;
}

.facades-page__image-wrap {
  display: flex;
  justify-content: center;
}

.facades-page__system-image {
  width: min(100%, 380px);
  height: auto;
  border-radius: 8px;
  box-shadow: 0 18px 48px rgba(16, 42, 61, 0.16);
}

.facades-page__details {
  display: grid;
  gap: 1.25rem;
}

.facades-page__details h3,
.facades-page__advantage h3 {
  margin: 0 0 0.75rem;
  color: #102a3d;
  font-size: 1rem;
  line-height: 1.3;
}

.facades-page__details ul {
  margin: 0;
  padding-left: 1.1rem;
  color: #465564;
  line-height: 1.6;
}

.facades-page__details li + li {
  margin-top: 0.45rem;
}

.facades-page__advantages {
  margin: clamp(3rem, 7vw, 6rem) 0;
}

.facades-page__advantages-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.facades-page__advantage {
  min-height: 180px;
  padding: clamp(1rem, 2vw, 1.5rem);
  border: 1px solid #e1e7ee;
  border-radius: 8px;
  background: #f8fafc;
}

.facades-page__advantage p {
  margin: 0;
  color: #465564;
  line-height: 1.65;
}

@media screen and (max-width: 1100px) {
  .facades-page__hero-inner,
  .facades-page__system {
    grid-template-columns: 1fr 1fr;
  }

  .facades-page__details {
    grid-column: 1 / -1;
    grid-template-columns: 1fr 1fr;
  }

  .facades-page__details-strip {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media screen and (max-width: 760px) {
  .facades-page__hero-inner,
  .facades-page__content {
    width: min(100% - 32px, 1180px);
  }

  .facades-page__hero-inner,
  .facades-page__system,
  .facades-page__details {
    grid-template-columns: 1fr;
  }

  .facades-page__hero-inner {
    min-height: auto;
    padding: 2.5rem 0 3rem;
  }

  .facades-page__hero-image {
    justify-self: center;
    width: min(100%, 420px);
  }

  .facades-page__intro {
    text-align: left;
  }

  .facades-page__system {
    gap: 1.25rem;
  }

  .facades-page__system-image {
    width: min(100%, 360px);
  }

  .facades-page__advantages-grid {
    grid-template-columns: 1fr;
  }

  .facades-page__details-strip {
    grid-template-columns: 1fr;
  }
}
</style>
