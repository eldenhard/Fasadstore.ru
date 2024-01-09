<template>
  <div class="main_bg">
    <div class="block">
      <section class="left_block">
        <div class="block_1">
          <img
            src="./assets/stanok.jpg"
            alt="алюминевые системы изготовление"
            style="border-radius: 8px"
          />
        </div>
        <div class="block_2">
          <img src="./assets/propizvodstvo.webp" alt="станок" style="border-radius: 8px" />
        </div>
        <div class="block_3">
          <div style="padding-left: 3%; border-left: 1px solid var(--colorRed)">
            <p>
              Алюминиевые системы изготовит и установит алюминиевые конструкции. Выполняем монтаж в
              Москве и области, даем официальную гарантию на изделие и установку. Дверные и оконные,
              панорамные системы для дома, коммерческих и общественных объектов.
            </p>
          </div>
        </div>
      </section>
      <section class="right_block">
        <div class="text_block">
          <h1 class="name_company">Алюминиевые системы</h1>
          <h5>Наша компания готова эффективно реализовать любые виды проектов Алютех</h5>
          <p>
            Внешний облик гражданских и промышленных зданий и сооружений в последнее время
            существенно меняется. Применение для стеновых панелей и оконных заполнений алюминия,
            нержавеющей стали, стекла и других новых материалов придает внешнему виду здания
            индивидуальный характер, особую архитектурную выразительность.
          </p>
          <router-link to="/about">
            <ButtonPurple style="margin-top: 4%"> Подробнее о компании &#10132; </ButtonPurple>
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ButtonPurple from '@/ui/ButtonPurple.vue'
// import { vScrollReveal } from 'vue-scroll-reveal';
// import { createScrollRevealDirective } from 'vue-scroll-reveal';
import { ref } from 'vue'
export default {
  components: { ButtonPurple }
}
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.scroll-to-top.show {
  display: block;
  opacity: 1;
}

.main_bg {
  width: 100%;
  padding-top: 5%;
  background: rgb(4, 21, 33);
  background: linear-gradient(177deg, rgba(4, 21, 33, 1) 7%, rgba(8, 44, 67, 1) 89%);
}

.name_company {
  color: white;
  font-family: 'Arial black', sans-serif;
}

.text_block h5 {
  color: var(--colorBlue);
  font-family: 'Montserrat', sans-serif;
  margin-top: 2%;
}

img {
  -webkit-box-shadow: -10px 12px 11px 0px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: -10px 12px 11px 0px rgba(0, 0, 0, 0.33);
  box-shadow: -10px 12px 11px 0px rgba(0, 0, 0, 0.33);
  height: 100%;
}

.text_block p {
  margin-top: 6%;
  color: var(--colorGrey);
  font-weight: 600;
}

.block {
  width: 75%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 5%;
  padding-top: 4%;
}

.left_block {
  display: grid;
  column-gap: 5%;
  grid-template-areas:
    'second first '
    'second  third';
}

.block_1 {
  grid-area: first;
  border-radius: 8px;
}

.block_2 {
  grid-area: second;
  border-radius: 8px;
}

.block_3 {
  background: #ffffff;
  color: black;
  font-weight: 600;
  font-style: italic;
  font-size: 15px;
  padding: 4% 2% 2% 4%;
  grid-area: third;
  margin: -4% 0 0 -15%;
  -webkit-box-shadow: -10px -7px 11px 0px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: -10px -7px 11px 0px rgba(0, 0, 0, 0.51);
  box-shadow: -10px -7px 11px 0px rgba(0, 0, 0, 0.51);
}

@media screen and (max-width: 1500px) {
  .block_2 {
    display: none;
  }

  .block_3 {
    margin: 0;
  }

  .left_block {
    display: grid;
    grid-template-columns: 1fr;
    /* column-gap: 4%;
    grid-template-areas: "second "
                        "third"; */
  }
}

@media screen and (max-width: 900px) {
  h1 {
    text-align: center;
  }

  .block_1 {
    display: none !important;
  }

  .block_2 {
    display: none !important;
  }

  .block {
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    width: 90%;
  }

  .left_block {
    margin: 8% auto;
  }

  .block_3 {
    margin: 0 auto;
    width: 100% !important;
  }
}
</style>
