<script setup lang="ts">
useSeoData()
const { baseURL } = useRuntimeConfig().app
const b = (path: string) => `${baseURL}${path.startsWith('/') ? path.slice(1) : path}`

const activeImage = ref(b('/images/about/office_p.jpg'))
const galleryImages = ref([
  b('/images/about/office1.jpg'),
  b('/images/about/office3.jpg'),
  b('/images/about/shop.jpg')
])
function changeImage(imageSrc: string) {
  galleryImages.value.push(activeImage.value)
  const index = galleryImages.value.indexOf(imageSrc)
  if (index !== -1) galleryImages.value.splice(index, 1)
  activeImage.value = imageSrc
}

const bgPicAbout = `url('${b('/images/about/ptt_about.jpg')}') center/cover no-repeat`
const bgFloor = `url('${b('/images/about/floor.jpg')}')`
const bgInstraction = `url('${b('/images/about/instraction.jpg')}')`
const bgAmchair = `url('${b('/images/about/amchair.jpg')}')`
const bgDarkOverlay = `url('${b('/images/about/about_why_overlay.png')}') center/cover no-repeat`
</script>
<template>
  <div class="about-page">
    <section class="pic-about" :style="{ background: bgPicAbout }">
      <h3>О компании</h3>
      <div class="pic-about__text">
        <p>
          Имея колоссальный опыт работы, мы изучили рынок, сложности и тенденции. Поэтому всегда
          рады предложить актуальные решения в продуктовой и ценовой политике
        </p>
      </div>
    </section>
    <section class="about-company">
      <NuxtImg
        src="/images/about/XXL.jpg"
        alt="Алюминиевые конструкции"
        class="first-img"
      /><NuxtImg
        src="/images/about/maxresdefault-1.jpg"
        alt="Алюминиевые фасады"
        class="second-img"
      />
      <div class="text-block-grid">
        <h1>Алюминиевые Системы</h1>
        <h3>Наша компания готова эффективно реализовать любые виды проектов</h3>
        <p>
          Внешний облик гражданских и промышленных зданий и сооружений в последнее время существенно
          меняется. Применение для стеновых панелей и оконных заполнений алюминия, нержавеющей
          стали, стекла и других новых материалов придает внешнему виду здания индивидуальный
          характер, особую архитектурную выразительность.<br /><br />Мы, как профессиональные
          участники этого рынка, вносим свой вклад в развитие современной инфраструктуры города,
          создавая качественные, удобные, эстетичные решения в современной архитектуре для
          комфортной жизни людей.<br /><br />По мере развития и роста нашей компании мы стараемся
          внести более существенный и значимый вклад в современной архитектуре, вклад, которым
          сможет гордиться каждый сотрудник нашей компании в будущем.<br /><br />Мы поставляем
          светопрозрачные конструкции на основе алюминиевого профиля (фасады, двери, окна,
          перегородки).<br /><br />Наша компания предлагает качественные, надежные и эстетичные
          решения для комфортной жизни людей.
        </p>
      </div>
    </section>
    <section class="about-office">
      <div class="about-office__left">
        <div class="about-office__main-pic"><img :src="activeImage" alt="Офис компании" /></div>
        <ul class="about-office__mini">
          <li v-for="(img, index) in galleryImages" :key="index" class="about-office__mini-item">
            <img :src="img" alt="Офис" @click="changeImage(img)" />
          </li>
        </ul>
      </div>
      <div class="about-office__right">
        <h3 style="font-size: 1.5rem">Офис ООО «Алюминиевые Системы»</h3>
        <h5>Бизнес Центр «Гефест»,<br />г. Москва, Дмитровское шоссе, 157, стр. 7, м. Лианозово</h5>
        <div class="about-office__desc">
          <p>
            В нашем офисе сможете посмотреть полноразмерные образцы окон и дверей из профиля АЛЮТЕХ
            W72, раздвижных дверей Алютех SL160. Контроль качества на всех этапах проведения работ,
            начиная от консультации, замера, изготовления изделий, монтажа и заканчивая гарантийным
            обслуживанием вашего остекления.
          </p>
          <p>
            <strong>Производство</strong><br />Наше производство расположено: Новая Москва, съезд с
            ЦКА, поселение Щаповское, квартал №266.<br />Благодаря отлаженным производственным
            процессам, алюминиевые конструкции, производимые компанией, стали доступными для любого
            заказчика.
          </p>
          <p>Собственное производство позволяет нам:</p>
          <ol>
            <li>Предлагать лучшие цены на рынке!</li>
            <li>Работать с разными профильными системами и фурнитурой</li>
            <li>Минимальные сроки производства</li>
            <li>Работать с большими объемами и укладываться в короткий срок</li>
            <li>Все работы от проектирования до монтажа на вашем объекте!</li>
            <li>Доставить заказ в любой регион страны</li>
            <li>Изготовить за 7-14 дней алюминиевое остекление нужного размера и формы.</li>
          </ol>
        </div>
      </div>
    </section>
    <section class="three-block-wrapper">
      <div class="three-block">
        <div class="three-block__card" :style="{ backgroundImage: bgFloor }">
          <div class="three-block__overlay">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="rgb(250,250,250)"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"
              />
              <path
                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
              />
            </svg>
            <p>Стоимость работ фиксируется</p>
          </div>
        </div>
        <div class="three-block__card" :style="{ backgroundImage: bgInstraction }">
          <div class="three-block__overlay">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="rgb(250,250,250)"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533a1 1 0 0 0 .394.143 1 1 0 0 0 .394-.143c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39 62 62 0 0 0-2.837-.856C9.552 1.29 8.531 1.067 8 1.067s-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62 62 0 0 1 5.072.56z"
              />
              <path
                d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <p>5 лет гарантии</p>
          </div>
        </div>
        <div class="three-block__card" :style="{ backgroundImage: bgAmchair }">
          <div class="three-block__overlay">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="rgb(250,250,250)"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
              />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
            <p>Установка по ГОСТ<br />точно в срок</p>
          </div>
        </div>
      </div>
    </section>
    <section class="dark-section">
      <div class="dark-section__bg" :style="{ background: bgDarkOverlay }">
        <div class="dark-section__header">
          <h3>ООО "Алюминевые системы"</h3>
          <p>Мы помогаем создавать лицо города</p>
        </div>
        <div class="dark-section__cards">
          <div class="dark-section__card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#823D7B"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"
              />
            </svg>
            <br />

            <p class="dark-section__card-title">Частным клиентам</p>
            <span>
              Компания "Алюминиевые системы" произведёт, доставит и установит для Вас современные
              окна и двери, застеклит лоджию или балкон, создаст любую нестандартную конструкцию от
              зенитных фонарей до зимнего сада.
            </span>
          </div>
          <div class="dark-section__card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#823D7B"
              viewBox="0 0 16 16"
            >
              <path
                d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
              />
              <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <br />
            <p class="dark-section__card-title">Постоянным клиентам</p>
            <span
              >Наша компания заинтересована в установлении партнёрских отношений и развитии сети и
              приглашает к сотрудничеству дилеров, дистрибьюторов. В случае Вашей
              заинтересованности, готовы обсудить с Вами все возможности сотрудничества.</span
            >
          </div>
          <div class="dark-section__card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#823D7B"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533a1 1 0 0 0 .394.143 1 1 0 0 0 .394-.143c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39 62 62 0 0 0-2.837-.856C9.552 1.29 8.531 1.067 8 1.067s-1.552.223-2.662.524z"
              />
              <path
                d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <br />
            <p class="dark-section__card-title">Строительным компаниям</p>
            <span
              >Для компаний, специализирующихся на Фасадном строительстве, компания Алюминиевые
              системы осуществляет комплексное проектирование и комплектацию светопрозрачных
              конструкций на объекты различного назначения: торгово-развлекательные комплексы,
              бизнес-центры, жилые комплексы, коттеджи.</span
            >
          </div>
        </div>
      </div>
    </section>
    <section class="w-block">
      <div class="two-color-block">
        <div class="left-block">
          <h2>Наши специалисты c 2008 года установили более 4900 дверей, окон и фасадов</h2>
          <p>
            Более 1800 заказчиков используют или просто наслаждаются нашими алюминиевыми
            конструкциями.
          </p>
          <button class="btn-purple" role="button"><span>Контактная информация</span></button>
        </div>
        <div class="right-block">
          <h2>Воплотим вашу мечту о качественном загородном доме</h2>
          <p>
            Чтобы вы уже через несколько месяцев смогли наслаждаться природой, спокойствием и лучшей
            жизнью в новом доме с вашей семьей
          </p>
          <button class="btn-purple" role="button">
            <span>Получить коммерческое предложение</span>
          </button>
        </div>
        <div class="woman-block">
          <NuxtImg src="/images/about/girl_right.png" alt="Специалист компании" />
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.about-page {
  background: white;
}
.pic-about {
  filter: brightness(90%);
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.pic-about h3 {
  color: white;
  text-align: center;
  font-size: 5vh;
}
.pic-about__text {
  width: 50%;
  margin: 0 auto;
}
.pic-about__text p {
  color: white;
  margin-top: 2%;
  font-size: 2vh;
  text-align: center;
}
.about-company {
  width: 70%;
  margin: 4% auto;
  display: grid;
  gap: 4%;
  grid-template-areas: 'first_img text_block' 'second_img text_block';
  grid-template-columns: 0.8fr 1fr;
}
.about-company h1 {
  color: black;
  font-size: 2.5rem;
  font-family: 'Arial Black', sans-serif;
}
.about-company h3 {
  color: rgb(55, 55, 75);
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 2%;
}
.about-company p {
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  color: rgb(63, 63, 63);
  margin-top: 4%;
}
.first-img {
  grid-area: first_img;
  border-radius: 8px;
  width: 100%;
  height: auto;
}
.second-img {
  grid-area: second_img;
  border-radius: 8px;
  width: 100%;
  height: auto;
}
.text-block-grid {
  grid-area: text_block;
}
.about-office {
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  width: 70%;
  margin: 0 auto;
  position: relative;
  gap: 5%;
}
.about-office h3 {
  font-family: 'Arial Black', sans-serif;
}
.about-office h5 {
  margin-top: 2%;
}
.about-office__left {
  width: 50%;
}
.about-office__right {
  width: 50%;
}
.about-office__main-pic {
  height: 50vh;
}
.about-office__main-pic img {
  max-width: 100%;
  height: 100%;
  border-radius: 8px;
  vertical-align: top;
  cursor: pointer;
  transition: box-shadow 0.4s ease-in;
}
.about-office__main-pic img:hover {
  box-shadow: -4px 3px 34px -2px rgba(194, 194, 194, 1);
}
.about-office__mini {
  display: flex;
  gap: 2%;
  margin-top: 2%;
  list-style-type: none;
  padding: 0;
}
.about-office__mini-item {
  width: calc(100% / 3);
  padding: 0;
  cursor: pointer;
}
.about-office__mini-item img {
  max-width: 100%;
  height: 100%;
  border-radius: 8px;
  vertical-align: top;
  cursor: pointer;
  transition: box-shadow 0.4s ease-in;
}
.about-office__mini-item img:hover {
  box-shadow: -4px 3px 34px -2px rgba(194, 194, 194, 1);
}
.about-office__desc p {
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  color: rgb(63, 63, 63);
  margin-top: 4%;
}
.about-office__desc li {
  font-family: 'Montserrat', sans-serif;
  color: rgb(63, 63, 63);
  font-size: 18px;
}
.three-block-wrapper {
  width: 70%;
  margin: 4% auto;
}
.three-block {
  display: flex;
  justify-content: space-between;
}
.three-block__card {
  height: 25vh;
  width: 22vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 8px;
}
.three-block__overlay {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  overflow: hidden;
}
.three-block__overlay p {
  color: white;
  font-size: 2vh;
  margin-top: 2%;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
}
.three-block__overlay::before {
  content: '';
  display: block;
  position: absolute;
  background: rgba(255, 255, 255, 0.5);
  width: 30px;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0.5;
  filter: blur(30px);
  transform: translateX(-100px) skewX(-15deg);
}
.three-block__overlay::after {
  content: '';
  display: block;
  position: absolute;
  background: rgba(255, 255, 255, 0.2);
  width: 30px;
  height: 100%;
  left: 30px;
  top: 0;
  opacity: 0;
  filter: blur(5px);
  transform: translateX(-100px) skewX(-15deg);
}
.three-block__overlay:hover {
  cursor: pointer;
}
.three-block__overlay:hover::before {
  transform: translateX(100vw) skewX(-15deg);
  opacity: 0.6;
  transition: 0.7s;
}
.three-block__overlay:hover::after {
  transform: translateX(100vw) skewX(-15deg);
  opacity: 1;
  transition: 0.7s;
}
</style>
<style scoped>
.dark-section {
  width: 100%;
  background: #1a1a1a;
  min-height: 40vh;
  position: relative;
}
.dark-section__bg {
  width: 100%;
  height: 100%;
}
.dark-section__header {
  display: flex;
  justify-content: start;
  padding-top: 4%;
  align-items: center;
  flex-direction: column;
}
.dark-section__header h3 {
  color: #d4d4d4;
}
.dark-section__header p {
  color: white;
  font-size: 3vh;
  font-weight: bold;
  text-align: center;
}
.dark-section__cards {
  position: relative;
  width: 80%;
  top: 5vh;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  left: 50%;
  transform: translate(-50%, 0);
}
.dark-section__card {
  width: 25vw;
  box-sizing: border-box;
  min-height: 30vh;
  height: auto;
  border-radius: 8px;
  background: white;
  box-shadow: -1px 6px 23px -1px rgba(97, 97, 97, 0.75);
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding-top: 2%;
  position: relative;
}
.dark-section__card-title {
  font-size: 2.2vh;
  text-transform: uppercase;
  text-align: center;
}
.dark-section__card span {
  color: grey;
  text-align: center;
  padding: 4%;
}
.w-block {
  position: relative;
  box-sizing: border-box;
  height: 50vh;
}
.two-color-block {
  background: #f3f3f3;
  min-height: 40vh;
  margin-top: 10%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.left-block {
  padding: 8% 8% 1% 8%;
  height: auto;

  h2 {
    font-size: 2rem;
    font-weight: 600;
  }

  p {
    font-weight: 500;
    font-size: 1rem;
    margin-top: 2%;
  }
}
.right-block {
  padding: 8% 25% 0 8%;
  height: auto;
  background: radial-gradient(circle, rgba(156, 69, 147, 1) 0%, rgba(94, 49, 90, 1) 71%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 6% 100%);
}
.right-block {
  h2 {
    color: rgb(241, 241, 241);
    font-size: 2rem;
    font-weight: 600;
  }

  p {
    color: rgb(241, 241, 241);
    font-weight: 500;
    font-size: 1rem;
    margin-top: 2%;
  }
}
.woman-block {
  position: absolute;
  right: 0;
  top: -5vh;
  height: 55vh;
}
.woman-block img {
  height: 100%;
  width: 100%;
}
.btn-purple {
  appearance: none;
  background-color: #7a4e76;
  border-width: 0;
  box-sizing: border-box;
  color: #dfdfdf;
  cursor: pointer;
  display: inline-block;
  font-family: 'Montserrat', Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1em;
  margin: 0;
  opacity: 1;
  outline: 0;
  padding: 1.2em 2.2em;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-rendering: geometricprecision;
  text-transform: uppercase;
  transition:
    opacity 300ms cubic-bezier(0.694, 0, 0.335, 1),
    background-color 100ms cubic-bezier(0.694, 0, 0.335, 1),
    color 100ms cubic-bezier(0.694, 0, 0.335, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
  margin-top: 4%;
}
.btn-purple::before {
  backface-visibility: hidden;
  background-color: #ebebeb;
  clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
  content: '';
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transform: translateZ(0);
  transition: clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  width: 100%;
}
.btn-purple:hover::before {
  clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
}
.btn-purple span {
  z-index: 1;
  position: relative;
}
.btn-purple:hover {
  color: black;
}
@media screen and (max-width: 1650px) {
  .about-company {
    width: 90%;
    grid-template-areas: 'text_block text_block' 'first_img second_img';
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 1450px) {
  .dark-section__cards {
    width: 95%;
  }
  .dark-section__card {
    width: 30vw;
  }
}
@media screen and (max-width: 900px) {
  .pic-about__text {
    width: 90%;
  }
  .pic-about__text p {
    text-align: justify;
  }
  .about-company {
    width: 90%;
    grid-template-areas: 'text_block' 'first_img';
    grid-template-columns: 1fr;
    gap: 2%;
  }
  .about-company p {
    font-size: 14px;
  }
  .second-img {
    display: none;
  }
  .about-office {
    width: 90vw;
    flex-direction: column-reverse;
    margin-top: 8vh;
  }
  .about-office__main-pic {
    height: 30vh;
  }
  .about-office__left,
  .about-office__right {
    width: 100%;
  }

  .three-block-wrapper {
    width: 90%;
    margin-top: 10%;
  }
  .three-block {
    flex-direction: column;
  }
  .three-block__card {
    height: 15vh;
    width: 100%;
    margin-top: 4%;
  }
  .dark-section__cards {
    width: 95%;
    flex-direction: column;
  }
  .dark-section__card {
    width: auto;
    margin-top: 4%;
    height: auto;
  }
  .dark-section__header h3 {
    padding-top: 10%;
  }
  .w-block {
    margin: 20% 0 48% 0;
  }
  .two-color-block {
    grid-template-columns: 1fr;
  }
  .woman-block {
    display: none;
  }
  .right-block {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .right-block button {
    margin-left: 25%;
    margin-bottom: 4%;
  }
  .left-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
