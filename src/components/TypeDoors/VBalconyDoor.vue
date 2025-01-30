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
          <p class="content__title">Дверь балконная (Террасная)</p>
          <p class="content__description">
            Решение для обустройства террасы или балкона. Благодаря запиранию фурнитуры по периметру
            конструкции достигается герметичность и взломостойкость дверей. Минимальная высота
            порога (20 мм) -это безопасный и комфортный доступ в помещение.
          </p>
        </div>
        <figure class="content__image">
          <img src="./assets/assets_balcony/фото 1.jpg" alt="Фото 1" />
        </figure>
      </section>

      <section class="content__section_one" style="margin-top: 8%; flex-direction: row-reverse">
        <figure class="content__image">
          <img src="./assets/assets_balcony/фото 3.jpg" alt="Фото 2" />
        </figure>

        <div class="content__text" style="height: 100%">
          <h5>Технические характеристики</h5>

          <div class="category">Размеры</div>
          <ul>
            <li>Максимальная высота створки: 2500 мм</li>
            <li>Максимальная ширина створки: 1600 мм</li>
            <li>Макс. вес заполнения: 150 кг</li>
          </ul>
          <br />
          <div class="category">Энергоэффективность</div>
          <ul>
            <li>Толщина заполнения: до 58 мм</li>
            <li>Теплопроводность: Uf = 1,6 W/m2∙K</li>
            <li>Приведенное сопр. теплопередаче (ГОСТ 26602.1): R₀ до 1 м2∙°С/Вт</li>
          </ul>
          <br />
          <div class="category">Комфорт</div>
          <ul>
            <li>Водопроницаемость (ГОСТ 26602.2): Класс А</li>
            <li>Воздухопроницаемость (ГОСТ 26602.2): Класс А</li>
            <li>Сопр. ветровой нагрузке (ГОСТ 26602.5): Класс А</li>
            <li>Звукоизоляция (ГОСТ 22602.3): До 48 дБ</li>
          </ul>
          <br />
          <div class="category">Безопасность</div>
          <ul>
            <li>Класс взломостойкости: RC2 (СТБ EN 1627)</li>
            <li>Тип открывания: внутреннее</li>
          </ul>
          <br />
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
            <img src="./assets/assets_balcony/фото7.webp" alt="фото 10" style="height: 100%" />
            <p>Односторонняя c видимым редуктором</p>
          </div>
          <div class="content__image__item">
            <img src="./assets/assets_balcony/фото 8.webp" alt="фото 11" />
            <p>Односторонняя со скрытым редуктором</p>
          </div>
          <div class="content__image__item">
            <img src="./assets/assets_balcony/фото 9.webp" alt="фото 12" />
            <p>Односторонняя с ключом</p>
          </div>
        </div>
      </section>

      <section class="content__section__triple">
        <div class="content__text">
          <p class="content__title">
            <b>Защита от шума и влаги</b> достигается при использовании решений
          </p>
        </div>
      </section>
      <section class="content__section__triple" style="margin-top: -1%">
        <div class="content__image">
          <div class="content__image__item">
            <img src="./assets/assets_balcony/фото 4.webp" alt="фото 10" style="height: 100%" />
            <p>Вставка из вспененного материала</p>
          </div>
          <div class="content__image__item">
            <img src="./assets/assets_balcony/фото 5.webp" alt="фото 11" />
            <p>Многократная система уплотнителей</p>
          </div>
          <div class="content__image__item">
            <img src="./assets/assets_balcony/фото 6.webp" alt="фото 12" />
            <p>Стеклопакет толщина до 58 мм</p>
          </div>
        </div>
      </section>

      <section class="content__section_one" style="margin-top: 8%">
        <figure class="content__image">
          <img src="./assets/assets_balcony/фото 10.webp" alt="Фото 10" />
        </figure>

        <div class="content__text" style="height: 100%">
         
         <h5>Пыль с улицы не проникнет в дом.</h5>  <br>
         <h5>Полиамидные уголки защитят дом от пыли и выхлопных
          газов.</h5>  
          <br>
            <p> Террасные двери «АЛЮТЕХ» оснащены рядом комплектующих для безопасности:</p>
            <br>
            <ul>
              <li>Противовзломные штапики -предотвращают Выпадение стеклопакета</li>
              <li>Ударостойкое заполнение – устойчиво к Механическим повреждениям</li>
              <li>Фурнитура-исключает риск самостоятельного открытия окон Алютех детьми</li>
            </ul>           
        </div>
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
