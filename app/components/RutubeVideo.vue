<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{ src: string; title: string }>()
const playing = ref(false)
const poster = computed(() => {
  const id = props.src.match(/\/embed\/([a-f0-9]{32})/)?.[1]
  return `/images/video-posters/${id}.webp`
})
</script>

<template>
  <div class="rutube-video">
    <iframe
      v-if="playing"
      :src="`${src}?autoplay=1`"
      :title="title"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      allowfullscreen
    />
    <button
      v-else
      type="button"
      :aria-label="`Воспроизвести видео: ${title}`"
      @click="playing = true"
    >
      <img :src="poster" alt="" width="720" height="405" loading="lazy" />
      <span aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 3v18l15-9z" />
        </svg>
      </span>
    </button>
  </div>
</template>

<style scoped>
.rutube-video {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  overflow: hidden;
  background: #082c43;
}

.rutube-video iframe,
.rutube-video button,
.rutube-video img {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}

.rutube-video button {
  position: relative;
  padding: 0;
  cursor: pointer;
  background: transparent;
}

.rutube-video button:focus-visible {
  outline: 3px solid #fff;
  outline-offset: -4px;
}

.rutube-video img {
  object-fit: cover;
}

.rutube-video span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: #2da4df;
  color: #fff;
}
</style>
