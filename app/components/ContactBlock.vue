<script setup lang="ts">
const { baseURL } = useRuntimeConfig().app
const b = (p: string) => `${baseURL}${p.startsWith('/') ? p.slice(1) : p}`
const heroBg = `url('${b('/images/contacts/background.jpg')}') no-repeat center center`
const planetBg = `url('${b('/images/contacts/world.png')}') no-repeat left bottom`
</script>

<template>
  <div class="contact-block">
    <section class="contact-block__hero" :style="{ background: heroBg, backgroundSize: 'cover' }">
      <div class="contact-block__overlay">
        <div class="contact-block__overlay-inner">
          <p class="contact-block__main-title">Контактная информация</p>
          <p class="contact-block__main-desc">
            Всю нашу продукцию можно заказать не выходя из дома. Инженер по замерам выезжает
            бесплатно со всеми образцами продукции по Москве и Московской области.
          </p>
        </div>
      </div>
    </section>
    <section class="contact-block__three">
      <div class="contact-block__three-inner">
        <div class="contact-block__advantage">
          <Icon name="lucide:clipboard-check" size="64" class="contact-block__advantage-icon" />
          <h4>Не поднимаем стоимость</h4>
          <p>Фиксируем стоимость на всех этапах работы в договоре</p>
        </div>
        <div class="contact-block__advantage">
          <Icon name="lucide:database" size="64" class="contact-block__advantage-icon" />
          <h4>Соблюдаем строки</h4>
          <p>Несем ответственность за соблюдение сроков выполнения работ</p>
        </div>
        <div class="contact-block__advantage">
          <Icon name="lucide:hand-helping" size="64" class="contact-block__advantage-icon" />
          <h4>Ваше участие минимальное</h4>
          <p>Остекление коттеджей полностью под ключ с минимальным участием заказчика</p>
        </div>
      </div>
    </section>
    <div class="contact-block__planet" :style="{ background: planetBg }">
      <section class="contact-block__form-section">
        <ContactForm />
        <div class="contact-block__info">
          <p class="contact-block__info-title">
            Закажите бесплатный выезд инженера-замерщика и обсудите все вопросы лично
          </p>
          <p class="contact-block__info-desc">
            Получите информацию о полной стоимости и срокам строительства ваших конструкций
          </p>
          <div class="contact-block__info-row">
            <Icon name="lucide:map-pin" size="45" class="contact-block__info-icon" />
            <div>
              <p class="contact-block__label">Адрес</p>
              <NuxtLink
                class="contact-block__value"
                to="https://yandex.ru/maps/-/CDBimGN~"
                external
                target="_blank"
                >Москва Дмитровское шоссе 157 стр. 7</NuxtLink
              >
            </div>
          </div>
          <div class="contact-block__info-row">
            <Icon name="lucide:smartphone" size="45" class="contact-block__info-icon" />
            <div>
              <p class="contact-block__label">Почта и телефон</p>
              <p class="contact-block__value">7655026@mail.ru</p>
              <p class="contact-block__value">+7 (495) 765-50-26</p>
            </div>
          </div>
          <div class="contact-block__info-row">
            <Icon name="lucide:clock" size="45" class="contact-block__info-icon" />
            <div>
              <p class="contact-block__label">Время работы</p>
              <p class="contact-block__value">9:00 - 20:00</p>
            </div>
          </div>
          <div class="contact-block__socials">
            <a
              class="contact-block__social contact-block__social--yt"
              href="https://www.youtube.com/@fasadstore"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Icon name="lucide:youtube" size="20" class="contact-block__social-icon" />
            </a>
            <a
              class="contact-block__social contact-block__social--tg"
              href="https://t.me/aluteh_systems"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <Icon name="lucide:send" size="20" class="contact-block__social-icon" />
            </a>
            <a
              class="contact-block__social contact-block__social--wa"
              href="https://wa.me/79197205872"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <Icon name="lucide:message-circle" size="20" class="contact-block__social-icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.contact-block__hero {
  height: 50vh;
  width: 100%;
  position: relative;
}
.contact-block__overlay {
  background: linear-gradient(0deg, rgba(59, 59, 59, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-block__overlay-inner {
  width: 40%;
  margin: 0 auto;
}
.contact-block__main-title {
  color: white;
  font-weight: bold;
  font-size: 3vh;
  text-align: center;
}
.contact-block__main-desc {
  color: #d4d4d4;
  font-size: 1.8vh;
  text-align: center;
  font-weight: 400;
}
.contact-block__three {
  height: 30vh;
  background: #f3f3f3;
}
.contact-block__three-inner {
  width: 60%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.contact-block__advantage {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 30%;
  text-align: center;
}
.contact-block__advantage-icon {
  color: #8b4b84;
}
.contact-block__advantage h4 {
  padding-top: 5%;
  font-weight: bold;
}
.contact-block__advantage p {
  color: grey;
}
.contact-block__planet {
  width: 100%;
  min-height: 60vh;
  height: auto;
}
.contact-block__form-section {
  display: flex;
  justify-content: space-between;
  width: 60%;
  gap: 20px;
  margin: 0 auto;
  height: 100%;
}
.contact-block__info {
  background: #041e2f;
  color: white;
  width: 45%;
  padding: 4%;
}
.contact-block__info-title {
  font-size: 2.5vh;
  font-weight: bold;
  text-transform: uppercase;
}
.contact-block__info-desc {
  color: #d4d4d4;
  margin-top: 2%;
}
.contact-block__info-row {
  margin-top: 6%;
  width: 70%;
  display: flex;
  gap: 20px;
  align-items: flex-start;
}
.contact-block__info-icon {
  color: white;
  flex-shrink: 0;
}
.contact-block__label {
  font-size: 1.5vh;
  color: #999;
}
.contact-block__value {
  color: white;
  text-decoration: none;
  transition: color 0.4s ease;
}
a.contact-block__value:hover {
  color: rgb(192, 192, 192);
}
.contact-block__socials {
  width: 45%;
  margin: 4% auto 4%;
  display: flex;
  justify-content: space-between;
}
.contact-block__social {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgb(48, 48, 48);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.5s ease-in-out;
}
.contact-block__social-icon {
  color: rgb(211, 211, 211);
}
.contact-block__social--yt:hover {
  background: #ff0000;
}
.contact-block__social--tg:hover {
  background: #259cd8;
}
.contact-block__social--wa:hover {
  background: #4caf50;
}
@media screen and (max-width: 1300px) {
  .contact-block__form-section {
    width: 90%;
  }
}
@media screen and (max-width: 900px) {
  .contact-block__overlay-inner {
    width: 80%;
  }
  .contact-block__three {
    height: auto;
  }
  .contact-block__three-inner {
    flex-direction: column;
    width: 100%;
  }
  .contact-block__advantage {
    width: 100%;
    border-bottom: 1px solid lightgrey;
    padding: 2% 0;
  }
  .contact-block__advantage:first-child {
    padding-top: 4%;
  }
  .contact-block__form-section {
    flex-direction: column;
    width: 100%;
  }
  .contact-block__info {
    width: 100%;
    margin: 0;
  }
}
</style>
