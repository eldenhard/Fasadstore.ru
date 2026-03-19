<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()

useSeoMeta({
  title: 'Ошибка — АлюПроект',
  robots: 'noindex, nofollow'
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div class="text-center max-w-md">
      <p class="text-6xl font-bold text-gray-300 mb-4">{{ error.statusCode }}</p>
      <h1 class="text-2xl font-bold text-gray-900 mb-2">
        {{ error.statusCode === 404 ? 'Страница не найдена' : 'Произошла ошибка' }}
      </h1>
      <p class="text-gray-600 mb-8">
        {{
          error.statusCode === 404
            ? 'Запрашиваемая страница не существует или была перемещена.'
            : error.statusMessage || 'Попробуйте обновить страницу или вернуться на главную.'
        }}
      </p>
      <button
        class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        @click="handleError"
      >
        На главную
      </button>
    </div>
  </div>
</template>
