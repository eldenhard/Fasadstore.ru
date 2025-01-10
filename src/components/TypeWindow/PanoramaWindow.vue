<script setup>
import FooterComponent from '@/components/Footer/Footer.vue'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import { ref } from 'vue'

const line = ref(null)
const lineSecond = ref(null)

useIntersectionObserver([line, lineSecond], (target) => {
  target.classList.add('visible') 
})
</script>

<template>
  <div class="page">
    <main class="content">
      <section class="content__section">
        <div class="content__text">
          <p class="content__title">Окна <br>панорамные</p>
          <p class="content__description">
            Алюминиевые окна ALUTECH (Алютех) универсальны. Панорамные окна пропускают значительно
            больше солнечного света, чем классические окна. Поэтому днем не придется использовать
            искусственное освещение. Панорамные окна обеспечивают отличную обзорность, делают
            помещения визуально больше и объединяют его с окружающим ландшафтом.
          </p>
        </div>
        <figure class="content__image">
          <img src="./assets/image.png" alt="Фото 1" />
        </figure>
      </section>

      <section class="content__section_double">
        <div class="content__image_double">
          <figure class="content__image">
            <h4 class="content__title">Окна с термоизоляцией ALT W72</h4>
            <img src="./assets/фото 2.jpg" alt="Фото 2" />
          </figure>
          <figure class="content__image">
            <h4 class="content__title">Окна c повышенной термоизоляцией ALT W77</h4>
            <img src="./assets/фото 3.jpg" alt="Фото 3" />
          </figure>
        </div>
        <br />
        <div class="content__text_double">
          <div class="content__text">
            <p class="content__description">
              <i class="bi bi-thermometer-sun" style="font-size: 50px"></i>

              R<sub>0</sub> = 0,86 М²·°C/Вт.
              <br />
              Защищают дом от холода зимой
            </p>
            <i class="bi bi-volume-down" style="font-size: 50px"></i>
            <span><b>43 ДБ</b>. <br />Блокируют уличный шум</span>
            <ul>
              <li>Глубина монтажа: 72 мм</li>
              <li>Толщина стеклопакетов: до 56 мм</li>
              <li>Поворотный, откидной и поворотно-откидной механизмы открывания створок</li>
              <li>Максимально высокие теплотехнические характеристики окон</li>
              <li>
                Большой выбор цветов (шкала RAL) и <br />декоративных приемов для профиля
                (порошковое окрашивание, анодирование)
              </li>
              <li>Долгий срок службы оконных конструкций.</li>
              <li>Максимальная высота створки 2600 мм</li>
              <li>Максимальная ширина 1650 мм</li>
              <li>Максимальный вес створки 150 кг</li>
              <li>Теплопроводность 1,76</li>
            </ul>
          </div>
          <div class="content__text">
            <p class="content__description">
              <i class="bi bi-thermometer-sun" style="font-size: 50px"></i>

              R<sub>0</sub> = 1,07 М²·°C/Вт.
              <br />
              Даже в сибирские морозы сохраняют в доме тепло.
            </p>
            <i class="bi bi-volume-mute" style="font-size: 50px"></i>
            <span><b>47 ДБ</b>. <br />Защищают даже от шума автомагистралей.</span>
            <ul>
              <li>Глубина монтажа: 77 мм</li>
              <li>Толщина стеклопакетов: 68 мм</li>
              <li>Поворотный, откидной и поворотно-откидной механизмы открывания створок</li>
              <li>Максимально высокие теплотехнические характеристики окон</li>
              <li>
                Большой выбор цветов (шкала RAL) и декоративных приемов для профиля (порошковое
                окрашивание, анодирование)
              </li>
              <li>Долгий срок службы оконных конструкций</li>
              <li>Максимальная высота створки 2600 мм</li>
              <li>Максимальная ширина створки 1650 мм</li>
              <li>Максимальный вес створки 150 кг</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="content__section_one">
        <figure class="content__image">
          <h4 class="content__title">Окна ALT W62</h4>
          <img src="./assets/фото 4.png" alt="Фото 2" />
        </figure>

        <div class="content__text">
          <p class="content__description">
            <i class="bi bi-thermometer-sun" style="font-size: 50px"></i>
            R<sub>0</sub> = 0,67 М²·°C/Вт.
          </p>
          <i class="bi bi-volume-down" style="font-size: 50px"></i>
          <span><b>До 43 ДБ</b>. <br /></span>
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

      <div class="line hidden" ref="line"></div>

      <section class="content__section__triple">
        <div class="content__text">
          <p class="content__title">
            Технические решения, помогающие окнам Алютех <br />
            <b>защищать</b> дом от шума и холода
          </p>
          <p class="content__description"></p>
        </div>
        <div class="content__image">
          <div class="content__image__item">
            <img src="./assets/фото 5.webp" alt="фото 5" />
            <p>Звукоизоляционные вставки из вспененного материала</p>
          </div>
          <div class="content__image__item">
            <img src="./assets/фото 6.webp" alt="фото 6" />
            <p>Многоконтурная система уплотнителей</p>
          </div>
          <div class="content__image__item">
            <img src="./assets/фото 7.webp" alt="фото 7" />
            <p>Стеклопакеты до 58 мм</p>
          </div>
        </div>
      </section>
      <section class="content_section__fullwidth">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IQgRz7pdrfc?si=Zam7Ip38ExzdU4cT"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <p>
          Образцы алюминиевых окон ALUTECH (Алютех) вы сможете посмотреть в нашем офисе по адресу :
          Москва, Дмитровское шоссе д.157, стр3.
        </p>
        <p>
          Или получить консультацию по телефону <a href="tel=8(495)765-50-26"></a>8(495)765-50-26
        </p>
      </section>
      <section class="content__section__triple">
        <div class="content__text">
          <p class="content__title">Три вида покрытий</p>
          <br />
        </div>
        <div class="content__image">
          <div
            class="content__image__item"
            style="width: 20vw; height: 25vh; position: relative"
          >
            <img
              src="./assets/ph2.jpg"
              alt="фото 22"
              style="width: 100%; height: 100%; object-fit: cover"
            />
            <p>
              Полимерное покрытие — это доступ к 200 оттенкам в глянцевом или матовом исполнении, а
              также с эффектом муар.
            </p>
          </div>
          <div
            class="content__image__item"
            style="width: 20vw; height: 25vh; position: relative"
          >
            <img
              src="./assets/ph3.webp"
              alt="фото 34"
              style="width: 100%; height: 100%; object-fit: cover"
            />
            <p>Декорирование под дерево</p>
          </div>
          <div
            class="content__image__item"
            style="width: 20vw; height: 25vh; position: relative"
          >
            <img
              src="./assets/ph4.jpg"
              alt="фото 44"
              style="width: 100%; height: 100%; object-fit: cover"
            />
            <p>
              Анодирование — специальное решение, которое подчеркивает фактуру металла и продлевает
              срок его службы.
            </p>
          </div>
        </div>
      </section>
      <section class="content__section__triple">
        <div class="content__text">
          <p class="content__title" align="center"><b>Безопасность</b> окон Алютех</p>
          <p class="content__description" align="center">
            Установив конструкции Алютех за безопасность вашего дома можно не беспокоиться.
            <br />Окна Алютех оснащены максимальным количеством противовзломных комплектующих
          </p>
          <br />
        </div>
      </section>

      <section class="content__section" style="margin-top: 4%">
        <div class="content__text">
          <p class="content__title">Класс защиты RC2</p>
          <p class="content__description">
            Противовзломные штапики - предотвращают выпадение стеклопакета <br />
            Ударостойкое заполнение – устойчиво к Механическим повреждениям <br />
            Фурнитура - исключает риск самостоятельного Открытия окон Алютех детьми
          </p>
        </div>
        <figure class="content__image">
          <img src="./assets/фото 8.jpg" alt="Фото 8" />
        </figure>
      </section>

      <section class="content__section__triple">
        <div class="content__text">
          <p class="content__title">Типы ручек</p>
          <p class="content__description"></p>
        </div>
        <div class="content__image">
          <div class="content__image__item">
            <img src="./assets/фото 10.webp" alt="фото 10" />
            <p>Видимый редуктор</p>
          </div>
          <div class="content__image__item">
            <img src="./assets/фото 11.webp" alt="фото 11" />
            <p>Скрытый редуктор</p>
          </div>
          <div class="content__image__item">
            <img src="./assets/фото 12.webp" alt="фото 12" />
            <p>Ручка с замком</p>
          </div>
        </div>
      </section>
      <div class="line hidden" ref="lineSecond"></div>
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
      <!-- </section>
      <section class="content__section__triple"> -->
        <div class="content__image">
          <div class="content__image__item" style="width: 30vw; height: 35vh; position: relative">
            <img
              src="./assets/photo_1.jpg"
              alt="фото 22"
              style="width: 100%; height: 100%; object-fit: cover"
            />
          </div>
          <div class="content__image__item" style="width: 30vw; height: 35vh; position: relative">
            <img
              src="./assets/photo_2.jpg"
              alt="фото 34"
              style="width: 100%; height: 100%; object-fit: cover"
            />
          </div>
          <div class="content__image__item" style="width: 30vw; height: 35vh; position: relative">
            <img
              src="./assets/photo_3.jpg"
              alt="фото 44"
              style="width: 100%; height: 100%; object-fit: cover"
            />
          </div>
        </div>
      </section>
 
    </main>
    <FooterComponent />
  </div>
</template>

<style lang="scss" scoped>
@use './style/window-view.scss';
</style>
