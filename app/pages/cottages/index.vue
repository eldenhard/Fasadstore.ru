<script setup lang="ts">
useSeoData()
useSchemaOrg({
  type: 'Product',
  data: {
    name: 'Остекление коттеджей',
    description: 'Остекление коттеджей ALUTECH: ALT W62, W72, W77.',
    brand: { '@type': 'Brand', name: 'ALUTECH' },
    manufacturer: { '@type': 'Organization', name: 'АлюПроект' }
  }
})

const line1 = ref<HTMLElement | null>(null)
const line2 = ref<HTMLElement | null>(null)
useIntersectionObserver([line1, line2], (el: HTMLElement) => {
  el.classList.add('product-page__line--visible')
})
</script>

<style>
.glass-cottages{
    height: 100vh;
   
}
</style>

<template>
  <div class="product-page">

    <main class="product-page__content">
      <section class="product-page__hero">
        <div class="product-page__hero-text">
          <p class="product-page__title">Окна классические</p>
          <p class="product-page__description">
            Алюминиевые окна ALUTECH (Алютех) универсальны. Они могут устанавливаться в любых
            помещениях – в детской, спальне на кухне. Алюминиевые окна энергоэффективны и безопасны
            в использовании. Каждое изделие проходит многоступенчатый контроль качества.
          </p>
        </div>
        <figure class="product-page__hero-image">
          <img src="/images/windows/alum_window.png" alt="Классические окна ALUTECH" />
        </figure>
      </section>
      <section class="product-page__double">
        <div class="product-page__double-images">
          <figure class="product-page__double-fig">
            <h4 class="product-page__subtitle--small">Окна с термоизоляцией ALT W72</h4>
            <img src="/images/windows/photo2.jpg" alt="ALT W72" />
          </figure>
          <figure class="product-page__double-fig">
            <h4 class="product-page__subtitle--small">Окна c повышенной термоизоляцией ALT W77</h4>
            <img src="/images/windows/photo3.jpg" alt="ALT W77" />
          </figure>
        </div>
        <div class="product-page__double-specs">
          <div class="product-page__spec-card">
            <p class="product-page__spec-value">
              R₀ = 0,86 М²·°C/Вт.<br />Защищают дом от холода зимой
            </p>
            <p class="product-page__spec-value">
              <strong>43 ДБ</strong>.<br />Блокируют уличный шум
            </p>
            <ul>
              <li>Глубина монтажа: 72 мм</li>
              <li>Толщина стеклопакетов: до 56 мм</li>
              <li>Поворотный, откидной и поворотно-откидной механизмы открывания створок</li>
              <li>Максимально высокие теплотехнические характеристики окон</li>
              <li>
                Большой выбор цветов (шкала RAL) и декоративных приемов для профиля (порошковое
                окрашивание, анодирование)
              </li>
              <li>Долгий срок службы оконных конструкций.</li>
              <li>Максимальная высота створки 2600 мм</li>
              <li>Максимальная ширина 1650 мм</li>
              <li>Максимальный вес створки 150 кг</li>
              <li>Теплопроводность 1,76</li>
            </ul>
          </div>
          <div class="product-page__spec-card">
            <p class="product-page__spec-value">
              R₀ = 1,07 М²·°C/Вт.<br />Даже в сибирские морозы сохраняют в доме тепло.
            </p>
            <p class="product-page__spec-value">
              <strong>47 ДБ</strong>.<br />Защищают даже от шума автомагистралей.
            </p>
            <ul>
              <li>Глубина монтажа: 72 мм</li>
              <li>Толщина стеклопакетов: до 56 мм</li>
              <li>Поворотный, откидной и поворотно-откидной механизмы открывания створок</li>
              <li>Максимально высокие теплотехнические характеристики окон</li>
              <li>
                Большой выбор цветов (шкала RAL) и декоративных приемов для профиля (порошковое
                окрашивание, анодирование)
              </li>
              <li>Долгий срок службы оконных конструкций.</li>
              <li>Максимальная высота створки 2600 мм</li>
              <li>Максимальная ширина 1650 мм</li>
              <li>Максимальный вес створки 150 кг</li>
              <li>Теплопроводность 1,76</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="product-page__single">
        <figure class="product-page__single-image">
          <h4 class="product-page__subtitle--small">Окна ALT W62</h4>
          <img src="/images/windows/photo4.png" alt="ALT W62" />
        </figure>
        <div class="product-page__spec-card">
          <p class="product-page__spec-value">R₀ = 0,67 М²·°C/Вт.</p>
          <p class="product-page__spec-value"><strong>До 43 ДБ</strong></p>
          <ul>
            <li>Глубина монтажа: 62 мм</li>
            <li>Толщина стеклопакетов: 40 мм</li>
            <li>Поворотный, откидной и поворотно-откидной механизмы открывания створок</li>
            <li>Максимально высокие теплотехнические характеристики окон</li>
            <li>
              Большой выбор цветов (шкала RAL) и декоративных приемов для профиля (порошковое
              окрашивание, анодирование)
            </li>
            <li>Долгий срок службы оконных конструкций</li>
            <li>Максимальная высота створки 2000 мм</li>
            <li>Максимальная ширина створки 1500 мм</li>
            <li>Максимальный вес створки 100 кг</li>
          </ul>
        </div>
      </section>
      <div ref="line1" class="product-page__line"></div>
      <section class="product-page__triple">
        <div class="product-page__triple-text">
          <p class="product-page__subtitle">
            Технические решения, помогающие окнам Алютех <br /><strong>защищать</strong> дом от шума
            и холода
          </p>
        </div>
        <div class="product-page__triple-items">
          <div class="product-page__triple-item">
            <img src="/images/windows/photo5.webp" alt="Звукоизоляционные вставки" />
            <p>Звукоизоляционные вставки из вспененного материала</p>
          </div>
          <div class="product-page__triple-item">
            <img src="/images/windows/photo6.webp" alt="Система уплотнителей" />
            <p>Многоконтурная система уплотнителей</p>
          </div>
          <div class="product-page__triple-item">
            <img src="/images/windows/photo7.webp" alt="Стеклопакеты" />
            <p>Стеклопакеты до 58 мм</p>
          </div>
        </div>
      </section>
      <section class="product-page__fullwidth">
        <ClientOnly>
          <iframe
            width="80%"
            height="350"
            src="https://rutube.ru/play/embed/0ef116c9afce3cea236c4a5986083755/"
            frameborder="0"
            allow="clipboard-write; autoplay"
            allowfullscreen
          />
        </ClientOnly>
        <p>
          Образцы алюминиевых окон ALUTECH (Алютех) вы сможете посмотреть в нашем офисе по адресу :
          Москва, Дмитровское шоссе д.157, стр3.
        </p>
        <p>Или получить консультацию по телефону <a href="tel:+74957655026">8(495)765-50-26</a></p>
      </section>
      <div ref="line2" class="product-page__line"></div>
      <section class="product-page__triple">
        <div class="product-page__triple-text">
          <p class="product-page__subtitle">Три вида покрытий</p>
        </div>
        <div class="product-page__triple-items">
          <div class="product-page__triple-item product-page__triple-item--cover">
            <img src="/images/windows/ph2.jpg" alt="Полимерное покрытие" />
            <p>
              Полимерное покрытие — это доступ к 200 оттенкам в глянцевом или матовом исполнении, а
              также с эффектом муар.
            </p>
          </div>
          <div class="product-page__triple-item product-page__triple-item--cover">
            <img src="/images/windows/ph3.webp" alt="Декорирование под дерево" />
            <p>Декорирование под дерево</p>
          </div>
          <div class="product-page__triple-item product-page__triple-item--cover">
            <img src="/images/windows/ph4.jpg" alt="Анодирование" />
            <p>
              Анодирование — специальное решение, которое подчеркивает фактуру металла и продлевает
              срок его службы.
            </p>
          </div>
        </div>
      </section>
      <section class="product-page__triple">
        <div class="product-page__triple-text">
          <p class="product-page__subtitle" style="text-align: center">
            <strong>Безопасность</strong> окон Алютех
          </p>
          <p class="product-page__description" style="text-align: center">
            Установив конструкции Алютех за безопасность вашего дома можно не беспокоиться.<br />Окна
            Алютех оснащены максимальным количеством противовзломных комплектующих
          </p>
        </div>
      </section>
      <section class="product-page__hero" style="margin-top: 4%">
        <div class="product-page__hero-text">
          <p class="product-page__subtitle">Класс защиты RC2</p>
          <p class="product-page__description">
            Противовзломные штапики - предотвращают выпадение стеклопакета<br />Ударостойкое
            заполнение – устойчиво к Механическим повреждениям<br />Фурнитура - исключает риск
            самостоятельного Открытия окон Алютех детьми
          </p>
        </div>
        <figure class="product-page__hero-image">
          <img src="/images/windows/photo8.jpg" alt="Безопасность RC2" />
        </figure>
      </section>
      <section class="product-page__triple">
        <div class="product-page__triple-text">
          <p class="product-page__subtitle">Типы ручек</p>
        </div>
        <div class="product-page__triple-items">
          <div class="product-page__triple-item">
            <img src="/images/windows/photo10.webp" alt="Видимый редуктор" />
            <p>Видимый редуктор</p>
          </div>
          <div class="product-page__triple-item">
            <img src="/images/windows/photo11.webp" alt="Скрытый редуктор" />
            <p>Скрытый редуктор</p>
          </div>
          <div class="product-page__triple-item">
            <img src="/images/windows/photo12.webp" alt="Ручка с замком" />
            <p>Ручка с замком</p>
          </div>
        </div>
      </section>
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
        <div class="product-page__triple-items">
          <div class="product-page__triple-item product-page__triple-item--portfolio">
            <img src="/images/windows/photo_1_1.jpg" alt="Проект 1" />
          </div>
          <div class="product-page__triple-item product-page__triple-item--portfolio">
            <img src="/images/windows/photo_2_2.jpg" alt="Проект 2" />
          </div>
          <div class="product-page__triple-item product-page__triple-item--portfolio">
            <img src="/images/windows/photo_3_3.jpg" alt="Проект 3" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
