<script setup lang="ts">
// Блок контактной информации — Tailwind CSS v4
// Перенос из src/components/ContactBlock/ContactBlock.vue
</script>

<template>
  <div>
    <!-- Секция с фоновым изображением -->
    <section class="relative h-[50vh] bg-cover bg-center bg-gray-800">
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/70 to-black/50 flex items-center justify-center"
      >
        <div class="text-center max-w-lg px-4">
          <p class="text-white font-bold text-2xl">Контактная информация</p>
          <p class="text-gray-300 text-sm mt-2">
            Всю нашу продукцию можно заказать не выходя из дома. Инженер по замерам выезжает
            бесплатно со всеми образцами продукции по Москве и Московской области.
          </p>
        </div>
      </div>
    </section>

    <!-- Три преимущества -->
    <section class="bg-gray-100 py-10">
      <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-center">
        <div class="flex flex-col items-center">
          <span class="i-lucide-clipboard-check w-12 h-12 text-purple-600 mb-3" />
          <h4 class="font-bold text-lg">Не поднимаем стоимость</h4>
          <p class="text-gray-500 text-sm mt-1">
            Фиксируем стоимость на всех этапах работы в договоре
          </p>
        </div>
        <div class="flex flex-col items-center">
          <span class="i-lucide-clock w-12 h-12 text-purple-600 mb-3" />
          <h4 class="font-bold text-lg">Соблюдаем сроки</h4>
          <p class="text-gray-500 text-sm mt-1">
            Несем ответственность за соблюдение сроков выполнения работ
          </p>
        </div>
        <div class="flex flex-col items-center">
          <span class="i-lucide-hand-helping w-12 h-12 text-purple-600 mb-3" />
          <h4 class="font-bold text-lg">Ваше участие минимальное</h4>
          <p class="text-gray-500 text-sm mt-1">
            Остекление коттеджей полностью под ключ с минимальным участием заказчика
          </p>
        </div>
      </div>
    </section>

    <!-- Форма + контактный блок -->
    <section class="py-10">
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        <!-- Форма -->
        <ContactForm />

        <!-- Контактная информация -->
        <div class="bg-gray-900 text-white p-8 rounded-lg space-y-6">
          <p class="text-lg font-bold uppercase">
            Закажите бесплатный выезд инженера-замерщика и обсудите все вопросы лично
          </p>
          <p class="text-gray-300 text-sm">
            Получите информацию о полной стоимости и срокам строительства ваших конструкций
          </p>

          <div class="flex items-start gap-4">
            <span class="i-lucide-map-pin w-8 h-8 text-white shrink-0" />
            <div>
              <p class="text-xs text-gray-400">Адрес</p>
              <a
                href="https://yandex.ru/maps/-/CDBimGN~"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white hover:text-gray-300 transition-colors"
              >
                Москва Дмитровское шоссе 157 стр. 7
              </a>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <span class="i-lucide-phone w-8 h-8 text-white shrink-0" />
            <div>
              <p class="text-xs text-gray-400">Почта и телефон</p>
              <p>7655026@mail.ru</p>
              <p>+7 (495) 765-50-26</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <span class="i-lucide-clock w-8 h-8 text-white shrink-0" />
            <div>
              <p class="text-xs text-gray-400">Время работы</p>
              <p>9:00 – 20:00</p>
            </div>
          </div>

          <!-- Соцсети -->
          <div class="flex items-center gap-4 pt-4">
            <a
              href="https://www.youtube.com/@fasadstore"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-red-600 transition-colors"
              aria-label="YouTube"
            >
              <span class="i-lucide-youtube w-5 h-5" />
            </a>
            <a
              href="https://t.me/aluteh_systems"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-500 transition-colors"
              aria-label="Telegram"
            >
              <span class="i-lucide-send w-5 h-5" />
            </a>
            <a
              href="https://wa.me/79197205872"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-500 transition-colors"
              aria-label="WhatsApp"
            >
              <span class="i-lucide-message-circle w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
