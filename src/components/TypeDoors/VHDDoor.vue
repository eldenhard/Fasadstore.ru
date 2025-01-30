<script lang="ts" setup>
import FooterComponent from '@/components/Footer/Footer.vue'
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const line = ref(null)
const lineSecond = ref(null)
const lineThird = ref(null)
const lineFive = ref(null)
const third = ref(null)
useIntersectionObserver([line, lineSecond, lineThird, lineFive], (target: HTMLElement) => {
  target.classList.add('visible')
})

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('changeColor')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.9
    }
  )
  if (third.value) {
    observer.observe(third.value)
  }
})
</script>

<template>
  <div class="page">
    <main class="content">
      <section class="content__section">
        <div class="content__text">
          <p class="content__title">HD-двери крупноформатные</p>
          <p class="content__description">
            Алюминиевые двери Алютех- это решение для комфорта и безопасности. Двери «АЛЮТЕХ»
            эффективно сберегают тепло, вписываются в любой архитектурный стиль, обладают высокой
            взломостойкостью
          </p>
        </div>
        <figure class="content__image">
          <img src="@/components/DirectionJob/assets/alum_window.png" alt="Фото 1" />
        </figure>
      </section>

      <section class="content__section_triangle">
        <div class="content_image">
          <img src="./assets/фото 21.jpg" alt="Фото 21" />
        </div>
        <div class="content__text content__text--1">
          <p class="content__description">
            Классические двери Алютех — для тех, <br />
            кто ценит качественные решения. Они удобны в использовании Классические алюминиевые
            двери Алютех создают в доме уютную и безопасную атмосферу
          </p>
        </div>
        <div class="content__text content__text--2">
          <p class="content__description">
            Крупноформатные HD-двери (высотой до 3 м) — новый вариант для тех, кто ищет что-то
            особенное. Они подходят для . проектов, где высоты классических дверей Алютех
            недостаточно
          </p>
        </div>
      </section>

      <!-- <section class="content__section_double">
        <div class="content__image_double">
          <figure class="content__image"  style="height: auto;">
            <h4 class="content__title">Крупноформатная дверь ALT W72 HD</h4>
            <img src="./assets/фото 2.jpg" alt="Фото 2" style="width: 90%; height: 57%; object-fit: fill;"/>
          </figure>
          <figure class="content__image" style="height: auto;">
            <h4 class="content__title">Классическая дверь ALT W72</h4>
            <img src="./assets/фото 3.jpg" alt="Фото 3"/>
          </figure>
        </div>
        <br />
        <div class="content__text_double" style="margin-top: -30%;">
          <div class="content__text">
            <ul>
              <li>Максимальная высота подвижного элемента (створки) – 3 м</li>
              <li>Максимальная ширина подвижного элемента – 1,25 м</li>
              <li>Заполнение – толщиной до 56 мм</li>
              <li>Монтажная глубина профиля – 72 мм</li>
              <li>Предельная масса – до 250 кг</li>
              <li>Теплоизоляция – 2,09 Вт/м²·К</li>
              <li>Взломостойкость – RC2</li>
              <li>Класс воздухопроницаемости – А</li>
              <li>Водонепроницаемость – класс А</li>
              <li>Сопротивляемость ветру – А-класс</li>
            </ul>
            <p>Типы открывания: внутреннее, наружное</p>
          </div>
          <div class="content__text">
            <p class="content__description">
              Данные конструкции ALT W72 отличаются повышенной шумо- и теплоизоляцией. <br>
              Двери Alutech W72 полностью адаптированы под наш климат и подходят для зданий всех типов.
            </p>
            <ul>
              <li>Предельная высота створки – 2,5 м</li>
              <li>Предельная ширина створки – 1,1 м</li>
              <li>Толщина заполнения – до 54 мм</li>
              <li>Глубина профильной системы – 72 мм</li>
              <li>Масса – до 250 кг</li>
              <li>Уровень теплоизоляции – 1,6 Вт/м²·К</li>
              <li>Взломостойкость – D-класса</li>
              <li>Водонепроницаемость – класс 2А (50 Па)</li>
              <li>Сопротивляемость ветровой нагрузке – класс С4 (до 1600 Па)</li>
            </ul>

            <p>Типы открывания: внутреннее, наружное</p>
          </div>
        </div>
      </section> -->

      <section class="content__section_one" style="margin-top: 8%; flex-direction: row-reverse">
        <figure class="content__image">
          <h4 class="content__title">Крупноформатная дверь ALT W72 HD</h4>
          <img src="./assets/фото 2.jpg" alt="Фото 2" style="height: 70%" />
        </figure>

        <div class="content__text" style="height: 100%">
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

      <section class="content__section_one" style="margin-top: -15%">
        <figure class="content__image">
          <h4 class="content__title">Классическая дверь ALT W72</h4>
          <img src="./assets/фото 3.jpg" alt="Фото 2" />
        </figure>

        <div class="content__text">
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

      <section class="content__section_one" style="flex-direction: row-reverse">
        <figure class="content__image">
          <h4 class="content__title">Классическая дверь ALT W62</h4>
          <img src="./assets/фото 5.jpg" alt="Фото 2" />
        </figure>

        <div class="content__text">
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

      <div class="line hidden" ref="line"></div>

      <section class="content__section__triple">
        <div class="content__text">
          <p class="content__title">Типы ручек</p>
          <p class="content__description"></p>
        </div>
        <div class="content__image">
          <div class="content__image__item">
            <img src="./assets/фото 6.png" alt="фото 10" style="height: 100%" />
            <p>Нажимная ручка с замком</p>
          </div>
          <div class="content__image__item">
            <img src="./assets/фото 7.webp" alt="фото 11" />
            <p>Нажимной гарнитур с замком</p>
          </div>
          <div class="content__image__item">
            <img src="./assets/фото 8.webp" alt="фото 12" />
            <p>Ручка с штангой</p>
          </div>
        </div>
      </section>

      <section class="content__section__triple">
        <div class="content__text">
          <p class="content__title">
            Прочные петли. <br />
            Ресурс петель - <b>1 000 000 циклов</b> закрытия и открытия
          </p>
          <p class="content__description"></p>
        </div>
      </section>

      <section class="content__section_triangle">
        <div class="content_image">
          <img src="./assets/фото 9.webp" alt="Фото 21" style="height: 60%" />
        </div>
      </section>

      <section class="content__section_one" style="margin-top: -15%">
        <figure class="content__image">
          <h4 class="content__title">Термомосты Anti-Be-Metal</h4>
          <img src="./assets/фото 10.webp" alt="Фото 2" />
        </figure>

        <div
          class="content__text"
          style="display: flex; align-items: center; justify-content: center"
        >
          <h4>
            Исключают деформацию дверей из-за большой разницы температур снаружи и внутри помещения.
            Увеличивают срок службы фурнитуры.
          </h4>
        </div>
      </section>
      <div class="line hidden" ref="lineThird"></div>

      <section class="content__section__triple">
        <div class="content__text">
          <p class="content__title">Типы стеклопакета</p>
          <p class="content__description"></p>
        </div>
        <div class="content__image">
          <div class="content__image__item">
            <img src="./assets/фото 11.webp" alt="фото 10" />
            <p>Толщина стеклопакета — до 54 мм</p>
          </div>

          <div class="content__image__item">
            <img src="./assets/фото 12.webp" alt="фото 12" />
            <p>Вставки из вспененного РЕ-материала</p>
          </div>
        </div>
      </section>

      <div class="line hidden" ref="lineSecond"></div>

      <section class="content__section__triple">
        <div class="content__text">
          <p class="content__title">
            Пороги высотой всего 14, 20 или 22 мм <br />
            обеспечивают комфортное перемещение из дома на улицу и обратно, <br />
            а выпадающий порог — безбарьерную среду.
          </p>
          <p class="content__description"></p>
        </div>
      </section>

      <section class="content_section__fullwidth">
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/0ef116c9afce3cea236c4a5986083755/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
        ></iframe>
        <p>
          Классические двери «АЛЮТЕХ» оснащены рядом комплектующих для безопасности:
          <br />
        </p>

        <p>противовзломные штапики -предотвращают Выпадение стеклопакета</p>
        <p>ударостойкое заполнение – устойчиво к Механическим повреждениям</p>
        <p>фурнитура-исключает риск самостоятельного Открытия окон Алютех детьми</p>
      </section>
      <div class="line hidden" ref="lineFive"></div>
      <section class="content__section__triple">
        <div class="content__text">
          <p class="content__title">Преимущества алюминиевых окон ALUTECH</p>
          <p class="content__description"></p>
        </div>
        <div class="content_air_block">
          <ol>
            <li>
              <b>Долгий срок службы:</b> Профили ALUTECH служат более 50 лет, при этом отдельные
              комплектующие, такие как уплотнители и фурнитура, можно легко заменить.
            </li>
            <li>
              <b>Высокая прочность:</b> Алюминиевые профили Алютех устойчивы к весовым и ветровым
              нагрузкам, а также к резким перепадам температур и коррозии.
            </li>
            <li>
              <b>Отличная герметизация:</b> Качественные уплотнители предотвращают попадание пыли,
              влаги и неприятных запахов в помещение.
            </li>
            <li>
              <b>Удобная установка:</b> Небольшая нагрузка на несущие конструкции позволяет избежать
              дополнительных работ по укреплению.
            </li>
            <li>
              <b>Разнообразие дизайна:</b> Можно выбрать любой цвет и тип открывания окон, включая
              глухие, распашные, раздвижные или поворотные варианты.
            </li>
            <li>
              <b>Доступная цена:</b> Низкая стоимость при высоком качестве делает окна ALUTECH
              конкурентоспособными на рынке.
            </li>
          </ol>
        </div>
      </section>

      <section class="content__section__triple">
        <div class="content__text">
          <p class="content__title">
            Наши выполненные работы: <a href="/objects" target="_blank">Все проекты</a> или
            <a href="https://t.me/aluteh_systems" target="_blank">
              <i class="bi bi-telegram"></i>
            </a>
          </p>
          <p class="content__description"></p>
        </div>
       
      </section>
    </main>
    <FooterComponent />
  </div>
</template>

<style lang="scss" scoped>
@use './style/doors-view.scss';
</style>
