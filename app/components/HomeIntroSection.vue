<script setup lang="ts">
// Краткое описание компании для главной страницы
</script>

<template>
  <section class="mini-about">
    <div class="mini-about__grid">
      <!-- Левая часть: изображения (десктоп) -->
      <div class="mini-about__images">
        <div class="mini-about__img mini-about__img--second">
          <NuxtImg
            src="/images/mini-about/production.webp"
            alt="Производство"
            class="w-full h-full object-cover rounded-lg"
            width="400"
            height="500"
          />
        </div>
        <div class="mini-about__img mini-about__img--first">
          <NuxtImg
            src="/images/mini-about/stanok.webp"
            alt="Алюминиевые системы — изготовление"
            class="w-full h-full object-cover rounded-lg"
            width="400"
            height="250"
          />
        </div>
        <div class="mini-about__quote">
          <div class="border-l-2 border-red-600 pl-3">
            <p>
              ООО "Алюминиевые системы" изготовят и установят алюминиевые конструкции. Выполняем
              монтаж в Москве и регионах, даем официальную гарантию на изделия и установку. Дверные
              и оконные, панорамные системы для дома, коммерческих и общественных объектов.
            </p>
          </div>
        </div>
      </div>

      <!-- Правая часть: текст -->
      <div class="mini-about__text">
        <h1 class="mini-about__title">Алюминиевые системы</h1>
        <h2 class="mini-about__subtitle">
          Наша компания готова эффективно реализовать любые виды проектов Алютех, на рынке с 2008
          года. Являемся официальным дилером компании Алютех
        </h2>
        <p class="mini-about__desc">
          Внешний облик гражданских и промышленных зданий и сооружений в последнее время существенно
          меняется. Применение для стеновых панелей и оконных заполнений алюминия, нержавеющей
          стали, стекла и других новых материалов придает внешнему виду здания индивидуальный
          характер, особую архитектурную выразительность.
        </p>
        <NuxtLink to="/about">
          <button class="mini-about__btn"><span>Подробнее о компании ➔</span></button>
        </NuxtLink>

        <!-- Мобильная карточка -->
        <div class="mini-about__mobile-quote">
          <div class="border-l-2 border-red-600 pl-3">
            <p>
              ООО "Алюминиевые системы" изготовят и установят алюминиевые конструкции. Выполняем
              монтаж в Москве и регионах, даем официальную гарантию на изделия и установку.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mini-about {
  width: 100%;
  padding-top: 2%;
  background: rgb(4, 21, 33);
  background: linear-gradient(177deg, rgba(4, 21, 33, 1) 7%, rgba(8, 44, 67, 1) 89%);
}
.mini-about__grid {
  width: 75%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 5%;
  padding-top: 4%;
}
.mini-about__images {
  display: grid;
  column-gap: 5%;
  grid-template-areas:
    'second first'
    'second third';
}
.mini-about__img--first {
  grid-area: first;
}
.mini-about__img--second {
  grid-area: second;
}
.mini-about__img :deep(img) {
  box-shadow: -10px 12px 11px 0px rgba(0, 0, 0, 0.33);
}
.mini-about__quote {
  background: #ffffff;
  color: black;
  font-weight: 600;
  font-style: italic;
  font-size: 15px;
  padding: 4% 2% 2% 4%;
  grid-area: third;
  margin: -4% 0 0 -15%;
  box-shadow: -10px -7px 11px 0px rgba(0, 0, 0, 0.51);
}
.mini-about__title {
  color: white;
  font-family: 'Arial Black', sans-serif;
  font-size: 2rem;
}
.mini-about__subtitle {
  color: rgb(202, 217, 245);
  font-family: 'Montserrat', sans-serif;
  margin-top: 2%;
  font-size: 2.5vh;
}
.mini-about__desc {
  margin-top: 6%;
  color: #d4d4d4;
  font-weight: 600;
}
.mini-about__btn {
  appearance: none;
  background-color: #7a4e76;
  border: none;
  color: #dfdfdf;
  cursor: pointer;
  display: inline-block;
  font-family: 'Montserrat', Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1em;
  padding: 1.2em 2.2em;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  margin-top: 4%;
  transition:
    opacity 300ms cubic-bezier(0.694, 0, 0.335, 1),
    background-color 100ms cubic-bezier(0.694, 0, 0.335, 1),
    color 100ms cubic-bezier(0.694, 0, 0.335, 1);
}
.mini-about__btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ebebeb;
  clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
  transition: clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.mini-about__btn:hover::before {
  clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
}
.mini-about__btn:hover {
  color: black;
}
.mini-about__btn span {
  position: relative;
  z-index: 1;
}
.mini-about__mobile-quote {
  display: none;
}

@media screen and (max-width: 1500px) {
  .mini-about__img--second {
    display: none;
  }
  .mini-about__quote {
    margin: 0;
  }
  .mini-about__images {
    display: grid;
    grid-template-columns: 1fr;
  }
}
@media screen and (max-width: 900px) {
  .mini-about__title {
    text-align: center;
  }
  .mini-about__img--first {
    display: none;
  }
  .mini-about__img--second {
    display: none;
  }
  .mini-about__grid {
    display: flex;
    flex-direction: column-reverse;
    width: 90%;
  }
  .mini-about__images {
    margin: 8% auto;
  }
  .mini-about__quote {
    margin: 0 auto;
    width: 100%;
  }
  .mini-about__mobile-quote {
    display: block;
    margin-top: 8%;
    background: white;
    padding: 4%;
    border-radius: 4px;
    box-shadow: -10px -7px 11px 0px rgba(0, 0, 0, 0.51);
    color: black;
    font-weight: 600;
    font-style: italic;
    font-size: 15px;
    text-align: left;
  }
}
</style>
