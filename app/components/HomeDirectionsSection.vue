<script setup lang="ts">
import { HOME_DIRECTION_ITEMS } from '~/constants/homeDirections'
</script>

<template>
  <section class="home-directions">
    <p class="home-directions__title">Направления деятельности</p>
    <ul class="home-directions__grid">
      <li v-for="card in HOME_DIRECTION_ITEMS" :key="card.title" class="home-directions__item">
        <NuxtLink v-if="card.to" :to="card.to" class="home-direction-card">
          <NuxtImg
            :src="card.image"
            :alt="card.title"
            class="home-direction-card__image"
            width="400"
            height="300"
            loading="lazy"
          />
          <div class="home-direction-card__panel">
            <div class="home-direction-card__header">
              <h3 class="home-direction-card__title">{{ card.title }}</h3>
              <span class="home-direction-card__brand">{{ card.brand }}</span>
            </div>
            <p class="home-direction-card__description">{{ card.description }}</p>
          </div>
        </NuxtLink>
        <article v-else class="home-direction-card">
          <NuxtImg
            :src="card.image"
            :alt="card.title"
            class="home-direction-card__image"
            width="400"
            height="300"
            loading="lazy"
          />
          <div class="home-direction-card__panel">
            <div class="home-direction-card__header">
              <h3 class="home-direction-card__title">{{ card.title }}</h3>
              <span class="home-direction-card__brand">{{ card.brand }}</span>
            </div>
            <p class="home-direction-card__description">{{ card.description }}</p>
          </div>
        </article>
      </li>
    </ul>
    <div class="home-directions__accordion">
      <HomeDirectionsAccordion />
    </div>
  </section>
</template>

<style scoped>
.home-directions {
  width: 75%;
  margin: 0 auto;
}

.home-directions__title {
  color: rgb(202, 217, 245);
  margin-top: 4%;
  font-family: 'Montserrat', sans-serif;
  font-size: max(20px, 2vw);
  font-weight: 700;
  line-height: 1em;
  text-transform: uppercase;
}

.home-directions__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4%;
  padding: 0;
  list-style-type: none;
}

.home-directions__item {
  min-width: 0;
}

.home-direction-card {
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

.home-direction-card:hover {
  box-shadow:
    -31px 31px 65px #041724,
    21px -21px 55px #196797;
}

.home-direction-card__image {
  width: 100%;
  min-height: 80%;
  height: auto;
  filter: brightness(89%);
}

.home-direction-card__panel {
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

.home-direction-card:hover .home-direction-card__panel {
  transform: translateY(0);
}

.home-direction-card__header {
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

.home-direction-card:hover .home-direction-card__header {
  transform: translateY(0);
}

.home-direction-card__title {
  font-size: 1.1em;
  margin: 0;
  color: #1b1b1b;
}

.home-direction-card__brand {
  font-size: 1em;
  font-weight: normal;
  color: #363636;
}

.home-direction-card__description {
  padding: 0 2em 2em;
  margin: 0;
  color: rgb(29, 29, 29);
  font-weight: 500;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.home-directions__accordion {
  display: none;
}

@media screen and (max-width: 900px) {
  .home-directions__title {
    text-align: center;
    white-space: nowrap;
    margin-top: 4%;
  }
  .home-directions__grid {
    display: none;
  }
  .home-directions__accordion {
    display: block;
  }
  .home-directions {
    width: 90%;
    margin-top: 4%;
  }
}
</style>
