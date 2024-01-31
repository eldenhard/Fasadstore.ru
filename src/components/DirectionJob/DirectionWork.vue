<template>
  <div class="container-block">
    <div class="direction_description">
      <p>НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ</p>
    </div>
    <div class="container_accordion">
      <DirectionWorkMobile v-if="isMobile" />
    </div>
    <ul class="cards" style="margin-top: 4%">
      <!-- Алюминевые окна -->
      <li>
        <a class="card">
          <img src="./assets/alum_window.png" class="card__image" alt="Алюминевые окна" />
          <div class="card__overlay">
            <div class="card__header">
              <div class="card__header-text">
                <h3 class="card__title">Алюминевые окна</h3>
                <span class="card__status">Алютех (ALUTECH)</span>
              </div>
            </div>
            <p class="card__description">
              Окна премиум-класса теплые, созданные по индивидуальным
              заказам и сочетающие в себе стиль и надежность.
            </p>
          </div>
        </a>
      </li>
      <!-- Алюминевые раздвижные двери -->
      <li>
        <a class="card">
          <img src="./assets/alum_razd_door.png" class="card__image" alt="Алюминевые раздвижные двери" />
          <div class="card__overlay">
            <div class="card__header">
              <div class="card__header-text">
                <h3 class="card__title">Алюминевые раздвижные двери</h3>
                <span class="card__status">Алютех (ALUTECH)</span>
              </div>
            </div>
            <p class="card__description">
              Раздвижные двери для частных домов и коттеджей. Комфортное
              открывание. Максимальная площадь остекления
            </p>
          </div>
        </a>
      </li>
      <!-- Остекление террас и балконов -->
      <li>
        <a class="card">
          <img src="./assets/terrace.jpg" class="card__image" alt="Остекление террас и балконов" />
          <div class="card__overlay">
            <div class="card__header">
              <div class="card__header-text">
                <h3 class="card__title">Остекление террас и беседок</h3>
                <span class="card__status">Алютех (ALUTECH)</span>
              </div>
            </div>
            <p class="card__description">
              Портальные теплые конструкции для террас и веранд. Панорамное
              остекление в сдвижных и складывающихся системах
            </p>
          </div>
        </a>
      </li>
      <!-- Котеджи -->
      <li>
        <a class="card">
          <img src="./assets/villa.png" class="card__image" alt="Остекление котеджей" />
          <div class="card__overlay">
            <div class="card__header">
              <div class="card__header-text">
                <h3 class="card__title">Остекление котеджей</h3>
                <span class="card__status">Алютех (ALUTECH)</span>
              </div>
            </div>
            <p class="card__description">
              Предлагаем все виды остекления для коттеджей и загородных домов
              под ключ
            </p>
          </div>
        </a>
      </li>
      <!-- Алюминевые двери  -->
      <li>
        <a class="card">
          <img src="./assets/alum_doors.jpg" class="card__image" alt="Алюминевые двери" />
          <div class="card__overlay">
            <div class="card__header">
              <div class="card__header-text">
                <h3 class="card__title">Алюминевые двери</h3>
                <span class="card__status">Алютех (ALUTECH)</span>
              </div>
            </div>
            <p class="card__description">
              Двери АЛЮТЕХ придадут индивидуальность Вашему дому.
              Обладают повышенной тепло- и звукоизоляцией.
            </p>
          </div>
        </a>
      </li>
      <!-- Зимний сад -->
      <li>
        <a class="card">
          <img src="./assets/winter_garden.jpg" class="card__image" alt="Зимние сады" />
          <div class="card__overlay">
            <div class="card__header">
              <div class="card__header-text">
                <h3 class="card__title">Зимние сады</h3>
                <span class="card__status">Алютех (ALUTECH)</span>
              </div>
            </div>
            <p class="card__description">
              Остекление зимних садов под ключ
            </p>
          </div>
        </a>
      </li>
      <!-- Остекление фасадов -->
      <li>
        <a class="card">
          <img src="./assets/fasad.jpg" class="card__image" alt="Остекление фасадов, витражи" />
          <div class="card__overlay">
            <div class="card__header">
              <div class="card__header-text">
                <h3 class="card__title">Остекление фасадов, витражи</h3>
                <span class="card__status">Алютех (ALUTECH)</span>
              </div>
            </div>
            <p class="card__description">
              Витражное (панорамное) остекление
              для сплошного многоэтажного остекления

            </p>
          </div>
        </a>
      </li>
      <!-- Деревянные окна -->
      <li>
        <a class="card">
          <img src="./assets/wood.jpg" class="card__image" alt="Деревянные окна" />
          <div class="card__overlay">
            <div class="card__header">
              <div class="card__header-text">
                <h3 class="card__title">Деревянные окна</h3>
                <span class="card__status">Россия</span>
              </div>
            </div>
            <p class="card__description">
              Окна из массива дуба, лиственницы, сосны.
              Дерево-алюминий и алюмо-дерево

            </p>
          </div>
        </a>
      </li>
      <!-- Гаражные ворота -->
      <li>
        <a class="card">
          <img src="./assets/garage_doors.jpg" class="card__image" alt="Гаражные ворота" />
          <div class="card__overlay">
            <div class="card__header">
              <div class="card__header-text">
                <h3 class="card__title">Гаражные ворота</h3>
                <span class="card__status">Алютех (ALUTECH)</span>
              </div>
            </div>
            <p class="card__description">
              Гаражные секционные ворота – одно из самых популярных и современных решений, максимально удобны в
              эксплуатации
            </p>
          </div>
        </a>
      </li>
      <!-- Окна ПВХ -->
      <li>
        <a class="card">
          <img src="./assets/window_pvh.jpg" class="card__image" alt="Окна ПВХ" />
          <div class="card__overlay">
            <div class="card__header">
              <div class="card__header-text">
                <h3 class="card__title">Окна ПВХ</h3>
                <span class="card__status">Рехау (REHAU)</span>
              </div>
            </div>
            <p class="card__description">
              Немецкие пластиковые окна «Рехау» — гарантия качества, надежности
            </p>
          </div>
        </a>
      </li>

      <!-- Фурнитура -->
      <li>
        <a class="card">
          <img src="./assets/accessories.png" class="card__image" alt="Фурнитура" />
          <div class="card__overlay">
            <div class="card__header">
              <div class="card__header-text">
                <h3 class="card__title">Фурнитура</h3>
                <span class="card__status">Германия</span>
              </div>
            </div>
            <p class="card__description">
              Широкий ассортимент ведущих производителей фурнитуры для алюминиевых окон и дверей
            </p>
          </div>
        </a>
      </li>

      <!-- Стеклопакеты -->
      <li>
        <a class="card">
          <img src="./assets/double_glazing.jpg" class="card__image" alt="Стеклопакеты" />
          <div class="card__overlay">
            <div class="card__header">
              <div class="card__header-text">
                <h3 class="card__title">Стеклопакеты</h3>
                <span class="card__status">Алютех (ALUTECH)</span>
              </div>
            </div>
            <p class="card__description">
              Виды стеклопакетов и их функциональность
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
// import DeferredContent from 'primevue/deferredcontent';
// import Dialog from 'primevue/dialog';
import InputUIElement from '@/ui/Input/InputUIElement.vue'
import DirectionWorkMobile from './DirectionWorkMobile.vue'
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue'
export default {
  components: { InputUIElement, DirectionWorkMobile },
  setup() {
    const date = ref()
    const isMobile = ref(window.innerWidth < 900)

    const handleResize = () => {
      isMobile.value = window.innerWidth < 900
    }

    onMounted(() => {
      window.addEventListener('resize', handleResize)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize)
    })

    return {
      date,
      isMobile
    }
  }
}
</script>

