<script setup lang="ts">
// Футер сайта — Tailwind CSS v4
// Перенос контента из src/components/Footer/Footer.vue
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-[#26272b] text-[#737373]">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Информация о компании -->
        <div>
          <NuxtImg
            src="/images/logo.webp"
            alt="Лого компании"
            width="192"
            height="48"
            loading="lazy"
            class="w-48 mb-4"
          />
          <p class="text-sm leading-relaxed">
            Если у Вас остались к нам вопросы, имеются предложения, или замечания по работе сайта —
            напишите нам, мы постараемся ответить в максимально короткий срок.
          </p>
          <div class="mt-4 text-sm space-y-1">
            <p class="font-semibold text-gray-300">Юридическая информация</p>
            <p>ООО "Алюминиевые системы"</p>
            <p>ИНН/КПП: 7733336170 / 771501001</p>
            <p>ОГРН: 1197746103741</p>
            <p>Юр. и факт адрес: 127204, Москва 3-я Северная линия, д.8, кв.1</p>
          </div>
        </div>

        <!-- Пустая колонка для выравнивания на больших экранах -->
        <div class="hidden lg:block" />

        <!-- Контакты -->
        <div>
          <h6 class="text-white text-base uppercase tracking-wider mb-4">Контакты</h6>
          <ul class="space-y-3 text-sm">
            <li>
              <a
                href="tel:74957655026"
                class="hover:text-blue-400 transition-colors inline-flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  class="shrink-0"
                >
                  <path
                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z"
                  />
                </svg>
                +7 495 765-50-26
              </a>
            </li>
            <li>
              <a
                href="mailto:7655026@mail.ru"
                class="hover:text-blue-400 transition-colors inline-flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  class="shrink-0"
                >
                  <path
                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 4.697v7.104z"
                  />
                </svg>
                7655026@mail.ru
              </a>
            </li>
            <li>
              <a
                href="https://yandex.ru/maps/-/CDBimGN~"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-blue-400 transition-colors inline-flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  class="shrink-0"
                >
                  <path
                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
                  />
                </svg>
                Россия, Москва, Дмитровское шоссе д. 157 стр. 7
              </a>
            </li>
            <li class="pt-2 text-xs space-y-1">
              <p>Расчетный счет: 40702810938000087998</p>
              <p>ПАО СБЕРБАНК г. МОСКВА</p>
              <p>БИК: 044525700</p>
              <p>Кор сч: 30101810200000000700</p>
            </li>
          </ul>
        </div>
      </div>

      <!-- Разделитель -->
      <hr class="border-gray-700 my-8" />

      <!-- Нижняя строка: копирайт + соцсети -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm text-center sm:text-left">
          Copyright &copy; 2008 – {{ currentYear }} Все права защищены
        </p>

        <!-- Социальные ссылки -->
        <div class="flex items-center gap-3">
          <a
            href="https://www.youtube.com/@fasadstore"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-red-600 transition-colors"
            aria-label="YouTube"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
              class="text-gray-300"
            >
              <path
                d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
              />
            </svg>
          </a>
          <a
            href="https://t.me/aluteh_systems"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-500 transition-colors"
            aria-label="Telegram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
              class="text-gray-300"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.516.224-.516.477c0 .166.14.282.42.348q.454.13.96.234.31.063.648.139c.423.09.672.14.747.15q.91.15 1.466-.034l3.898-2.285c.24-.14.36-.07.36.2 0 .07-.04.15-.12.23l-3.15 2.88c-.27.24-.04.48.23.72q.96.69 1.92 1.38c.36.26.76.26 1.08-.04l1.56-7.2c.16-.72-.28-1.04-.84-.8"
              />
            </svg>
          </a>
          <a
            href="https://wa.me/79197205872"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-500 transition-colors"
            aria-label="WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
              class="text-gray-300"
            >
              <path
                d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer a:hover {
  color: #b46dad;
}
footer hr {
  border-top-color: #bbb;
  opacity: 0.5;
}
</style>
