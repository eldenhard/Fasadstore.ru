<template>
    <div class="container-block">
        <h3 align="center">Оконная компания</h3>
        <p align="center" style="color: rgb(83, 83, 83)">Бесплатная консультация со специалистом по пластиковым окнам</p>


        <section class="line_element">
            <div></div>
            <div></div>
            <div></div>
        </section>
        <section class="three_photo">
            <div class="right_text">
                <img src="./assets/1.jpg" alt="">
                <div class="image-overlay">
                    <p class="description_overlay">Алюминевые раздвижные двери</p>
                </div>
            </div>
            <div class="right_text">
                <img src="./assets/2.jpg" alt="" style="z-index: 34;">
                <div class="image-overlay">
                    <p class="description_overlay">Раздвижные панорамные двери</p>
                </div>
            </div>
            <div class="right_text">
                <img src="./assets/3.jpg" alt="">
                <div class="image-overlay">
                    <p class="description_overlay">Раздвижные панорамные !!!!</p>
                </div>
            </div>

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

.three_photo {
    display: grid;
    width: 80%;
    height: 35vh;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin: 0 auto;
}
// @media screen and (max-width: 920px) {
//     .three_photo {
//         grid-template-columns: 1fr;
//     }
// }
img {
    height: 100%;
    border-radius: 8px;
}



.container-block {
    position: relative;
    width: 75%;
    margin: 0 auto;
    margin-top: 8%;
    border-radius: 16px;
    overflow: hidden;
    background: #082C43;
    box-shadow: -31px 31px 65px #041724,
        31px -31px 65px #0c4162;

    h3,
    p,
    .three_photo,
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
        clip-path: polygon(0 0, 100% 0, 0 90%);
        background-color: rgb(194, 194, 194); // Цвет треугольника
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

.right_text {
    position: relative;
    cursor: pointer;
    transition: 0.2s transform ease-in-out;
    &:hover{
        transform: translateY(-10px);
    }
}

.image-overlay {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}

.description_overlay {
    // padding-left: 5%;
    font-weight: 600;
    font-size: 1.8vh;
    color: white;
    font-family: 'Montserrat', sans-serif;
}

@media screen and (max-width: 900px) {
    .direction_description {
        text-align: center;
        white-space: nowrap;
        margin-top: 4%;
    }
}
</style>