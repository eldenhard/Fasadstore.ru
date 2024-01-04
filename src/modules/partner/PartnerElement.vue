<template>
    <div class="container-block">
        <h3 align="center">Оконная компания</h3>
        <p align="center">Бесплатная консультация со специалистом по пластиковым окнам</p>

     
            <section class="line_element">
                <div></div>
                <div></div>
                <div></div>
            </section>
            <section class="three_photo">
                <img src="./assets/1.jpg" alt="">
                <img src="./assets/2.jpg" alt="">           
                <img src="./assets/3.jpg" alt="">
            </section>
        <div class="direction_description">
            <p>НАШИ ПАРТНЕРЫ</p>
            <div class="line"></div>
        </div>
        <swiper class="swiper" :modules="modules" :slides-per-view="1" :space-between="10" :pagination="{ clickable: true }"
            :grab-cursor="true" :loop="true" :breakpoints="{
                '640': {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                '768': {
                    slidesPerView: 4,
                    spaceBetween: 40
                },
                '1024': {
                    slidesPerView: 5,
                    spaceBetween: 50
                }
            }" :autoplay="{
    delay: 250000,
    disableOnInteraction: false
}">
            <!-- <swiper
      class="swiper"
      :modules="modules"
      :space-between="30"
      :slides-per-view="3"
      :slides-per-group="3"
      :loop="true"
      :loop-fill-group-with-blank="true"
      :navigation="true"
      :pagination="{ clickable: true }"
      :autoplay="{
            delay: 250000,
            disableOnInteraction: false
            }"
    > -->
            <swiper-slide class="slide"><img src="./assets/gardian.png" alt=""></swiper-slide>
            <swiper-slide class="slide"><img src="./assets/fapim.png" alt=""> </swiper-slide>

            <swiper-slide class="slide"><img src="./assets/gardian.png" alt=""></swiper-slide>
            <swiper-slide class="slide"><img src="./assets/fapim.png" alt=""> </swiper-slide>
            <swiper-slide class="slide"><img src="./assets/gardian.png" alt=""></swiper-slide>
            <swiper-slide class="slide"><img src="./assets/fapim.png" alt=""> </swiper-slide>
            <swiper-slide class="slide"><img src="./assets/gardian.png" alt=""></swiper-slide>
            <swiper-slide class="slide"><img src="./assets/fapim.png" alt=""> </swiper-slide>
            <swiper-slide class="slide"><img src="./assets/gardian.png" alt=""></swiper-slide>
            <swiper-slide class="slide"><img src="./assets/fapim.png" alt=""> </swiper-slide>
        </swiper>
    </div>
</template>
  
<script>
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default {
    name: 'swiper-example-loop-group',
    title: 'Loop mode with multiple slides per group',
    components: {
        Swiper,
        SwiperSlide
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
.three_photo{
    display: grid;
    width: 80%;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 0 auto;
}
img{
    height: 100%;
}
.container-block {
    width: 75%;
    margin: 0 auto;
    margin-top: 8%;
    border-radius: 32px;
    // background: #a2b2bd;
    // box-shadow: -31px 31px 74px #636f77,
    //     31px -31px 74px #bdd3e3;
    //     border-radius: 32px;
    // background: #082C43;
    // box-shadow:  -31px 31px 74px #061e2e,
    //              31px -31px 74px #0a3a58;

    border-radius: 16px;
    background: #082C43;
    box-shadow: -31px 31px 65px #041724,
        31px -31px 65px #0c4162;
        h3{
            font-family: 'Arial black', sans-serif;
            color: white;
            padding-top: 2%;
            font-size: 3vh;
        }
        p{
            color: var(--colorBlue);
        }
}

.direction_description {
    color: rgb(175, 197, 238);
    margin-top: 4%;
    font-family: 'Montserrat', Helvetica, sans-serif;
    font-size: max(20px, 2vw);
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1em;
    padding: 3%;
}

.swiper {
    margin-top: 2%;
    padding: 0% 3% 2%;
}

@media screen and (max-width: 900px) {
    .direction_description {
        text-align: center;
        white-space: nowrap;
        margin-top: 4%;
    }
}
</style>