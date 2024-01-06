<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" v-once>
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <div class="block_carousel">
          <div class="left_text_carousel">
            <div class="content">
              <h2 class="appear">Раздвижные двери Алютех</h2>
              <div class="rows"></div>
              <p class="appear_decription">
                Стильные светопрозрачные конструкции, которые позволяют освободить максимально
                широкий проем, соединить помещения между собой или с улицей. Установка портальных
                раздвижных алюминиевых дверей — отличный способ сделать свой дом стильным, наполнить
                интерьеры солнцем
              </p>
              <br />
              <ButtonPurple :title="'Подробнее о разделе'">Узнать больше</ButtonPurple>
            </div>
          </div>
          <div class="right_text">
            <img src="../slider/assets/first.jpg" class="d-block w-100" />
            <div class="image-overlay"></div>
          </div>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="10000">
        <div class="block_carousel active">
          <div class="left_text_carousel">
            <div class="content">
              <h2 class="appear">Окна Алютех</h2>
              <div class="rows"></div>
              <br />
              <p class="appear_decription">
                Классические окна «АЛЮТЕХ» поистине универсальны: их устанавливают в гостиной и на
                кухне, в детской комнате и на террасе. При этом служат такие окна не менее полувека,
                обеспечивая в доме тепло и уют.
              </p>
              <ButtonPurple :title="'Подробнее о разделе'">Узнать больше</ButtonPurple>
            </div>
          </div>
          <div class="right_text">
            <img src="../slider/assets/second.jpg" class="d-block w-100" />
            <div class="image-overlay"></div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import ButtonPurple from '@/ui/ButtonPurple.vue'
import { ref, onMounted } from 'vue'

export default {
  components: { ButtonPurple },
  setup() {
    const show = ref(false)

    onMounted(() => {
      setTimeout(() => {
        show.value = true
      }, 500)
    })

    return { show }
  }
}
</script>

<style scoped>
.block_carousel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  box-sizing: border-box;
  height: 60vh;
}

.appear_decription {
  color: var(--colorGrey);
  margin-top: 2%;
  font-weight: 600;
}

.left_text_carousel {
  /* background: rgb(1, 1, 2); */
  /* background: linear-gradient(177deg, rgba(1, 1, 2, 1) 7%, rgba(8, 44, 67, 1) 89%); */
/* background: linear-gradient(177deg, rgba(1,1,2,1) 7%, rgba(4,24,37,1) 89%); */
background: rgb(1,3,5);
background: linear-gradient(177deg, rgba(1,3,5,1) 7%, rgba(4,21,33,1) 89%);
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
}

.content {
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  width: 50%;
  margin-top: -5%;
}

.content h2 {
  font-family: 'Arial black', sans-serif;
  color: white;
  font-size: max(3vw, 25px);
}

.rows {
  width: max(50px, 25%);
  background: white;
  height: 10px;
  transition: width 1s ease-in;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}

@media screen and (max-width: 900px) {
  .block_carousel {
    grid-template-columns: 1fr;
    padding-top: 6%;
  }

  .left_text_carousel {
    order: 1;
  }

  .right_text {
    order: 2;
  }
}
</style>
