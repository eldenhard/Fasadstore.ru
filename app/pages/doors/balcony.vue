<script setup lang="ts">
useSeoData()
useSchemaOrg({
  type: 'Product',
  data: {
    name: 'Балконные (Террасные) двери ALUTECH',
    description: 'Балконные и террасные алюминиевые двери ALUTECH.',
    brand: { '@type': 'Brand', name: 'ALUTECH' },
    manufacturer: { '@type': 'Organization', name: 'АлюПроект' }
  }
})
const route = useRoute()
const activeIndex = ref(1)
const tabs = ['HD-двери', 'Балконные', 'Классические']
const paths = ['/doors/hd', '/doors/balcony', '/doors/classic']
watch(
  () => route.path,
  (p) => {
    if (p.includes('hd')) activeIndex.value = 0
    else if (p.includes('balcony')) activeIndex.value = 1
    else if (p.includes('classic')) activeIndex.value = 2
  },
  { immediate: true }
)

const line1 = ref<HTMLElement | null>(null)
const line2 = ref<HTMLElement | null>(null)
useIntersectionObserver([line1, line2], (el: HTMLElement) => {
  el.classList.add('product-page__line--visible')
})
</script>
<template>
  <div class="product-page">
    <nav class="product-page__nav">
      <ul class="product-page__nav-list">
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="[
            'product-page__nav-item',
            { 'product-page__nav-item--active': activeIndex === index }
          ]"
          @click="navigateTo(paths[index])"
        >
          {{ tab }}
          <div v-if="activeIndex === index" class="product-page__nav-underline" />
        </li>
      </ul>
    </nav>
    <main class="product-page__content">
      <section class="product-page__hero">
        <div class="product-page__hero-text">
          <p class="product-page__title">
            Дверь балконная (Террасная) <span class="product-page__light-color">ALUTECH</span>
          </p>
          <br />
          <p class="product-page__description">
            Решение для обустройства террасы или балкона. Благодаря запиранию фурнитуры по периметру
            конструкции достигается герметичность и взломостойкость дверей. Минимальная высота
            порога (20 мм) -это безопасный и комфортный доступ в помещение.
          </p>
        </div>
        <figure class="product-page__hero-image">
          <img src="/images/doors/balcony/photo1.jpg" alt="Балконная дверь ALUTECH" />
        </figure>
      </section>
      <section class="product-page__single" style="margin-top: 8%; flex-direction: row-reverse">
        <figure class="product-page__single-image">
          <img src="/images/doors/balcony/photo3.jpg" alt="Балконная дверь" />
        </figure>
        <div class="product-page__spec-card" style="height: 100%">
          <h5>Технические характеристики</h5>
          <div class="product-page__category">Размеры</div>
          <ul>
            <li>Максимальная высота створки: 2500 мм</li>
            <li>Максимальная ширина створки: 1600 мм</li>
            <li>Макс. вес заполнения: 150 кг</li>
          </ul>
          <br />
          <div class="product-page__category">Энергоэффективность</div>
          <ul>
            <li>Толщина заполнения: до 58 мм</li>
            <li>Теплопроводность: Uf = 1,6 W/m2∙K</li>
            <li>Приведенное сопр. теплопередаче (ГОСТ 26602.1): R₀ до 1 м2∙°С/Вт</li>
          </ul>
          <br />
          <div class="product-page__category">Комфорт</div>
          <ul>
            <li>Водопроницаемость (ГОСТ 26602.2): Класс А</li>
            <li>Воздухопроницаемость (ГОСТ 26602.2): Класс А</li>
            <li>Сопр. ветровой нагрузке (ГОСТ 26602.5): Класс А</li>
            <li>Звукоизоляция (ГОСТ 22602.3): До 48 дБ</li>
          </ul>
          <br />
          <div class="product-page__category">Безопасность</div>
          <ul>
            <li>Класс взломостойкости: RC2 (СТБ EN 1627)</li>
            <li>Тип открывания: внутреннее</li>
          </ul>
          <br />
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
              src="/images/doors/balcony/photo7.webp"
              alt="Односторонняя c видимым редуктором"
              style="height: 100%"
            />
            <p>Односторонняя c видимым редуктором</p>
          </div>
          <div class="product-page__triple-item">
            <img
              src="/images/doors/balcony/photo8.webp"
              alt="Односторонняя со скрытым редуктором"
            />
            <p>Односторонняя со скрытым редуктором</p>
          </div>
          <div class="product-page__triple-item">
            <img src="/images/doors/balcony/photo9.webp" alt="Односторонняя с ключом" />
            <p>Односторонняя с ключом</p>
          </div>
        </div>
      </section>
      <section class="product-page__triple">
        <div class="product-page__triple-text">
          <p class="product-page__subtitle">
            <strong>Защита от шума и влаги</strong> достигается при использовании решений
          </p>
        </div>
      </section>
      <section class="product-page__triple" style="margin-top: -1%">
        <div class="product-page__triple-items">
          <div class="product-page__triple-item">
            <img
              src="/images/doors/balcony/photo4.webp"
              alt="Вставка из вспененного материала"
              style="height: 100%"
            />
            <p>Вставка из вспененного материала</p>
          </div>
          <div class="product-page__triple-item">
            <img src="/images/doors/balcony/photo5.webp" alt="Многократная система уплотнителей" />
            <p>Многократная система уплотнителей</p>
          </div>
          <div class="product-page__triple-item">
            <img src="/images/doors/balcony/photo6.webp" alt="Стеклопакет толщина до 58 мм" />
            <p>Стеклопакет толщина до 58 мм</p>
          </div>
        </div>
      </section>
      <section class="product-page__single" style="margin-top: 8%">
        <figure class="product-page__single-image">
          <img src="/images/doors/balcony/photo10.webp" alt="Полиамидные уголки" />
        </figure>
        <div class="product-page__spec-card" style="height: 100%">
          <h5>Пыль с улицы не проникнет в дом.</h5>
          <br />
          <h5>Полиамидные уголки защитят дом от пыли и выхлопных газов.</h5>
          <br />
          <p>Террасные двери «АЛЮТЕХ» оснащены рядом комплектующих для безопасности:</p>
          <br />
          <ul>
            <li>Противовзломные штапики -предотвращают Выпадение стеклопакета</li>
            <li>Ударостойкое заполнение – устойчиво к Механическим повреждениям</li>
            <li>Фурнитура-исключает риск самостоятельного открытия окон Алютех детьми</li>
          </ul>
        </div>
      </section>
      <div ref="line2" class="product-page__line"></div>
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
