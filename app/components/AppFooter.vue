<script setup lang="ts">
// Футер сайта — Tailwind CSS v4
// Перенос контента из src/components/Footer/Footer.vue
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-[#26272b] text-[#737373] mt-12">
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
                <span class="i-lucide-phone w-4 h-4" />
                +7 495 765-50-26
              </a>
            </li>
            <li>
              <a
                href="mailto:7655026@mail.ru"
                class="hover:text-blue-400 transition-colors inline-flex items-center gap-2"
              >
                <span class="i-lucide-mail w-4 h-4" />
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
                <span class="i-lucide-map-pin w-4 h-4" />
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
            <span class="i-lucide-youtube w-5 h-5 text-gray-300" />
          </a>
          <a
            href="https://t.me/aluteh_systems"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-500 transition-colors"
            aria-label="Telegram"
          >
            <span class="i-lucide-send w-5 h-5 text-gray-300" />
          </a>
          <a
            href="https://wa.me/79197205872"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-500 transition-colors"
            aria-label="WhatsApp"
          >
            <span class="i-lucide-message-circle w-5 h-5 text-gray-300" />
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
