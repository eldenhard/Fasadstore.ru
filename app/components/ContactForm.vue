<script setup lang="ts">
// Форма обратной связи — оригинальный дизайн
const form = reactive({ name: '', email: '' })
const errors = reactive({ name: '', email: '' })

function validate(): boolean {
  let valid = true
  errors.name = ''
  errors.email = ''
  if (!form.name.trim()) {
    errors.name = 'Введите имя'
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
  console.log('Form submitted:', { ...form })
}
</script>

<template>
  <form class="contact-form" @submit.prevent="handleSubmit">
    <p class="contact-form__heading"><b>Оставьте заявку</b> и Вам перезвонит менеджер</p>
    <label class="contact-form__label">
      Имя<sup>*</sup><br />
      <input
        v-model="form.name"
        type="text"
        placeholder="Введите имя"
        class="contact-form__input"
      />
    </label>
    <p v-if="errors.name" class="contact-form__error">{{ errors.name }}</p>
    <label class="contact-form__label">
      Почта<sup>*</sup><br />
      <input
        v-model="form.email"
        type="email"
        placeholder="Введите адрес почты"
        class="contact-form__input"
      />
    </label>
    <p v-if="errors.email" class="contact-form__error">{{ errors.email }}</p>
    <button type="submit" class="contact-form__btn"><span>Отправить запрос</span></button>
  </form>
</template>

<style scoped>
.contact-form {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 5% 0;
}
.contact-form__heading {
  font-size: 3vh;
  color: #082c43;
}
.contact-form__label {
  color: grey;
  margin-top: 6%;
  width: 100%;
}
.contact-form__input {
  border-radius: 4px;
  border: 1px solid grey;
  padding: 2%;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
}
.contact-form__input:focus {
  outline: none;
  border: 2px solid #b46dad;
}
.contact-form__error {
  color: #e53e3e;
  font-size: 0.8em;
  margin-top: 4px;
  width: 100%;
}
.contact-form__btn {
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
  width: 100%;
  margin-top: 6%;
  transition:
    opacity 300ms cubic-bezier(0.694, 0, 0.335, 1),
    background-color 100ms cubic-bezier(0.694, 0, 0.335, 1),
    color 100ms cubic-bezier(0.694, 0, 0.335, 1);
}
.contact-form__btn::before {
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
.contact-form__btn:hover::before {
  clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
}
.contact-form__btn:hover {
  color: black;
}
.contact-form__btn span {
  position: relative;
  z-index: 1;
}

@media screen and (max-width: 900px) {
  .contact-form {
    width: 90%;
    margin: 0 auto;
  }
}
</style>
