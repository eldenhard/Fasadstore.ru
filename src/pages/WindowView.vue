<script setup>
import { ref } from 'vue'

// Храним индекс активного элемента
const activeIndex = ref(0)

// Список вкладок
const tabs = ['Окна классические', 'Окна панорамные', 'Скрытая створка']
</script>

<template>
  <div class="page">
    <header class="nav">
      <ul class="nav__list">
        <!-- Перебираем вкладки -->
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ nav__item: true, nav__item__active: activeIndex === index }"
          @click="
            () => {
              activeIndex = index
            }
          "
        >
          {{ tab }}
          <div v-if="activeIndex === index" class="nav__underline"></div>
        </li>
      </ul>
    </header>

    <main class="content">
      <section class="content__section">
        <div class="content__text">
          <p class="content__title">Окна классические</p>
          <p class="content__description">
            Алюминиевые окна ALUTECH (Алютех) универсальны. Они могут устанавливаться в любых
            помещениях – в детской, спальне на кухне. Алюминиевые окна энергоэффективны и безопасны
            в использовании. Каждое изделие проходит многоступенчатый контроль качества.
          </p>
        </div>
        <figure class="content__image">
          <img src="@/components/DirectionJob/assets/alum_window.png" alt="Фото 1" />
        </figure>
      </section>

      <section class="content__section_double">
        <div class="content__image_double">
          <figure class="content__image">
            <h4 class="content__title">Окна с термоизоляцией ALT W72</h4>
            <img src="@/assets/фото 2.jpg" alt="Фото 2" />
          </figure>
          <figure class="content__image">
            <h4 class="content__title">Окна c повышенной термоизоляцией ALT W77</h4>
            <img src="@/assets/фото 3.jpg" alt="Фото 3" />
          </figure>
        </div>
        <div class="content__text_double">

            <div class="content__text">
              <p class="content__description">
                <i class="bi bi-thermometer-sun" style="font-size: 50px"></i>
    
                R<sub>0</sub> = 0,86 М²·°C/Вт.
                <br />
                Защищают дом от холода зимой
              </p>
              <i class="bi bi-volume-down" style="font-size: 50px"></i>
              <span><b>43 ДБ</b>. <br>Блокируют уличный шум</span>
              <ul>
                <li>Глубина монтажа: 72 мм</li>
                <li>Толщина стеклопакетов: до 56 мм</li>
                <li>Поворотный, откидной и поворотно-откидной механизмы открывания створок</li>
                <li>Максимально высокие теплотехнические характеристики окон</li>
                <li>
                  Большой выбор цветов (шкала RAL) и <br />декоративных приемов для профиля (порошковое
                  окрашивание, анодирование)
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
              <span><b>47 ДБ</b>. <br>Защищают даже от шума автомагистралей.</span>
              <ul>
                <li>Глубина монтажа: 72 мм</li>
                <li>Толщина стеклопакетов: до 56 мм</li>
                <li>Поворотный, откидной и поворотно-откидной механизмы открывания створок</li>
                <li>Максимально высокие теплотехнические характеристики окон</li>
                <li>
                  Большой выбор цветов (шкала RAL) и <br />декоративных приемов для профиля (порошковое
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

      <section class="content__section">
        <div class="content__text">
          <h2 class="content__title">Окна с повышенной термоизоляцией ALT W77</h2>
          <p class="content__description">
            R<sub>0</sub> = 1,07 М²·°C/Вт. Даже в сибирские морозы сохраняют в доме тепло. 47 ДБ.
            Защищают дом от шума.
          </p>
        </div>
        <figure class="content__image">
          <img src="" alt="Фото 3" />
          <figcaption>Фото 3</figcaption>
        </figure>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/window-view.scss';
</style>
