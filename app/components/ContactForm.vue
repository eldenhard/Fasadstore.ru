<script setup lang="ts">
// Форма обратной связи — Nuxt UI v4
// UInput, UTextarea, UButton с базовой валидацией

const form = reactive({
  name: '',
  phone: '',
  email: '',
  message: ''
})

const errors = reactive({
  name: '',
  phone: '',
  email: ''
})

function validate(): boolean {
  let valid = true
  errors.name = ''
  errors.phone = ''
  errors.email = ''

  if (!form.name.trim()) {
    errors.name = 'Введите имя'
    valid = false
  }
  if (!form.phone.trim()) {
    errors.phone = 'Введите телефон'
    valid = false
  }
  if (!form.email.trim()) {
    errors.email = 'Введите email'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Некорректный email'
    valid = false
  }
  return valid
}

function handleSubmit() {
  if (!validate()) return
  // TODO: отправка данных на сервер (server/api/contact.post.ts)
  console.log('Form submitted:', { ...form })
}
</script>

<template>
  <form class="space-y-4 py-6" @submit.prevent="handleSubmit">
    <p class="text-xl"><strong>Оставьте заявку</strong> и Вам перезвонит менеджер</p>

    <div>
      <label class="block text-sm text-gray-600 mb-1"> Имя<sup class="text-red-500">*</sup> </label>
      <UInput v-model="form.name" placeholder="Введите имя" class="w-full" />
      <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
    </div>

    <div>
      <label class="block text-sm text-gray-600 mb-1">
        Телефон<sup class="text-red-500">*</sup>
      </label>
      <UInput v-model="form.phone" type="tel" placeholder="+7 (___) ___-__-__" class="w-full" />
      <p v-if="errors.phone" class="text-red-500 text-xs mt-1">{{ errors.phone }}</p>
    </div>

    <div>
      <label class="block text-sm text-gray-600 mb-1">
        Почта<sup class="text-red-500">*</sup>
      </label>
      <UInput v-model="form.email" type="email" placeholder="Введите адрес почты" class="w-full" />
      <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
    </div>

    <div>
      <label class="block text-sm text-gray-600 mb-1">Сообщение</label>
      <UTextarea v-model="form.message" placeholder="Ваше сообщение" class="w-full" :rows="4" />
    </div>

    <UButton type="submit" block color="primary" class="mt-4"> Отправить запрос </UButton>
  </form>
</template>
