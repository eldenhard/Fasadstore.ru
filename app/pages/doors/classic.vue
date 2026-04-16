<script setup lang="ts">
import { DOOR_PRODUCT_TABS } from '~/constants/productTabs'

useSeoData()
useSchemaOrg({
  type: 'Product',
  data: {
    name: 'Классические алюминиевые двери ALUTECH',
    description: 'Классические алюминиевые двери ALUTECH: ALT W62, W72.',
    brand: { '@type': 'Brand', name: 'ALUTECH' },
    manufacturer: { '@type': 'Organization', name: 'АлюПроект' }
  }
})
const tabs = DOOR_PRODUCT_TABS
const { activeIndex } = useProductTabs(tabs)

const line1 = ref<HTMLElement | null>(null)
const line2 = ref<HTMLElement | null>(null)
const line3 = ref<HTMLElement | null>(null)
const line4 = ref<HTMLElement | null>(null)
useIntersectionObserver([line1, line2, line3, line4], (el: HTMLElement) => {
  el.classList.add('product-page__line--visible')
})
</script>
<template>
  <div class="product-page">
    <ProductTabs :items="tabs" :active-index="activeIndex" />
    <main class="product-page__content">
      <section class="product-page__hero">
        <div class="product-page__hero-text">
          <p class="product-page__title">
            Двери классические <span class="product-page__light-color">ALUTECH</span>
          </p>
          <br />
          <p class="product-page__description">
            Алюминиевые двери Алютех- это решение для комфорта и безопасности. Двери «АЛЮТЕХ»
            эффективно сберегают тепло, вписываются в любой архитектурный стиль, обладают высокой
            взломостойкостью.
          </p>
        </div>
        <figure class="product-page__hero-image">
          <img src="/images/doors/classic/photo1.jpg" alt="Двери классические ALUTECH" />
        </figure>
      </section>
      <section class="product-page__triangle">
        <div class="product-page__triangle-image">
          <img src="/images/doors/classic/photo21.jpg" alt="Двери Алютех" />
        </div>
        <div class="product-page__triangle-text product-page__triangle-text--1">
          <p class="product-page__description">
            Классические двери Алютех — для тех, кто ценит качественные решения. Они удобны в
            использовании. Классические алюминиевые двери Алютех создают в доме уютную и безопасную
            атмосферу.
          </p>
        </div>
        <div class="product-page__triangle-text product-page__triangle-text--2">
          <p class="product-page__description">
            Крупноформатные HD-двери (высотой до 3 м) — новый вариант для тех, кто ищет что-то
            особенное. Они подходят для проектов, где высоты классических дверей Алютех
            недостаточно.
          </p>
        </div>
      </section>
      <section class="product-page__single product-page__single--spacious product-page__single--reverse">
        <figure class="product-page__single-image">
          <h4 class="product-page__subtitle--small">Крупноформатная дверь ALT W72 HD</h4>
          <img src="/images/doors/classic/photo3.jpg" alt="ALT W72 HD" />
        </figure>
        <div class="product-page__spec-card product-page__spec-card--half">
          <ul>
            <li>Максимальная высота: 3 м</li>
            <li>Максимальная ширина: 1,25 м</li>
            <li>Толщина заполнения: до 56 мм</li>
            <li>Монтажная глубина профиля: 72 мм</li>
            <li>Предельная масса: до 250 кг</li>
            <li>Теплоизоляция: 2,09 Вт/м²·К</li>
            <li>Взломостойкость: RC2</li>
            <li>Класс воздухопроницаемости: А</li>
            <li>Водонепроницаемость: класс А</li>
            <li>Сопротивляемость ветру – А-класс</li>
          </ul>
          <br />
          <p>Типы открываний: внутреннее, наружное</p>
        </div>
      </section>
      <section class="product-page__single">
        <figure class="product-page__single-image">
          <h4 class="product-page__subtitle--small">Классическая дверь ALT W72</h4>
          <img src="/images/doors/classic/photo4.png" alt="ALT W72" />
        </figure>
        <div class="product-page__spec-card product-page__spec-card--wide">
          <h5>
            Данные конструкции ALT W72 отличаются повышенной шумо- и теплоизоляцией.<br />Двери
            Alutech W72 полностью адаптированы под наш климат и подходят для зданий всех типов.
          </h5>
          <br />
          <ul>
            <li>Предельная высота створки: 2,5 м</li>
            <li>Предельная ширина створки: 1,1 м</li>
            <li>Толщина заполнения: до 54 мм</li>
            <li>Глубина профильной системы: 72 мм</li>
            <li>Масса: до 250 кг</li>
            <li>Уровень теплоизоляции: 1,6 Вт/м²·К</li>
            <li>Взломостойкость: D-класс</li>
            <li>Водонепроницаемость: класс 2А (50 Па)</li>
            <li>Сопротивляемость ветровой нагрузке: класс С4 (до 1600 Па)</li>
          </ul>
          <br />
          <p>Типы открываний: внутреннее, наружное</p>
        </div>
      </section>
      <section class="product-page__single product-page__single--reverse">
        <figure class="product-page__single-image">
          <h4 class="product-page__subtitle--small">Классическая дверь ALT W62</h4>
          <img src="/images/doors/photo5.jpg" alt="ALT W62" />
        </figure>
        <div class="product-page__spec-card">
          <ul>
            <li>Максимальная высота створки – 2500 мм</li>
            <li>Максимальная ширина створки – 1250 мм</li>
            <li>Максимальный вес створки – 180 кг</li>
            <li>Толщина заполнения – 40 мм</li>
            <li>Теплопроводность Uf = 3,29 W/m²·K</li>
            <li>Приведенное сопротивление теплопередаче (ГОСТ 26602.1) R₀ = 0,546 м²·°С/Вт</li>
            <li>Водопроницаемость (ГОСТ 26602.2) – Класс А</li>
            <li>Воздухопроницаемость (ГОСТ 26602.2) – Класс А</li>
            <li>Сопротивляемость ветровой нагрузке (ГОСТ 26602.5) – Класс А</li>
            <li>Взломостойкость – RC2 (СТБ EN 1627)</li>
          </ul>
          <p>Типы открываний: внутреннее, наружное</p>
        </div>
      </section>
      <div ref="line1" class="product-page__line"></div>
      <section class="product-page__triple">
        <div class="product-page__triple-text">
          <p class="product-page__subtitle">Типы ручек</p>
        </div>
        <div class="product-page__triple-items">
          <div class="product-page__triple-item">
            <img
              src="/images/doors/photo6.png"
              alt="Нажимная ручка с замком"
              class="product-page__image--full-height"
            />
            <p>Нажимная ручка с замком</p>
          </div>
          <div class="product-page__triple-item">
            <img src="/images/doors/photo7.webp" alt="Нажимной гарнитур с замком" />
            <p>Нажимной гарнитур с замком</p>
          </div>
          <div class="product-page__triple-item">
            <img src="/images/doors/photo8.webp" alt="Ручка с штангой" />
            <p>Ручка с штангой</p>
          </div>
        </div>
      </section>
      <div ref="line2" class="product-page__line"></div>
      <section class="product-page__triple">
        <div class="product-page__triple-text">
          <p class="product-page__subtitle">
            Прочные петли.<br />Ресурс петель - <strong>1 000 000 циклов</strong> закрытия и
            открытия
          </p>
        </div>
      </section>
      <section class="product-page__triangle">
        <div class="product-page__triangle-image">
          <img src="/images/doors/photo9.webp" alt="Петли" class="product-page__image--sixty-height" />
        </div>
      </section>
      <div ref="line3" class="product-page__line"></div>
      <section class="product-page__single product-page__hero--spaced">
        <figure class="product-page__single-image product-page__single-image--half">
          <h4 class="product-page__subtitle--small">Термомосты Anti-Be-Metal</h4>
          <img src="/images/doors/photo10.webp" alt="Термомосты" />
        </figure>
        <div class="product-page__spec-card product-page__spec-card--centered">
          <h4>
            Исключают деформацию дверей из-за большой разницы температур снаружи и внутри помещения.
            Увеличивают срок службы фурнитуры.
          </h4>
        </div>
      </section>
      <section class="product-page__triple">
        <div class="product-page__triple-text">
          <p class="product-page__subtitle">Типы стеклопакета</p>
        </div>
        <div class="product-page__triple-items">
          <div class="product-page__triple-item">
            <img src="/images/doors/photo11.webp" alt="Стеклопакет" />
            <p>Толщина стеклопакета — до 54 мм</p>
          </div>
          <div class="product-page__triple-item">
            <img src="/images/doors/photo12.webp" alt="Вставки" />
            <p>Вставки из вспененного РЕ-материала</p>
          </div>
        </div>
      </section>
      <section class="product-page__triple">
        <div class="product-page__triple-text">
          <p class="product-page__subtitle">
            Пороги высотой всего 14, 20 или 22 мм<br />обеспечивают комфортное перемещение из дома
            на улицу и обратно,<br />а выпадающий порог — безбарьерную среду.
          </p>
        </div>
      </section>
      <section class="product-page__fullwidth">
        <ClientOnly
          ><iframe
            width="720"
            height="405"
            src="https://rutube.ru/play/embed/85033df46441920caede6d19eabf80e5/"
            frameborder="0"
            allow="clipboard-write; autoplay"
            allowfullscreen
        /></ClientOnly>
        <p>Классические двери «АЛЮТЕХ» оснащены рядом комплектующих для безопасности:</p>
        <p>противовзломные штапики -предотвращают Выпадение стеклопакета</p>
        <p>ударостойкое заполнение – устойчиво к Механическим повреждениям</p>
        <p>фурнитура-исключает риск самостоятельного Открытия окон Алютех детьми</p>
      </section>
      <div ref="line4" class="product-page__line"></div>
      <section class="product-page__triple">
        <div class="product-page__triple-text">
          <p class="product-page__subtitle">Преимущества алюминиевых окон ALUTECH</p>
        </div>
        <div class="product-page__advantages-list">
          <ol>
            <li>
              <strong>Долгий срок службы:</strong> Профили ALUTECH служат более 50 лет, при этом
              отдельные комплектующие, такие как уплотнители и фурнитура, можно легко заменить.
            </li>
            <li>
              <strong>Высокая прочность:</strong> Алюминиевые профили Алютех устойчивы к весовым и
              ветровым нагрузкам, а также к резким перепадам температур и коррозии.
            </li>
            <li>
              <strong>Отличная герметизация:</strong> Качественные уплотнители предотвращают
              попадание пыли, влаги и неприятных запахов в помещение.
            </li>
            <li>
              <strong>Удобная установка:</strong> Небольшая нагрузка на несущие конструкции
              позволяет избежать дополнительных работ по укреплению.
            </li>
            <li>
              <strong>Разнообразие дизайна:</strong> Можно выбрать любой цвет и тип открывания окон,
              включая глухие, распашные, раздвижные или поворотные варианты.
            </li>
            <li>
              <strong>Доступная цена:</strong> Низкая стоимость при высоком качестве делает окна
              ALUTECH конкурентоспособными на рынке.
            </li>
          </ol>
        </div>
      </section>
      <section class="product-page__triple">
        <div class="product-page__triple-text">
          <p class="product-page__subtitle">
            Наши выполненные работы: <NuxtLink to="/objects">Все проекты</NuxtLink>
          </p>
        </div>
      </section>
    </main>
  </div>
</template>
