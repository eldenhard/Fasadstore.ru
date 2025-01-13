<template>
  <section class="about">
    <div class="about_left">
      <div class="main_pic">
        <img :src="activeImage" alt="" />
      </div>
      <ul class="mini_elements">
        <li v-for="(item, index) in images" :key="index" class="element">
          <img :src="item" alt="" @click="changeImage(item)" />
        </li>
      </ul>
    </div>
    <div class="about_right">
      <h3>Офис ООО «Алюминиевые Системы»</h3>
      <h5>
        Бизнес Центр «Гефест», <br />
        г. Москва, Дмитровское шоссе, 157, стр. 7, м. Лианозово
      </h5>
      <div class="description">
        <p>
          В нашем офисе сможете посмотреть полноразмерные образцы окон и дверей из профиля АЛЮТЕХ
          W72 , раздвижных дверей Алютех SL160. Контроль качества на всех этапах проведение работ,
          начиная от консультации, замера, изготовления изделий, монтажа и заканчивая гарантийным
          обслуживанием вашего остекления. Будьте уверенны, обратившись в нашу компанию, мы будем
          прилагать максимальные усилия для реализации Вашего проекта.
        </p>
        <p>
          <b>Производство</b> <br />
          Наше производство расположено: Новая Москва, съезд с ЦКА, поселение Щаповское ,квартал
          №266. <br />
          Благодаря отлаженным производственным процессам, алюминиевые конструкции, производимые
          компанией, стали доступными для любого заказчика. Возможности производства стремительно
          растут, поэтому мы можем предложить грамотные решения на все случаи жизни: от стандартных
          окон до сложных конструкций, применяемых в домах с пассивным отоплением. Удовлетворять
          любые требования наших заказчиков, архитекторов, застройщиков, обеспечивая при этом
          безукоризненное качество. Применяя высокоточное оборудование, обеспечить геометрическую
          форму изделия любой сложности и довести его до совершенства Благодаря 16-летнему опыту и
          использованию немецкого оборудования мы добились высочайшего качества Собственное
          производство позволяет нам:
        </p>
        <ol>
          <li>Предлагать лучшие цены на рынке!</li>
          <li>Работать с разными профильными системами и фурнитурой</li>
          <li>Минимальные сроки производства</li>
          <li>Работать с большими объемами и укладываться в короткий срок</li>
          <li>Все работы от проектирования до монтажа на вашем объекте!</li>
          <li>Доставить заказ в любой регион страны</li>
          <li>
            Изготовить за 7-14 дней алюминиевое остекление нужного размера и формы. Окрасить в
            выбранный вами цвет. Укомплектовать всем необходимым, согласно ТЗ или ваших пожеланий.
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const activeImage = ref(new URL('./assets/office_p.jpg', import.meta.url).href)
    const images = ref([
      new URL('./assets//office1.jpg', import.meta.url).href,
      new URL('./assets/office3.jpg', import.meta.url).href,
      new URL('./assets/shop.jpg', import.meta.url).href
    ])

    const changeImage = (imageSrc) => {
      images.value.push(activeImage.value)
      let index = images.value.indexOf(imageSrc)
      if (index !== -1) {
        images.value.splice(index, 1)
      }
      activeImage.value = imageSrc
    }

    return { activeImage, images, changeImage }
  }
}
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  width: 70%;
  margin: 0 auto;
  position: relative;
  gap: 5%;
  h3 {
    font-family: 'Arial Black', sans-serif;
  }
  h5 {
    margin-top: 2%;
  }
  .about_left {
    width: 50%;
  }

  .about_right {
    width: 50%;
  }
}

.main_pic {
  height: 50vh;
}

.mini_elements {
  display: flex;
  gap: 2%;
  margin-top: 2%;
  list-style-type: none;
  padding: 0 !important;

  .element {
    width: calc(100% / 3);
    padding: 0;
  }
}

li {
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  color: rgb(63, 63, 63);
  font-size: 18px;
}

p {
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  color: rgb(63, 63, 63);
  margin-top: 4%;
}

img {
  max-width: 100%;
  vertical-align: top;
  height: 100%;
  cursor: pointer;
  border-radius: 8px;
  transition: box-shadow 0.4s ease-in;

  &:hover {
    -webkit-box-shadow: -4px 3px 34px -2px rgba(194, 194, 194, 1);
    -moz-box-shadow: -4px 3px 34px -2px rgba(194, 194, 194, 1);
    box-shadow: -4px 3px 34px -2px rgba(194, 194, 194, 1);
  }
}
@media screen and (max-width: 900px) {
  .about {
    width: 90vw;
    flex-direction: column-reverse;
    margin-top: 8vh;

    .main_pic {
      height: 30vh;
    }
    .about_left,
    .about_right {
      width: 100%;
    }
  }
}
</style>
