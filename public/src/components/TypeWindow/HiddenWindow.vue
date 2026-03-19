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
        <div class="content__text" style="width: 60%">
          <h1 class="content__title">Скрытая <br />створка</h1>
          <p class="content__description">
            Данный вид алюминиевого профиля на 20% увеличивает площадь остекления. В следствии чего
            пропускает больше солнечного света. В сравнении с классическим окном. Фасад вашего дома
            выглядит современно и стильно благодаря одинаковому виду глухой и створочной частей
            окна.
          </p>
        </div>
        <figure class="content__image">
          <img src="./assets/hidden_ph1.jpg" alt="Фото 1" />
        </figure>
      </section>

      <section class="content__section_one" style="margin-top: 6%">
        <figure class="content__image">
          <h2 class="content__title">Окна ALT W72HS</h2>
          <img
            src="./assets/фото 6.webp"
            alt="Фото 6"
            style="height: 100%; width: 100%; object-fit: contain"
          />
        </figure>

        <div class="content__text">
          <p class="content__description">
            <i class="bi bi-thermometer-sun" style="font-size: 50px"></i>
            R<sub>0</sub> = 0,67 М²·°C/Вт.
          </p>
          <i class="bi bi-volume-down" style="font-size: 50px"></i>
          <span><b>До 48 ДБ</b>. <br />Защищают даже от шума автомагистралей</span>
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

      <div class="line hidden" ref="line"></div>

      <section class="content__section__triple">
        <div class="content__text">
          <h2 class="content__title">Три вида покрытий</h2>
          <br />
        </div>
        <div class="content__image">
          <div class="content__image__item" style="width: 20vw; height: 25vh; position: relative">
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
          <div class="content__image__item" style="width: 20vw; height: 25vh; position: relative">
            <img
              src="./assets/ph3.webp"
              alt="фото 34"
              style="width: 100%; height: 100%; object-fit: cover"
            />
            <p>Декорирование под дерево</p>
          </div>
          <div class="content__image__item" style="width: 20vw; height: 25vh; position: relative">
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
          <h2 class="content__title">
            Технические решения, помогающие окнам Алютех <br />
            <b>защищать</b> дом от шума и холода
          </h2>
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

      <section class="content__section__triple">
        <div class="content__text">
          <h2 class="content__title" align="center"><b>Безопасность</b> окон Алютех</h2>
          <p class="content__description" align="center">
            Установив конструкции Алютех за безопасность вашего дома можно не беспокоиться.
            <br />Окна Алютех оснащены максимальным количеством противовзломных комплектующих
          </p>
          <br />
        </div>
      </section>

      <section class="content__section" style="margin-top: 4%">
        <div class="content__text">
          <h2 class="content__title">Класс защиты A</h2>
          <p class="content__description">
            Противовзломные штапики - предотвращают выпадение стеклопакета <br />
            Ударостойкое заполнение – устойчиво к механическим повреждениям <br />
            Фурнитура - исключает риск самостоятельного открытия окон Алютех детьми
          </p>
        </div>
        <figure class="content__image" style="width: 80%">
          <img src="./assets/фото 8.jpg" alt="Фото 8" />
        </figure>
      </section>

      <section class="content__section__triple">
        <div class="content__text">
          <h2 class="content__title">Типы ручек</h2>
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
      <section class="content_section__fullwidth">
        <iframe
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/a10a3c621a10466670c07d090d12f572/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
        ></iframe>
        <!-- <iframe
          src="https://www.youtube.com/embed/IQgRz7pdrfc?si=Zam7Ip38ExzdU4cT"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe> -->
        <p>
          Образцы алюминиевых окон ALUTECH (Алютех) вы сможете посмотреть в нашем офисе по адресу :
          Москва, Дмитровское шоссе д.157, стр3.
        </p>
        <p>
          Или получить консультацию по телефону <a href="tel=8(495)765-50-26"></a>8(495)765-50-26
        </p>
      </section>

      <div class="line hidden" ref="lineSecond"></div>
      <section class="content__section__triple">
        <div class="content__text">
          <h2 class="content__title">Преимущества алюминиевых окон ALUTECH</h2>
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
          <h2 class="content__title">
            Наши выполненные работы: <a href="/objects" target="_blank">Все проекты</a> или
            <a href="https://t.me/aluteh_systems" target="_blank">
              <i class="bi bi-telegram"></i>
            </a>
          </h2>
          <p class="content__description"></p>
        </div>
      </section>
    </main>
    <FooterComponent />
  </div>
</template>

<style lang="scss" scoped>
@use './style/window-view.scss';
</style>
