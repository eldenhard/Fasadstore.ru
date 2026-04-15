<script setup lang="ts">
// Направления деятельности
// Перенос из src/components/DirectionJob/DirectionWork.vue

interface DirectionCard {
  title: string
  brand: string
  description: string
  image: string
  to?: string
}

const directions: DirectionCard[] = [
  {
    title: 'Алюминевые окна',
    brand: 'Алютех (ALUTECH)',
    description:
      'Окна премиум-класса теплые, созданные по индивидуальным заказам и сочетающие в себе стиль и надежность.',
    image: '/images/directions/alum_window.png',
    to: '/windows'
  },
  {
    title: 'Алюминевые раздвижные двери',
    brand: 'Алютех (ALUTECH)',
    description:
      'Раздвижные двери для частных домов и коттеджей. Комфортное открывание. Максимальная площадь остекления',
    image: '/images/directions/alum_razd_door.png'
  },
  {
    title: 'Остекление террас и беседок',
    brand: 'Алютех (ALUTECH)',
    description:
      'Портальные теплые конструкции для террас и веранд. Панорамное остекление в сдвижных и складывающихся системах',
    image: '/images/directions/terrace.jpg'
  },
  {
    title: 'Остекление котеджей',
    brand: 'Алютех (ALUTECH)',
    description: 'Предлагаем все виды остекления для коттеджей и загородных домов под ключ',
    image: '/images/directions/villa.png',
    to: '/cottages'
  },
  {
    title: 'Алюминевые двери',
    brand: 'Алютех (ALUTECH)',
    description:
      'Двери АЛЮТЕХ придадут индивидуальность Вашему дому. Обладают повышенной тепло- и звукоизоляцией.',
    image: '/images/directions/alum_doors.jpg',
    to: '/doors'
  },
  {
    title: 'Остекление фасадов, витражи',
    brand: 'Алютех (ALUTECH)',
    description: 'Витражное (панорамное) остекление для сплошного многоэтажного остекления',
    image: '/images/directions/fasad.png'
  }
]
</script>

<template>
  <section class="direction-work">
    <p class="direction-work__title">НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ</p>
    <ul class="direction-work__cards">
      <li v-for="card in directions" :key="card.title">
        <NuxtLink v-if="card.to" :to="card.to" class="card">
          <NuxtImg
            :src="card.image"
            :alt="card.title"
            class="card__image"
            width="400"
            height="300"
            loading="lazy"
          />
          <div class="card__overlay">
            <div class="card__header">
              <h3 class="card__title">{{ card.title }}</h3>
              <span class="card__status">{{ card.brand }}</span>
            </div>
            <p class="card__description">{{ card.description }}</p>
          </div>
        </NuxtLink>
        <a v-else class="card">
          <NuxtImg
            :src="card.image"
            :alt="card.title"
            class="card__image"
            width="400"
            height="300"
            loading="lazy"
          />
          <div class="card__overlay">
            <div class="card__header">
              <h3 class="card__title">{{ card.title }}</h3>
              <span class="card__status">{{ card.brand }}</span>
            </div>
            <p class="card__description">{{ card.description }}</p>
          </div>
        </a>
      </li>
    </ul>
    <div class="direction-work__mobile">
      <DirectionWorkMobile />
    </div>
  </section>
</template>

<style scoped>
.direction-work {
  width: 75%;
  margin: 0 auto;
}
.direction-work__title {
  color: rgb(202, 217, 245);
  margin-top: 4%;
  font-family: 'Montserrat', Helvetica, sans-serif;
  font-size: max(20px, 2vw);
  font-weight: 700;
  line-height: 1em;
}
.direction-work__cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4%;
  padding: 0;
  list-style-type: none;
}
.card {
  position: relative;
  display: block;
  height: 45vh;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
  box-shadow:
    -31px 31px 65px #041724,
    31px -31px 65px #0c4162;
  transition: 0.3s box-shadow ease-in-out;
}
.card:hover {
  box-shadow:
    -31px 31px 65px #041724,
    21px -21px 55px #196797;
}
.card__image {
  width: 100%;
  min-height: 80%;
  height: auto;
  filter: brightness(89%);
}
.card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-radius: 8px;
  background-color: white;
  transform: translateY(100%);
  transition: 0.2s ease-in-out;
}
.card:hover .card__overlay {
  transform: translateY(0);
}
.card__header {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  padding: 1.5em;
  border-radius: 20px 0 0 0;
  background-color: white;
  transform: translateY(-100%);
  transition: 0.2s ease-in-out;
}
.card:hover .card__header {
  transform: translateY(0);
}
.card__title {
  font-size: 1.1em;
  margin: 0;
  color: #1b1b1b;
}
.card__status {
  font-size: 1em;
  font-weight: normal;
  color: #363636;
}
.card__description {
  padding: 0 2em 2em;
  margin: 0;
  color: rgb(29, 29, 29);
  font-weight: 500;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.direction-work__mobile {
  display: none;
}

@media screen and (max-width: 900px) {
  .direction-work__title {
    text-align: center;
    white-space: nowrap;
    margin-top: 4%;
  }
  .direction-work__cards {
    display: none;
  }
  .direction-work__mobile {
    display: block;
  }
  .direction-work {
    width: 90%;
    margin-top: 4%;
  }
}
</style>
