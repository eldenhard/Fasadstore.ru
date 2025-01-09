<template>
  <div class="container-block">
    <h3 align="center">ПРОДУКЦИЯ АЛЮТЕХ</h3>
    <p align="center" style="color: rgb(83, 83, 83); font-weight: 700; padding: .2% 2% 0;">
      Виды открывания и фурнитуры
    </p>

    <section class="line_element">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="three_photo">
      <div class="right_text">
        <iframe width="100" height="150" src="https://www.youtube.com/embed/IQgRz7pdrfc?si=Jh31k0fbGZZQcyRU"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
        <!-- <img src="./assets/1.jpg" alt="" />
        <div class="image-overlay">
          <p class="description_overlay">Алюминевые раздвижные двери</p>
        </div> -->
      </div>
      <div class="right_text">
        <iframe width="100" height="150" src="https://www.youtube.com/embed/RkZb4nDh0wo?si=xBfEvrelFB0anSqv"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
        <!-- <img src="./assets/2.jpg" alt="" style="z-index: 34" />
        <div class="image-overlay">
          <p class="description_overlay">Раздвижные панорамные двери</p>
        </div> -->
      </div>
      <div class="right_text">
        <!-- <img src="./assets/3.jpg" alt=""> -->
        <iframe width="100" height="100" src="https://www.youtube.com/embed/dnljNeoMNbU?si=UDJC52SfagHLVPY9"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
        <!-- <div class="image-overlay">
                    <p class="description_overlay"></p>
                </div> -->
      </div>
    </section>
    <section class="partners-section">
      <div class="direction_description">
        <p>НАШИ ПАРТНЕРЫ</p>
        <div class="line"></div>
      </div>
      <swiper class="swiper" :modules="modules" :slides-per-view="2" :space-between="10" :pagination="{ clickable: true }"
        :grab-cursor="true" :loop="true" 
        :breakpoints="{
          '950': {
            slidesPerView: 3,
            spaceBetween: 20
          },
          '1024': {
            slidesPerView: 5,
            spaceBetween: 30
          }
        }" 
        :autoplay="{
          delay: 3500,
          disableOnInteraction: false
        }"
        >
        <swiper-slide class="slide"><img src="./assets/fapim.webp" alt="фапим" /> </swiper-slide>
        <swiper-slide class="slide"><img src="./assets/vorne.webp" alt="ворне" /></swiper-slide>
        <swiper-slide class="slide"><img src="./assets/aluteh.webp" alt="алютех" /> </swiper-slide>
        <swiper-slide class="slide"><img src="./assets/giesse.webp" alt="гиес" /></swiper-slide>
        <swiper-slide class="slide"><img src="./assets/siegenia.webp" alt="сиениа" /></swiper-slide>
        <swiper-slide class="slide"><img src="./assets/drhahn.webp" alt="доктор хан" /></swiper-slide>

      </swiper>
    </section>

    <StrongAside style="margin-top: 10%;" />

  </div>
</template>

<script>
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import StrongAside from './StrongAside.vue'
export default {
  components: {
    Swiper,
    SwiperSlide,
    StrongAside
  },
  setup() {
    return {
      modules: [Pagination, Autoplay]
    }
  }
}
</script>

<style lang="scss" scoped>
.line {
  background: rgb(243, 243, 243);
  height: 5px;
  width: 10vw;
}

.three_photo {
  display: grid;
  width: 80%;
  min-height: 35vh;
  height: auto;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 0 auto;
}

img,
iframe {
  height: 100%;
  width: 100%;
  border-radius: 8px !important;
}

.container-block {
  position: relative;
  width: 75%;
  height: auto;
  margin: 0 auto;
  margin-top: 8%;
  border-radius: 16px;
  overflow: hidden;
  background: #082c43;
  box-shadow:
    -31px 31px 65px #041724,
    31px -31px 65px #0c4162;

  h3,
  p,
  .three_photo,
  .partners-section,
  .line {
    position: relative;
    z-index: 2;
    font-family: 'Arial', sans-serif;
  }

  h3 {
    padding-top: 2%;
    color: var(--backgroundBlue);
    font-size: 4vh;
    font-weight: 700;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 0 40%);
    background-color: rgb(194, 194, 194);
    z-index: 1;
  }
}

.direction_description {
  color: rgb(255, 255, 255);
  margin-top: 4%;
  font-family: 'Montserrat', Helvetica, sans-serif;
  font-size: max(20px, 2vw);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1em;
  padding: 3%;
}

.swiper {
  margin: 2% 0;
  padding: 0% 3% 2%;
}

.partners-section {
  display: flex;
  flex-direction: column;
  /* Изменение направления флексбокса на колонку */
}

.right_text {
  position: relative;
  cursor: pointer;
  transition: 0.2s transform ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
}

.image-overlay {
  position: absolute;
  display: flex;
  justify-content: center;
  border-radius: 8px;

  align-items: flex-end;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}

.description_overlay {
  font-weight: 600;
  font-size: 1.8vh;
  color: white;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
}

@media screen and (max-width: 900px) {

  .direction_description {
    text-align: center;
    white-space: nowrap;
    margin-top: 4%;

    .line {
      margin: 0 auto;
      width: 25vw;
    }
  }

  .container-block {
    width: 90%;
  }
}
</style>