<style scoped>
.container_accordion {
  margin: 0;
  width: 100%;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* width: 100vw; */
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 2rem;
  /* margin: 4rem 5vw; */
  padding: 0;
  list-style-type: none;
}

.card {
  position: relative;
  display: block;
  height: 40vh !important;
  border-radius: calc(8 * 1px);
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
  /* background: #082C43; */
  box-shadow:
    -31px 31px 65px #041724,
    31px -31px 65px #0c4162;
  transition: 0.3s box-shadow ease-in-out;
}

.card:hover {
  box-shadow:
    -31px 31px 65px #041724,
    21px -21px 55px #196797;
}

.card__image {
  width: 100%;
  height: auto;
}

.card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-radius: calc(8 * 1px);
  background-color: white;
  transform: translateY(100%);
  transition: 0.2s ease-in-out;
}

.card:hover .card__overlay {
  transform: translateY(0);
}

.card__header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  border-radius: calc(20 * 1px) 0 0 0;
  background-color: white;
  transform: translateY(-100%);
  transition: 0.2s ease-in-out;
}

.card:hover .card__header {
  transform: translateY(0);
}

.card__title {
  font-size: 1em;
  margin: 0 0 0.3em;
  color: #6a515e;
}

.card__status {
  font-size: 0.8em;
  color: #d7bdca;
}

.card__description {
  padding: 0 2em 2em;
  margin: 0;
  color: rgb(29, 29, 29);
  font-weight: 500;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.container-block {
  width: 75%;
  margin: 0 auto;
}

.direction_description {
  color: var(--colorBlue);
  margin-top: 4%;
  font-family: 'Montserrat', Helvetica, sans-serif;
  font-size: max(20px, 2vw);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1em;
}

img{
  filter: brightness(89%);
}
@media screen and (max-width: 900px) {
  .direction_description {
    text-align: center;
    white-space: nowrap;
    margin-top: 4%;
  }

  .cards {
    display: none;
  }

  .container-block {
    width: 90%;
    margin-top: 4%;
  }
}
</style>
