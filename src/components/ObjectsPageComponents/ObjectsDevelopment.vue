<template>
  <div class="objects">
    <div class="objects_container">
      <div class="objects_title">
        <p
          class="our_works"
          style="color: rgb(228, 228, 228); font-family: 'Arial black', sans-serif; font-size: 8vh"
        >
          Наши проекты
        </p>
        <p @click="show_el_1 = !show_el_1" class="gradient-text">
          2018-2024
          <i
            :class="{ 'bi bi-caret-up-fill': show_el_1, 'bi bi-caret-down-fill': !show_el_1 }"
            style="font-size: 3vh !important"
          ></i>
        </p>
        <!-- 2018-2024 -->
        <div class="objects_body" v-show="show_el_1">
          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/admiral/20170324_112311_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/admiral/20170324_113407_11zon.webp" alt=""
              /></swiper-slide>
            </swiper>
          </div>
          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/besedka/20210827_142240_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/besedka/20220307_140403_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/besedka/20220307_140613_11zon.webp" alt=""
              /></swiper-slide>
            </swiper>
          </div>

          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/bolshaya_voda/20210906_150702_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/bolshaya_voda/20210906_151048_11zon.webp" alt=""
              /></swiper-slide>
            </swiper>
          </div>

          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/dmitrovka/20231214_162451_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/dmitrovka/20231227_154040_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/dmitrovka/20231227_155000_11zon.webp" alt=""
              /></swiper-slide>
            </swiper>
          </div>
          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/family_park/20220917_104147_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/family_park/20220917_104310_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/family_park/20220917_104400_11zon.webp" alt=""
              /></swiper-slide>
            </swiper>
          </div>
          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/kabzon/20211026_140742_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/kabzon/20211026_140800_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/kabzon/20211026_140806_11zon.webp" alt=""
              /></swiper-slide>
            </swiper>
          </div>
          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/lesniye_dali/20171205_155035 (3)_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/lesniye_dali/20171205_165323_11zon.webp" alt=""
              /></swiper-slide>
            </swiper>
          </div>
          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/novogorsk_7/101rfMoYKMw_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/novogorsk_7/20190902_131830_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/novogorsk_7/62DnaEXHOtk_11zon.webp" alt=""
              /></swiper-slide>
            </swiper>
          </div>
          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/poluostrov/20200624_172559_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/poluostrov/20210906_163600_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/poluostrov/IMG_3847_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/poluostrov/IMG_3853(1)_11zon.webp" alt=""
              /></swiper-slide>
            </swiper>
          </div>
          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/sergiev_posad/20190824_122546(0)_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/sergiev_posad/20191006_122454_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/sergiev_posad/20191006_123605_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/sergiev_posad/20191006_123651_11zon.webp" alt=""
              /></swiper-slide>
            </swiper>
          </div>
          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/varvarino/20220406_095959_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/varvarino/20220406_100120_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/varvarino/20230311_131734_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/varvarino/20230311_131809_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/varvarino/20230405_151740_11zon.webp" alt=""
              /></swiper-slide>
            </swiper>
          </div>
          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/zukovka/20211204_103149_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/zukovka/20211204_103347_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/zukovka/20211204_103351_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2018-2024/zukovka/20211204_103516_11zon.webp" alt=""
              /></swiper-slide>
            </swiper>
          </div>
        </div>
        <br />
        <p @click="show_el_2 = !show_el_2" class="gradient-text">
          2013-2018
          <i
            :class="{ 'bi bi-caret-up-fill': show_el_2, 'bi bi-caret-down-fill': !show_el_2 }"
            style="font-size: 3vh !important"
          ></i>
        </p>
        <!-- 2013-2018 -->
        <div class="objects_body" v-show="show_el_2">
          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/kievka_47/IMG_1287_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/kievka_47/IMG_1289_11zon.webp" alt=""
              /></swiper-slide>
            </swiper>
          </div>
          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/winter_garden/20150522_130354_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/winter_garden/20150624_140005_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/winter_garden/20151010_134439_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/winter_garden/20151010_135056_11zon.webp" alt=""
              /></swiper-slide>
            </swiper>
          </div>
          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/gormoshka_iarat/20160206_154008_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/gormoshka_iarat/20160206_163931_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/gormoshka_iarat/20160215_120816_11zon.webp" alt=""
              /></swiper-slide>
            </swiper>
          </div>
          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/montevil/20160219_140813_11zon (1).webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/montevil/20160219_141042_11zon (1).webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/montevil/20160219_141214_11zon (1).webp" alt=""
              /></swiper-slide>
            </swiper>
          </div>
          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/lumoni/20140418_134827_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/lumoni/20141008_150857_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/lumoni/20150218_135415_11zon.webp" alt=""
              /></swiper-slide>
            </swiper>
          </div>
          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/truvill/20141123_115049_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/truvill/IMG_1386_11zon.webp" alt=""
              /></swiper-slide>
            </swiper>
          </div>
          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/raisa/20130910_122012_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/raisa/20140512_173532_11zon.webp" alt=""
              /></swiper-slide>
            </swiper>
          </div>
          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/kashin/2_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/kashin/11zon_IMG_1160.webp" alt=""
              /></swiper-slide>
            </swiper>
          </div>
          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/zenitki/20140709_152121_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/zenitki/IMG_0329_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/zenitki/IMG_1298_11zon.webp" alt=""
              /></swiper-slide>
            </swiper>
          </div>
          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/new_selo/20140215_151434_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/new_selo/20140215_154533_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/new_selo/20140215_130859_11zon.webp" alt=""
              /></swiper-slide>
            </swiper>
          </div>
          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/solutions/3_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/solutions/4_11zon.webp" alt=""
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img src="./assets/2013_2018/solutions/var22_11zon.webp" alt=""
              /></swiper-slide>
            </swiper>
          </div>
          <div class="objects_body_item">
            <swiper
              class="swiper"
              :modules="modules"
              navigation
              :pagination="{ clickable: true, dynamicBullets: true }"
              :loop="true"
              :grab-cursor="true"
            >
              <swiper-slide class="slide"
                ><img
                  src="./assets/2013_2018/mini_cooper/IMG_0656_11zon.webp"
                  alt="Остекление мини купер"
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img
                  src="./assets/2013_2018/mini_cooper/IMG_1320_11zon.webp"
                  alt="Остекление мини купер"
              /></swiper-slide>
              <swiper-slide class="slide"
                ><img
                  src="./assets/2013_2018/mini_cooper/IMG_1330_11zon.webp"
                  alt="Остекление мини купер"
              /></swiper-slide>
            </swiper>
          </div>
        </div>
        <br />
        <p @click="show_el_3 = !show_el_3" class="gradient-text">
          2008-2013
          <i
            :class="{ 'bi bi-caret-up-fill': show_el_3, 'bi bi-caret-down-fill': !show_el_3 }"
            style="font-size: 3vh !important"
          ></i>
        </p>
      </div>
      <!-- 2008-2013 -->
      <div class="objects_body" v-show="show_el_3">
        <div class="objects_body_item right">
          <swiper
            class="swiper"
            :modules="modules"
            navigation
            :pagination="{ clickable: true, dynamicBullets: true }"
            :loop="true"
            :grab-cursor="true"
          >
            <swiper-slide class="slide"
              ><img src="./assets/2008_2013/perevedenovskiy/6.webp" alt=""
            /></swiper-slide>
            <swiper-slide class="slide"
              ><img src="./assets/2008_2013/perevedenovskiy/7.webp" alt=""
            /></swiper-slide>
          </swiper>
        </div>
        <div class="objects_body_item">
          <swiper
            class="swiper"
            :modules="modules"
            navigation
            :pagination="{ clickable: true, dynamicBullets: true }"
            :loop="true"
            :grab-cursor="true"
          >
            <swiper-slide class="slide"
              ><img src="./assets/2008_2013/vatutinki/20140418_135437_11zon.webp" alt=""
            /></swiper-slide>
            <swiper-slide class="slide"
              ><img src="./assets/2008_2013/vatutinki/S6000062_11zon.webp" alt=""
            /></swiper-slide>
            <swiper-slide class="slide"
              ><img src="./assets/2008_2013/vatutinki/S6000064_11zon.webp" alt=""
            /></swiper-slide>
          </swiper>
        </div>

        <div class="objects_body_item">
          <swiper
            class="swiper"
            :modules="modules"
            navigation
            :pagination="{ clickable: true, dynamicBullets: true }"
            :loop="true"
            :grab-cursor="true"
          >
            <swiper-slide class="slide"
              ><img src="./assets/2008_2013/dovil_old/20130301_123529.webp" alt=""
            /></swiper-slide>
            <swiper-slide class="slide"
              ><img src="./assets/2008_2013/dovil_old/20130517_174130_11zon.webp" alt=""
            /></swiper-slide>
            <swiper-slide class="slide"
              ><img src="./assets/2008_2013/dovil_old/20130517_180124-Photoroom_11zon.webp" alt=""
            /></swiper-slide>
          </swiper>
        </div>
        <!-- <div class="objects_body_item">
                    <swiper class="swiper" :modules="modules" navigation  :pagination="{ clickable: true, dynamicBullets: true }" :loop="true" :grab-cursor="true">
                        <swiper-slide class="slide"><img src="./assets/2008_2013/krasnye_vorota/DSC01198.webp" alt=""></swiper-slide>
                        <swiper-slide class="slide"><img src="./assets/2008_2013/krasnye_vorota/DSC01202.webp" alt=""></swiper-slide>
                    </swiper>
                </div> -->
        <div class="objects_body_item">
          <swiper
            class="swiper"
            :modules="modules"
            navigation
            :pagination="{ clickable: true, dynamicBullets: true }"
            :loop="true"
            :grab-cursor="true"
          >
            <swiper-slide class="slide"
              ><img src="./assets/2008_2013/frazino/10_11zon.webp" alt=""
            /></swiper-slide>
            <swiper-slide class="slide"
              ><img src="./assets/2008_2013/frazino/11_11zon.webp" alt=""
            /></swiper-slide>
          </swiper>
        </div>
        <div class="objects_body_item">
          <swiper
            class="swiper"
            :modules="modules"
            navigation
            :pagination="{ clickable: true, dynamicBullets: true }"
            :loop="true"
            :grab-cursor="true"
          >
            <swiper-slide class="slide"
              ><img src="./assets/2008_2013/ugolnaya/20231010_115608_11zon.webp" alt=""
            /></swiper-slide>
            <swiper-slide class="slide"
              ><img src="./assets/2008_2013/ugolnaya/20231010_115545_11zon.webp" alt=""
            /></swiper-slide>
            <swiper-slide class="slide"
              ><img src="./assets/2008_2013/ugolnaya/IMG_0514_11zon.webp" alt=""
            /></swiper-slide>
          </swiper>
        </div>

        <div class="objects_body_item">
          <swiper
            class="swiper"
            :modules="modules"
            navigation
            :pagination="{ clickable: true, dynamicBullets: true }"
            :loop="true"
            :grab-cursor="true"
          >
            <swiper-slide class="slide"
              ><img src="./assets/2008_2013/wolksvagen/VW-Varshavka1_b_11zon.webp" alt=""
            /></swiper-slide>
            <swiper-slide class="slide"
              ><img src="./assets/2008_2013/wolksvagen/varshavskoe.webp" alt=""
            /></swiper-slide>
            <swiper-slide class="slide"
              ><img src="./assets/2008_2013/wolksvagen/S6000462_11zon.webp" alt=""
            /></swiper-slide>
          </swiper>
        </div>
        <div class="objects_body_item">
          <swiper
            class="swiper"
            :modules="modules"
            navigation
            :pagination="{ clickable: true, dynamicBullets: true }"
            :loop="true"
            :grab-cursor="true"
          >
            <swiper-slide class="slide"
              ><img src="./assets/2008_2013/volvo/yar_1b_11zon.webp" alt=""
            /></swiper-slide>
            <swiper-slide class="slide"
              ><img src="./assets/2008_2013/volvo/123.webp" alt=""
            /></swiper-slide>
          </swiper>
        </div>
        <div class="objects_body_item">
          <swiper
            class="swiper"
            :modules="modules"
            navigation
            :pagination="{ clickable: true, dynamicBullets: true }"
            :loop="true"
            :grab-cursor="true"
          >
            <swiper-slide class="slide"
              ><img src="./assets/2008_2013/novoostan/1_11zon.webp" alt=""
            /></swiper-slide>
            <swiper-slide class="slide"
              ><img src="./assets/2008_2013/novoostan/S6002984_11zon.webp" alt=""
            /></swiper-slide>
            <swiper-slide class="slide"
              ><img src="./assets/2008_2013/novoostan/S6002998_11zon.webp" alt=""
            /></swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { register } from 'swiper/vue/bundle';

// register();
import { ref } from 'vue'

const show_el_1 = ref(true)
const show_el_2 = ref(false)
const show_el_3 = ref(false)
</script>
<style lang="scss" scoped>
@import './style/object-style.scss';
</style>
