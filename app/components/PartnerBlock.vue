<script setup lang="ts">
// Блок продукции Алютех + партнёры (Swiper) + StrongAside
// Перенос из src/modules/partner/PartnerElement.vue + StrongAside.vue

import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const swiperModules = [Pagination, Autoplay]

const partners = [
  { name: 'Fapim', logo: '/images/partners/fapim.webp' },
  { name: 'Vorne', logo: '/images/partners/vorne.webp' },
  { name: 'Алютех', logo: '/images/partners/aluteh.webp' },
  { name: 'Giesse', logo: '/images/partners/giesse.webp' },
  { name: 'Siegenia', logo: '/images/partners/siegenia.webp' },
  { name: 'Dr. Hahn', logo: '/images/partners/drhahn.webp' }
]

const videos = [
  { id: 'IQgRz7pdrfc', title: 'Продукция Алютех 1' },
  { id: 'RkZb4nDh0wo', title: 'Продукция Алютех 2' },
  { id: 'dnljNeoMNbU', title: 'Продукция Алютех 3' }
]
</script>

<template>
  <div>
    <!-- Продукция + Партнёры -->
    <section class="partner-block">
      <div class="partner-block__triangle" />
      <div class="partner-block__content">
        <h3 class="partner-block__heading">ПРОДУКЦИЯ АЛЮТЕХ</h3>
        <p class="partner-block__sub">Виды открывания и фурнитуры</p>

        <div class="partner-block__line-el">
          <div />
          <div />
          <div />
        </div>

        <!-- Видео -->
        <ClientOnly>
          <div class="partner-block__videos">
            <div v-for="video in videos" :key="video.id" class="partner-block__video">
              <iframe
                :src="`https://www.youtube.com/embed/${video.id}`"
                :title="video.title"
                frameborder="0"
                allow="
                  accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture;
                "
                allowfullscreen
                loading="lazy"
              />
            </div>
          </div>
          <template #fallback>
            <div class="partner-block__videos">
              <div
                v-for="video in videos"
                :key="video.id"
                class="partner-block__video partner-block__video--placeholder"
              />
            </div>
          </template>
        </ClientOnly>

        <!-- Партнёры -->
        <div class="partner-block__partners">
          <p class="partner-block__partners-title">НАШИ ПАРТНЕРЫ</p>
          <div class="partner-block__partners-line" />
          <ClientOnly>
            <Swiper
              class="partner-block__swiper"
              :modules="swiperModules"
              :slides-per-view="2"
              :space-between="10"
              :pagination="{ clickable: true }"
              :grab-cursor="true"
              :loop="true"
              :breakpoints="{
                950: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 5, spaceBetween: 30 }
              }"
              :autoplay="{ delay: 3500, disableOnInteraction: false }"
            >
              <SwiperSlide v-for="p in partners" :key="p.name" class="partner-block__slide">
                <img :src="p.logo" :alt="p.name" />
              </SwiperSlide>
            </Swiper>
          </ClientOnly>
        </div>
      </div>

      <!-- StrongAside: Работаем с 2008 года (inside partner-block as original, margin-top: 10%) -->
      <section class="strong-aside">
        <div class="strong-aside__content">
          <div class="strong-aside__left">
            <h4>Работаем с светопрозрачными конструкциями с 2008 года</h4>
            <p>
              Одна из крупнейших компаний специализрующиеся на установке панорамных окон в Москве и
              регионах.<br />
              ООО «Алюминиевые ситемы» — компания полного цикла, которая выполняет все виды работ
              «под ключ» — от проектирования до монтажа и обслуживания систем.
            </p>
          </div>
          <div class="strong-aside__right">
            <p class="strong-aside__question">Почему стоит выбрать окна из алюминия?</p>
            <div class="strong-aside__rating">
              <section class="strong-aside__col strong-aside__col--alu">
                <p><strong style="color: #d683ce">Алюминий</strong></p>
                <span>Срок службы: <strong style="color: #d683ce">50 лет</strong></span
                ><br />
                <span
                  >Экологичность:
                  <strong
                    ><span style="color: #d683ce">Не выделяет</span> вредных веществ</strong
                  ></span
                ><br />
                <span
                  >Поддерживает горение:
                  <strong style="color: #d683ce">Не поддерживает</strong></span
                ><br /><br />
                <span>Прочность: <meter value="1" /></span><br />
                <span>Стильный дизайн: <meter value="1" /></span>
              </section>
              <section class="strong-aside__col strong-aside__col--pvh">
                <p><strong style="color: #4285f4">ПВХ</strong></p>
                <span>Срок службы: <strong style="color: #4285f4">20 лет</strong></span
                ><br />
                <span
                  >Экологичность:
                  <strong><span style="color: #4285f4">Выделяет</span> формальдегид</strong></span
                ><br />
                <span
                  >Поддерживает горение:
                  <strong
                    >При горении выделяются
                    <span style="color: #4285f4">опасные вещества</span></strong
                  ></span
                ><br /><br />
                <span>Прочность: <meter value="0.4" class="meter-pvh" /></span><br />
                <span>Стильный дизайн: <meter value="0.5" class="meter-pvh" /></span>
              </section>
            </div>
          </div>
        </div>

        <!-- Белый блок с услугами -->
        <div class="strong-aside__services">
          <div class="strong-aside__services-grid">
            <div class="strong-aside__service">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="#823D7B"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0"
                />
                <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
              </svg>
              <p class="strong-aside__service-title">Инжиниринг фасадов зданий</p>
              <p class="strong-aside__service-text">
                Наш конструкторский отдел готов спроектировать самые сложные конструкции
              </p>
            </div>
            <div class="strong-aside__service">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="#823D7B"
                viewBox="0 0 16 16"
              >
                <path
                  d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"
                />
              </svg>
              <p class="strong-aside__service-title">Управление проектами</p>
              <p class="strong-aside__service-text">
                Система управления будет с вами на всех этапах реализации проекта конструкции
              </p>
            </div>
            <div class="strong-aside__service">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                fill="#823D7B"
                viewBox="0 0 16 16"
              >
                <path d="M16 4.5a4.5 4.5 0 0 1-1.703 3.526L13 5l2.959-1.11q.04.3.041.61" />
                <path
                  d="M11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.5 4.5 0 0 0 11.5 9m-1.292-4.361-.596.893.809-.27a.25.25 0 0 1 .287.377l-.596.893.809-.27.158.475-1.5.5a.25.25 0 0 1-.287-.376l.596-.893-.809.27a.25.25 0 0 1-.287-.377l.596-.893-.809.27-.158-.475 1.5-.5a.25.25 0 0 1 .287.376M3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
                />
              </svg>
              <p class="strong-aside__service-title">Монтаж изделий</p>
              <p class="strong-aside__service-text">
                Монтажное подразделение компании выполняет весь комплекс работ в соответствии с
                ГОСТом
              </p>
            </div>
            <div class="strong-aside__service">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="#823D7B"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 4.143A1.071 1.071 0 1 0 8 2a1.071 1.071 0 0 0 0 2.143m-4.668 1.47 3.24.316v2.5l-.323 4.585A.383.383 0 0 0 7 13.14l.826-4.017c.045-.18.301-.18.346 0L9 13.139a.383.383 0 0 0 .752-.125L9.43 8.43v-2.5l3.239-.316a.38.38 0 0 0-.047-.756H3.379a.38.38 0 0 0-.047.756Z"
                />
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8" />
              </svg>
              <p class="strong-aside__service-title">Постгарантийное обслуживание</p>
              <p class="strong-aside__service-text">
                На все конструкции, установленные на объектах, мы предоставляем гарантию и сервисное
                обслуживание.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<style>
