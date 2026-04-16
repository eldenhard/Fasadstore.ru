<script setup lang="ts">
import { WINDOW_PRODUCT_TABS } from '~/constants/productTabs'

useSeoData()
useSchemaOrg({
  type: 'Product',
  data: {
    name: 'Окна со скрытой створкой ALUTECH',
    description:
      'Алюминиевые окна со скрытой створкой ALUTECH ALT W72HS. На 20% больше площадь остекления.',
    brand: { '@type': 'Brand', name: 'ALUTECH' },
    manufacturer: { '@type': 'Organization', name: 'АлюПроект' }
  }
})
const tabs = WINDOW_PRODUCT_TABS
const { activeIndex } = useProductTabs(tabs)

const line1 = ref<HTMLElement | null>(null)
const line2 = ref<HTMLElement | null>(null)
useIntersectionObserver([line1, line2], (el: HTMLElement) => {
  el.classList.add('product-page__line--visible')
})
useScrollReveal()
</script>
<template>
  <div class="product-page">
    <ProductTabs :items="tabs" :active-index="activeIndex" />
    <main class="product-page__content">
      <AppBreadcrumbs />
      <section class="product-page__hero reveal">
        <div class="product-page__hero-text product-page__hero-text--wide">
          <h1 class="product-page__title">Скрытая <br />створка</h1>
          <p class="product-page__description">
            Данный вид алюминиевого профиля на 20% увеличивает площадь остекления. В следствии чего
            пропускает больше солнечного света. В сравнении с классическим окном. Фасад вашего дома
            выглядит современно и стильно благодаря одинаковому виду глухой и створочной частей
            окна.
          </p>
        </div>
        <figure class="product-page__hero-image">
          <img
            src="/images/windows/hidden-sash-hero-window.jpg"
            alt="Окна со скрытой створкой ALUTECH"
          />
        </figure>
      </section>
      <section class="product-page__single product-page__single--offset reveal">
        <figure class="product-page__single-image">
          <h2 class="product-page__subtitle--small">Окна ALT W72HS</h2>
          <img
            src="/images/windows/sealing-system.webp"
            alt="ALT W72HS"
            class="product-page__image--contain"
          />
        </figure>
        <div class="product-page__spec-card">
          <p class="product-page__spec-value">R₀ = 0,67 М²·°C/Вт.</p>
          <p class="product-page__spec-value">
            <strong>До 48 ДБ</strong>.<br />Защищают даже от шума автомагистралей
          </p>
          <ul>
            <li>Глубина монтажа: 72 мм</li>
            <li>Толщина стеклопакетов: 50 мм</li>
            <li>Поворотный, откидной и поворотно-откидной механизмы открывания створок</li>
            <li>Максимально высокие теплотехнические характеристики окон</li>
            <li>
              Большой выбор цветов (шкала RAL) и декоративных приемов для профиля (порошковое
              окрашивание, анодирование)
            </li>
            <li>Долгий срок службы оконных конструкций</li>
            <li>Максимальная высота створки 2450 мм</li>
            <li>Максимальная ширина створки 1600 мм</li>
          </ul>
        </div>
      </section>
      <div ref="line1" class="product-page__line"></div>
      <section class="product-page__triple reveal">
        <div class="product-page__triple-text">
          <h2 class="product-page__subtitle">Три вида покрытий</h2>
        </div>
        <div class="product-page__triple-items">
          <div class="product-page__triple-item product-page__triple-item--cover">
            <img src="/images/windows/finish-polymer.jpg" alt="Полимерное покрытие" />
            <p>
              Полимерное покрытие — это доступ к 200 оттенкам в глянцевом или матовом исполнении, а
              также с эффектом муар.
            </p>
          </div>
          <div class="product-page__triple-item product-page__triple-item--cover">
            <img src="/images/windows/finish-wood.webp" alt="Декорирование под дерево" />
            <p>Декорирование под дерево</p>
          </div>
          <div class="product-page__triple-item product-page__triple-item--cover">
            <img src="/images/windows/finish-anodized.jpg" alt="Анодирование" />
            <p>
              Анодирование — специальное решение, которое подчеркивает фактуру металла и продлевает
              срок его службы.
            </p>
          </div>
        </div>
      </section>
      <div ref="line2" class="product-page__line"></div>
      <section class="product-page__triple reveal">
        <div class="product-page__triple-text">
          <h2 class="product-page__subtitle">
            Технические решения, помогающие окнам Алютех <br /><strong>защищать</strong> дом от шума
            и холода
          </h2>
        </div>
        <div class="product-page__triple-items">
          <div class="product-page__triple-item">
            <img src="/images/windows/foam-inserts.webp" alt="Звукоизоляционные вставки" />
            <p>Звукоизоляционные вставки из вспененного материала</p>
          </div>
          <div class="product-page__triple-item">
            <img src="/images/windows/sealing-system.webp" alt="Система уплотнителей" />
            <p>Многоконтурная система уплотнителей</p>
          </div>
          <div class="product-page__triple-item">
            <img src="/images/windows/glazing-unit-58mm.webp" alt="Стеклопакеты" />
            <p>Стеклопакеты до 58 мм</p>
          </div>
        </div>
      </section>
      <section class="product-page__triple reveal">
        <div class="product-page__triple-text">
          <h2 class="product-page__subtitle product-page__subtitle--centered">
            <strong>Безопасность</strong> окон Алютех
          </h2>
          <p class="product-page__description product-page__description--centered">
            Установив конструкции Алютех за безопасность вашего дома можно не беспокоиться.<br />Окна
            Алютех оснащены максимальным количеством противовзломных комплектующих
          </p>
        </div>
      </section>
      <section class="product-page__hero product-page__hero--spaced reveal">
        <div class="product-page__hero-text">
          <h2 class="product-page__subtitle">Класс защиты A</h2>
          <p class="product-page__description">
            Противовзломные штапики - предотвращают выпадение стеклопакета<br />Ударостойкое
            заполнение – устойчиво к механическим повреждениям<br />Фурнитура - исключает риск
            самостоятельного открытия окон Алютех детьми
          </p>
        </div>
        <figure class="product-page__hero-image product-page__hero-image--wide">
          <img src="/images/windows/security-class.jpg" alt="Безопасность класс A" />
        </figure>
      </section>
      <section class="product-page__triple reveal">
        <div class="product-page__triple-text">
          <h2 class="product-page__subtitle">Типы ручек</h2>
        </div>
        <div class="product-page__triple-items">
          <div class="product-page__triple-item">
            <img src="/images/windows/visible-gear-handle.webp" alt="Видимый редуктор" />
            <p>Видимый редуктор</p>
          </div>
          <div class="product-page__triple-item">
            <img src="/images/windows/hidden-gear-handle.webp" alt="Скрытый редуктор" />
            <p>Скрытый редуктор</p>
          </div>
          <div class="product-page__triple-item">
            <img src="/images/windows/lockable-handle.webp" alt="Ручка с замком" />
            <p>Ручка с замком</p>
          </div>
        </div>
      </section>
      <section class="product-page__fullwidth reveal">
        <ClientOnly
          ><iframe
            width="720"
            height="405"
            src="https://rutube.ru/play/embed/a10a3c621a10466670c07d090d12f572/"
            frameborder="0"
            allow="clipboard-write; autoplay"
            allowfullscreen
        /></ClientOnly>
        <p>
          Образцы алюминиевых окон ALUTECH (Алютех) вы сможете посмотреть в нашем офисе по адресу :
          Москва, Дмитровское шоссе д.157, стр3.
        </p>
        <p>Или получить консультацию по телефону <a href="tel:+74957655026">8(495)765-50-26</a></p>
      </section>
      <section class="product-page__triple reveal">
        <div class="product-page__triple-text">
          <h2 class="product-page__subtitle">Преимущества алюминиевых окон ALUTECH</h2>
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
      <section class="product-page__triple reveal">
        <div class="product-page__triple-text">
          <h2 class="product-page__subtitle">
            Наши выполненные работы: <NuxtLink to="/objects">Все проекты</NuxtLink>
          </h2>
        </div>
      </section>
    </main>
  </div>
</template>
