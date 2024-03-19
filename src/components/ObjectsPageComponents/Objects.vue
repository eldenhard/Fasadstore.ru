<template>
    <div class="objects">
        <!--    <p class="gradient-text ">2018-2024</p>
                <p class="gradient-text  right">2013-2018</p> -->
        <div class="objects_container">
            <div class="objects_title">
                <p class="gradient-text">2008-2013</p>
            </div>
            <div class="objects_body">
                <div class="objects_body_item">
                    <swiper class="swiper" :modules="modules" navigation  :pagination="{ clickable: true, dynamicBullets: true }" :loop="true">
                        <swiper-slide class="slide"><img src="./assets/2008_2013/perevedenovskiy/6.webp" alt=""></swiper-slide>
                        <swiper-slide class="slide"><img src="./assets/2008_2013/perevedenovskiy/7.webp" alt=""></swiper-slide>
                    </swiper>
                </div>
                <div class="objects_body_item">
                    <swiper class="swiper" :modules="modules" navigation  :pagination="{ clickable: true, dynamicBullets: true }" :loop="true">
                        <swiper-slide class="slide"><img src="./assets/2008_2013/vatutinki/20140418_135437_11zon.webp" alt=""></swiper-slide>
                        <swiper-slide class="slide"><img src="./assets/2008_2013/vatutinki/S6000062_11zon.webp" alt=""></swiper-slide>
                        <swiper-slide class="slide"><img src="./assets/2008_2013/vatutinki/S6000064_11zon.webp" alt=""></swiper-slide>
                    </swiper>
                </div>
           
                <div class="objects_body_item">
                    <swiper class="swiper" :modules="modules" navigation  :pagination="{ clickable: true, dynamicBullets: true }" :loop="true">
                        <swiper-slide class="slide"><img src="./assets/2008_2013/dovil_old/20130301_123529.webp" alt=""></swiper-slide>
                        <swiper-slide class="slide"><img src="./assets/2008_2013/dovil_old/20130517_174130_11zon.webp" alt=""></swiper-slide>
                        <swiper-slide class="slide"><img src="./assets/2008_2013/dovil_old/20130517_180124-Photoroom_11zon.webp" alt=""></swiper-slide>
                    </swiper>
                </div>
                <div class="objects_body_item">
                    <swiper class="swiper" :modules="modules" navigation  :pagination="{ clickable: true, dynamicBullets: true }" :loop="true">
                        <swiper-slide class="slide"><img src="./assets/2008_2013/krasnye_vorota/DSC01198.webp" alt=""></swiper-slide>
                        <swiper-slide class="slide"><img src="./assets/2008_2013/krasnye_vorota/DSC01202.webp" alt=""></swiper-slide>
                    </swiper>
                </div>
                <div class="objects_body_item">
                    <swiper class="swiper" :modules="modules" navigation  :pagination="{ clickable: true, dynamicBullets: true }" :loop="true">
                        <swiper-slide class="slide"><img src="./assets/2008_2013/frazino/10_11zon.webp" alt=""></swiper-slide>
                        <swiper-slide class="slide"><img src="./assets/2008_2013/frazino/11_11zon.webp" alt=""></swiper-slide>
                    </swiper>
                </div>
                <div class="objects_body_item">
                    <swiper class="swiper" :modules="modules" navigation  :pagination="{ clickable: true, dynamicBullets: true }" :loop="true">
                        <swiper-slide class="slide"><img src="./assets/2008_2013/ugolnaya/20231010_115608_11zon.webp" alt=""></swiper-slide>
                        <swiper-slide class="slide"><img src="./assets/2008_2013/ugolnaya/20231010_115545_11zon.webp" alt=""></swiper-slide>
                        <swiper-slide class="slide"><img src="./assets/2008_2013/ugolnaya/IMG_0514_11zon.webp" alt=""></swiper-slide>
                    </swiper>
                </div>

                <div class="objects_body_item">
                    <swiper class="swiper" :modules="modules" navigation  :pagination="{ clickable: true, dynamicBullets: true }" :loop="true">
                        <swiper-slide class="slide"><img src="./assets/2008_2013/wolksvagen/VW-Varshavka1_b_11zon.webp" alt=""></swiper-slide>
                        <swiper-slide class="slide"><img src="./assets/2008_2013/wolksvagen/varshavskoe.webp" alt=""></swiper-slide>
                        <swiper-slide class="slide"><img src="./assets/2008_2013/wolksvagen/S6000462_11zon.webp" alt=""></swiper-slide>
                    </swiper>
                </div>
                <div class="objects_body_item">
                    <swiper class="swiper" :modules="modules" navigation  :pagination="{ clickable: true, dynamicBullets: true }" :loop="true">
                        <swiper-slide class="slide"><img src="./assets/2008_2013/volvo/yar_1b_11zon.webp" alt=""></swiper-slide>
                        <swiper-slide class="slide"><img src="./assets/2008_2013/volvo/123.webp" alt=""></swiper-slide>
                    </swiper>
                </div>
                <div class="objects_body_item">
                    <swiper class="swiper" :modules="modules" navigation  :pagination="{ clickable: true, dynamicBullets: true }" :loop="true">
                        <swiper-slide class="slide"><img src="./assets/2008_2013/novoostan/1_11zon.webp" alt=""></swiper-slide>
                        <swiper-slide class="slide"><img src="./assets/2008_2013/novoostan/S6002984_11zon.webp" alt=""></swiper-slide>
                        <swiper-slide class="slide"><img src="./assets/2008_2013/novoostan/S6002998_11zon.webp" alt=""></swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>


    </div>
</template>


<script>
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [Navigation, Pagination]
        }
    }
}
</script>
<style lang="scss" scoped>
@import './style/object-style.scss';

</style>