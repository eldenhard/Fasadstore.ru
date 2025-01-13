<template>
  <div class="block">
    <div class="container">
      <section class="left_side">
        <div class="header_container">
          <p class="text_description">
            Закажите бесплатный выезд <br />
            инженера-замерщика и обсудите <br />
            все вопросы лично
          </p>
        </div>
        <div class="line"></div>
        <div class="input_block">
          <form action="">
            <div class="form__group field">
              <input
                type="input"
                class="form__field"
                placeholder="Имя"
                name="name"
                id="name"
                required
              />
              <label for="name" class="form__label"> Имя </label>
            </div>
            <br />
            <div class="form__group field">
              <input
                type="input"
                class="form__field"
                placeholder="Телефон"
                name="name"
                id="password"
                required
              />
              <label for="password" class="form__label"> Телефон </label>
            </div>
            <div class="form__group">
              <input type="checkbox" class="form-check-input" id="checkbox" />
              <label for="checkbox" class="form-check-label" style="color: rgb(204, 204, 204)"
                >&nbsp;Согласие на обработку персональных данных</label
              >
            </div>

            <div class="form__group">
              <ButtonPurpleVue style="width: 100%">Отправить заявку</ButtonPurpleVue>
            </div>
          </form>
          <br />
        </div>
      </section>
      <section class="right_side">
        <div class="img_container">
          <img src="./assets/zamer.jpg" alt="" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ButtonPurpleVue from '../../ui/ButtonPurple.vue'

export default {
  components: { ButtonPurpleVue },
  setup() {}
}
</script>

<style lang="scss" scoped>
body,
html {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

.block {
  width: 80%;
  display: flex;
  margin: 0 auto;
  height: auto;
  position: relative;
  overflow: hidden;
  margin-top: 8%;

  border-radius: 8px;
}

.container {
  background: rgb(27, 27, 27);
  margin-top: 4%;
  border-radius: 8px;
  width: 80%;
  margin-right: auto;
  height: 100%;
  position: relative;
  display: flex;
  padding: 0;
  // margin: 0;
}

.left_side {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 8px !important;
}

.right_side {
  width: 30vw;
  overflow: hidden;
}

.img_container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 0; /* Добавлен этот стиль */
    border-radius: 8px;
  }
}

/* Добавленный код для мобильных устройств */
@media screen and (max-width: 850px) {
  .container {
    flex-direction: column-reverse;
  }

  .right_side {
    width: 100%;
  }
}

.text_description {
  font-family: 'Montserrat', sans-serif;
  padding: 4% 4% 0 4%;
  color: rgb(226, 226, 226);
  letter-spacing: 1px;
  font-size: 2.5vh;
  font-weight: 700;

  &:first-letter {
    font-size: 3.5vh;
  }
}

.line {
  background: rgb(243, 243, 243);
  height: 5px;
  width: 10vw;
  margin: 0 4% 0 4%;
}
@media screen and (max-width: 900px) {
  .block {
    flex-direction: column-reverse;
    width: 90%;
    margin-top: 16%;
  }
}
@media screen and (max-width: 1630px) {
  .block {
    flex-direction: column-reverse;
  }

  .container,
  .img_container {
    width: 100%;
    margin: 0;
    border-radius: 8px;
  }

  .text_description {
    font-family: 'Montserrat', sans-serif;
    font-size: 3vh;
  }

  .line {
    margin: 1% 4% 0 4%;
  }
}

.input_block {
  position: relative;
  margin-top: 4%;
  background: #1f1f1f;
  border-radius: 8px !important;
}

.form__group {
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 15px 0 0;
  margin-top: 10px;

  width: 80%;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: #fff;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}

.form__field::placeholder {
  color: transparent;
}

.form__field:placeholder-shown ~ .form__label {
  font-size: 1.3rem;
  cursor: text;
  top: 20px;
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 0.8rem;
  color: #9b9b9b;
}

.form__field:focus {
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 2px;
  border-image: linear-gradient(to right, #ebebeb, #e2e2e2);
  border-image-slice: 1;
}

.form__field:focus ~ .form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #f7f7f7;
  font-weight: 700;
}

/* reset input */
.form__field:required,
.form__field:invalid {
  box-shadow: none;
}
</style>