@import 'swiper/css';
@import 'swiper/css/pagination';
</style>

<style scoped>
/* ── Продукция + Партнёры ── */
.partner-block {
  position: relative;
  width: 75%;
  margin: 8% auto 0;
  border-radius: 16px;
  overflow: hidden;
  background: #082c43;
  box-shadow:
    -31px 31px 65px #041724,
    31px -31px 65px #0c4162;
}
.partner-block__triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 0 40%);
  background-color: rgb(194, 194, 194);
  z-index: 1;
}
.partner-block__content {
  position: relative;
  z-index: 2;
  padding: 2% 3%;
}
.partner-block__heading {
  text-align: center;
  color: #082c43;
  font-size: 4vh;
  font-weight: 700;
  font-family: 'Arial', sans-serif;
  padding-top: 2%;
}
.partner-block__sub {
  text-align: center;
  color: rgb(83, 83, 83);
  font-weight: 700;
  padding: 0.2% 2% 0;
}
.partner-block__line-el {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 1%;
}
.partner-block__line-el div {
  width: 40px;
  height: 3px;
  background: #082c43;
}
.partner-block__videos {
  display: grid;
  width: 80%;
  min-height: 35vh;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 2% auto 0;
}
.partner-block__video {
  border-radius: 8px;
  overflow: hidden;
  transition: 0.2s transform ease-in-out;
}
.partner-block__video:hover {
  transform: translateY(-10px);
}
.partner-block__video iframe {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.partner-block__video--placeholder {
  background: #0c4162;
  aspect-ratio: 16/9;
  animation: pulse 2s infinite;
}
.partner-block__partners {
  margin-top: 4%;
}
.partner-block__partners-title {
  color: white;
  font-family: 'Montserrat', Helvetica, sans-serif;
  font-size: max(20px, 2vw);
  font-weight: 700;
  padding: 3%;
}
.partner-block__partners-line {
  background: rgb(243, 243, 243);
  height: 5px;
  width: 10vw;
  margin-left: 3%;
}
.partner-block__swiper {
  margin: 2% 0;
  padding: 0 3% 2%;
}
.partner-block__slide img {
  height: 100%;
  width: 100%;
  border-radius: 8px;
}

/* ── StrongAside ── */
.strong-aside {
  background-image: url('/images/partners/bee_overlay.png');
  background-size: cover;
  width: 100%;
  min-height: 45vh;
  margin-top: 10%;
}
.strong-aside__content {
  width: 95%;
  margin: 0 auto;
}
.strong-aside__left h4 {
  text-align: left;
  color: rgb(205, 219, 247);
  font-weight: bold;
  font-size: 4vh;
}
.strong-aside__left p {
  color: #d4d4d4;
  padding-top: 2%;
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
}
.strong-aside__question {
  color: rgb(236, 236, 236);
  font-size: 2rem;
  padding-top: 4%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
.strong-aside__rating {
  display: flex;
  justify-content: space-between;
  background: rgba(128, 130, 163, 0.14);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.6px);
  -webkit-backdrop-filter: blur(5.6px);
  justify-content: space-between;
  padding: 2%;
  margin-top: 2%;
}
.strong-aside__col {
  min-width: 30vw;
}
.strong-aside__col p {
  text-align: center;
  font-size: 2.5vh;
}
.strong-aside__col span {
  font-size: 2vh;
  color: aliceblue;
  white-space: nowrap;
}
.strong-aside__col meter {
  width: 100%;
  max-width: 28vw;
  height: 20px;
  margin-top: 2%;
  border-radius: 8px;
  overflow: hidden;
  display: block;
}
.strong-aside__col meter::-webkit-meter-bar {
  background: transparent;
  border-radius: 8px;
}
.strong-aside__col meter::-webkit-meter-optimum-value {
  background: #823d7b;
  border-radius: 8px;
}
.strong-aside__col meter::-moz-meter-bar {
  background: transparent;
  border-radius: 8px;
}
.strong-aside__col meter::-moz-meter-optimum {
  background: #823d7b;
  border-radius: 8px;
}
.strong-aside__col meter::-ms-fill-lower {
  background: transparent;
}
.strong-aside__col meter::-ms-fill-upper {
  background: #823d7b;
}
.meter-pvh {
  width: 100%;
  height: 20px;
  margin-top: 2%;
}
.meter-pvh::-webkit-meter-bar {
  background: transparent;
  border-radius: 8px;
}
.meter-pvh::-webkit-meter-optimum-value {
  background: #4285f4 !important;
  border-radius: 8px;
}
.meter-pvh::-moz-meter-bar {
  background: transparent;
  border-radius: 8px;
}
.meter-pvh::-moz-meter-optimum {
  background: #4285f4 !important;
  border-radius: 8px;
}
.meter-pvh::-ms-fill-lower {
  background: transparent;
}
.meter-pvh::-ms-fill-upper {
  background: #4285f4 !important;
}

/* Белый блок услуг */
.strong-aside__services {
  background: white;
  height: 25vh;
  width: 90%;
  margin-top: 6%;
  box-sizing: border-box;
}
.strong-aside__services-grid {
  width: 95%;
  margin-left: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
.strong-aside__service {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4%;
}
.strong-aside__service-title {
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
  margin-top: 8%;
  color: black;
}
.strong-aside__service-text {
  font-weight: 600;
  font-size: 14px;
  color: rgb(83, 83, 83);
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@media screen and (max-width: 1900px) {
  .strong-aside__services {
    width: 100%;
    height: auto;
  }
}

@media screen and (max-width: 920px) {
  .strong-aside__left h4 {
    color: white;
  }
  .strong-aside__rating {
    flex-direction: column;
  }
  .strong-aside__services {
    width: 100%;
    margin-top: 16%;
  }
  .strong-aside__service {
    align-items: center;
  }
}

@media screen and (max-width: 900px) {
  .partner-block {
    width: 90%;
  }
  .partner-block__partners-title {
    text-align: center;
    white-space: nowrap;
  }
  .partner-block__partners-line {
    margin: 0 auto;
    width: 25vw;
  }
}
</style>
