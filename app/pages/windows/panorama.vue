<script setup lang="ts">
// Страница панорамных алюминиевых окон — /windows/panorama

useSeoData()

const breadcrumbs = useBreadcrumbs()

useSchemaOrg({
  type: 'Product',
  data: {
    name: 'Панорамные алюминиевые окна ALUTECH',
    description:
      'Панорамные алюминиевые окна ALUTECH. Максимум света, отличная обзорность, визуальное увеличение пространства.',
    brand: { '@type': 'Brand', name: 'ALUTECH' },
    manufacturer: { '@type': 'Organization', name: 'АлюПроект' }
  }
})

const tabItems = [
  { label: 'Окна классические', to: '/windows/classic' },
  { label: 'Окна панорамные', to: '/windows/panorama' },
  { label: 'Скрытая створка', to: '/windows/hidden' }
]
</script>

<template>
  <div>
    <AppBreadcrumbs :breadcrumbs="breadcrumbs" />

    <div class="max-w-7xl mx-auto px-4 py-8">
      <ProductTabs :items="tabItems" class="mb-10" />

      <!-- Hero -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Окна панорамные</h1>
          <p class="text-gray-600 text-lg leading-relaxed">
            Алюминиевые окна ALUTECH (Алютех) универсальны. Панорамные окна пропускают значительно
            больше солнечного света, чем классические окна. Поэтому днём не придётся использовать
            искусственное освещение. Панорамные окна обеспечивают отличную обзорность, делают
            помещения визуально больше и объединяют его с окружающим ландшафтом.
          </p>
        </div>
        <div>
          <NuxtImg
            src="/src/components/TypeWindow/assets/image.png"
            alt="Панорамные алюминиевые окна ALUTECH"
            width="600"
            height="400"
            loading="lazy"
            class="w-full h-auto rounded-lg"
          />
        </div>
      </section>
      <!-- ALT W72 & ALT W77 -->
      <section class="mb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- W72 specs -->
          <div class="bg-gray-50 rounded-lg p-6">
            <p class="text-lg mb-2">
              <span class="text-3xl">🌡️</span>
              R<sub>0</sub> = 0,86 М²·°C/Вт. Защищают дом от холода зимой
            </p>
            <p class="text-lg mb-4">
              <span class="text-3xl">🔇</span>
              <strong>43 ДБ</strong>. Блокируют уличный шум
            </p>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>Глубина монтажа: 72 мм</li>
              <li>Толщина стеклопакетов: до 56 мм</li>
              <li>Поворотный, откидной и поворотно-откидной механизмы открывания створок</li>
              <li>Максимально высокие теплотехнические характеристики окон</li>
              <li>Большой выбор цветов (шкала RAL) и декоративных приемов для профиля</li>
              <li>Долгий срок службы оконных конструкций</li>
              <li>Максимальная высота створки 2600 мм</li>
              <li>Максимальная ширина 1650 мм</li>
              <li>Максимальный вес створки 150 кг</li>
              <li>Теплопроводность 1,76</li>
            </ul>
          </div>

          <!-- W77 specs -->
          <div class="bg-gray-50 rounded-lg p-6">
            <p class="text-lg mb-2">
              <span class="text-3xl">🌡️</span>
              R<sub>0</sub> = 1,07 М²·°C/Вт. Даже в сибирские морозы сохраняют в доме тепло.
            </p>
            <p class="text-lg mb-4">
              <span class="text-3xl">🔇</span>
              <strong>47 ДБ</strong>. Защищают даже от шума автомагистралей.
            </p>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>Глубина монтажа: 77 мм</li>
              <li>Толщина стеклопакетов: 68 мм</li>
              <li>Поворотный, откидной и поворотно-откидной механизмы открывания створок</li>
              <li>Максимально высокие теплотехнические характеристики окон</li>
              <li>Большой выбор цветов (шкала RAL) и декоративных приемов для профиля</li>
              <li>Долгий срок службы оконных конструкций</li>
              <li>Максимальная высота створки 2600 мм</li>
              <li>Максимальная ширина створки 1650 мм</li>
              <li>Максимальный вес створки 150 кг</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ALT W62 -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div class="text-center">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Окна ALT W62</h2>
          <NuxtImg
            src="/src/components/TypeWindow/assets/фото 4.png"
            alt="Окна ALT W62"
            width="500"
            height="400"
            loading="lazy"
            class="w-full h-auto rounded-lg"
          />
        </div>
        <div class="bg-gray-50 rounded-lg p-6">
          <p class="text-lg mb-2">
            <span class="text-3xl">🌡️</span>
            R<sub>0</sub> = 0,67 М²·°C/Вт.
          </p>
          <p class="text-lg mb-4">
            <span class="text-3xl">🔇</span>
            <strong>До 43 ДБ</strong>
          </p>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            <li>Глубина монтажа: 62 мм</li>
            <li>Толщина стеклопакетов: 40 мм</li>
            <li>Поворотный, откидной и поворотно-откидной механизмы открывания створок</li>
            <li>Максимально высокие теплотехнические характеристики окон</li>
            <li>Большой выбор цветов (шкала RAL) и декоративных приемов для профиля</li>
            <li>Долгий срок службы оконных конструкций</li>
            <li>Максимальная высота створки 2000 мм</li>
            <li>Максимальная ширина створки 1500 мм</li>
            <li>Максимальный вес створки 100 кг</li>
          </ul>
        </div>
      </section>

      <!-- Технические решения -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">
          Технические решения, помогающие окнам Алютех
          <strong>защищать</strong> дом от шума и холода
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <NuxtImg
              src="/src/components/TypeWindow/assets/фото 5.webp"
              alt="Звукоизоляционные вставки"
              width="300"
              height="200"
              loading="lazy"
              class="w-full h-48 object-cover rounded-lg mb-3"
            />
            <p class="text-gray-700">Звукоизоляционные вставки из вспененного материала</p>
          </div>
          <div class="text-center">
            <NuxtImg
              src="/src/components/TypeWindow/assets/фото 6.webp"
              alt="Система уплотнителей"
              width="300"
              height="200"
              loading="lazy"
              class="w-full h-48 object-cover rounded-lg mb-3"
            />
            <p class="text-gray-700">Многоконтурная система уплотнителей</p>
          </div>
          <div class="text-center">
            <NuxtImg
              src="/src/components/TypeWindow/assets/фото 7.webp"
              alt="Стеклопакеты"
              width="300"
              height="200"
              loading="lazy"
              class="w-full h-48 object-cover rounded-lg mb-3"
            />
            <p class="text-gray-700">Стеклопакеты до 58 мм</p>
          </div>
        </div>
      </section>

      <!-- Видео -->
      <section class="mb-16 text-center">
        <ClientOnly>
          <iframe
            width="720"
            height="405"
            src="https://rutube.ru/play/embed/0ef116c9afce3cea236c4a5986083755/"
            frameborder="0"
            allow="clipboard-write; autoplay"
            allowfullscreen
            class="mx-auto max-w-full rounded-lg"
          />
        </ClientOnly>
        <p class="text-gray-600 mt-4">
          Образцы алюминиевых окон ALUTECH (Алютех) вы сможете посмотреть в нашем офисе по адресу:
          Москва, Дмитровское шоссе д.157, стр.3.
        </p>
        <p class="text-gray-600">
          Или получить консультацию по телефону
          <a href="tel:+74957655026" class="text-blue-600 hover:underline">8(495)765-50-26</a>
        </p>
      </section>

      <!-- Три вида покрытий -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">Три вида покрытий</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <NuxtImg
              src="/src/components/TypeWindow/assets/ph2.jpg"
              alt="Полимерное покрытие"
              width="300"
              height="250"
              loading="lazy"
              class="w-full h-48 object-cover rounded-lg mb-3"
            />
            <p class="text-gray-700">
              Полимерное покрытие — это доступ к 200 оттенкам в глянцевом или матовом исполнении, а
              также с эффектом муар.
            </p>
          </div>
          <div class="text-center">
            <NuxtImg
              src="/src/components/TypeWindow/assets/ph3.webp"
              alt="Декорирование под дерево"
              width="300"
              height="250"
              loading="lazy"
              class="w-full h-48 object-cover rounded-lg mb-3"
            />
            <p class="text-gray-700">Декорирование под дерево</p>
          </div>
          <div class="text-center">
            <NuxtImg
              src="/src/components/TypeWindow/assets/ph4.jpg"
              alt="Анодирование"
              width="300"
              height="250"
              loading="lazy"
              class="w-full h-48 object-cover rounded-lg mb-3"
            />
            <p class="text-gray-700">
              Анодирование — специальное решение, которое подчеркивает фактуру металла и продлевает
              срок его службы.
            </p>
          </div>
        </div>
      </section>

      <!-- Безопасность -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-4 text-center">
          <strong>Безопасность</strong> окон Алютех
        </h2>
        <p class="text-gray-600 text-center mb-8">
          Установив конструкции Алютех, за безопасность вашего дома можно не беспокоиться. Окна
          Алютех оснащены максимальным количеством противовзломных комплектующих.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Класс защиты RC2</h3>
            <p class="text-gray-700 leading-relaxed">
              Противовзломные штапики — предотвращают выпадение стеклопакета. Ударостойкое
              заполнение — устойчиво к механическим повреждениям. Фурнитура — исключает риск
              самостоятельного открытия окон Алютех детьми.
            </p>
          </div>
          <div>
            <NuxtImg
              src="/src/components/TypeWindow/assets/фото 8.jpg"
              alt="Безопасность окон Алютех RC2"
              width="500"
              height="350"
              loading="lazy"
              class="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      <!-- Типы ручек -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">Типы ручек</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <NuxtImg
              src="/src/components/TypeWindow/assets/фото 10.webp"
              alt="Видимый редуктор"
              width="300"
              height="200"
              loading="lazy"
              class="w-full h-48 object-contain rounded-lg mb-3"
            />
            <p class="text-gray-700">Видимый редуктор</p>
          </div>
          <div class="text-center">
            <NuxtImg
              src="/src/components/TypeWindow/assets/фото 11.webp"
              alt="Скрытый редуктор"
              width="300"
              height="200"
              loading="lazy"
              class="w-full h-48 object-contain rounded-lg mb-3"
            />
            <p class="text-gray-700">Скрытый редуктор</p>
          </div>
          <div class="text-center">
            <NuxtImg
              src="/src/components/TypeWindow/assets/фото 12.webp"
              alt="Ручка с замком"
              width="300"
              height="200"
              loading="lazy"
              class="w-full h-48 object-contain rounded-lg mb-3"
            />
            <p class="text-gray-700">Ручка с замком</p>
          </div>
        </div>
      </section>

      <!-- Преимущества -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">
          Преимущества алюминиевых окон ALUTECH
        </h2>
        <ol class="space-y-4 max-w-3xl mx-auto list-decimal list-inside text-gray-700">
          <li>
            <strong>Долгий срок службы:</strong> Профили ALUTECH служат более 50 лет, при этом
            отдельные комплектующие, такие как уплотнители и фурнитура, можно легко заменить.
          </li>
          <li>
            <strong>Высокая прочность:</strong> Алюминиевые профили Алютех устойчивы к весовым и
            ветровым нагрузкам, а также к резким перепадам температур и коррозии.
          </li>
          <li>
            <strong>Отличная герметизация:</strong> Качественные уплотнители предотвращают попадание
            пыли, влаги и неприятных запахов в помещение.
          </li>
          <li>
            <strong>Удобная установка:</strong> Небольшая нагрузка на несущие конструкции позволяет
            избежать дополнительных работ по укреплению.
          </li>
          <li>
            <strong>Разнообразие дизайна:</strong> Можно выбрать любой цвет и тип открывания окон,
            включая глухие, распашные, раздвижные или поворотные варианты.
          </li>
          <li>
            <strong>Доступная цена:</strong> Низкая стоимость при высоком качестве делает окна
            ALUTECH конкурентоспособными на рынке.
          </li>
        </ol>
      </section>

      <!-- Портфолио -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">
          Наши выполненные работы:
          <NuxtLink to="/objects" class="text-blue-600 hover:underline">Все проекты</NuxtLink>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NuxtImg
            src="/src/components/TypeWindow/assets/photo_1.jpg"
            alt="Проект панорамных окон 1"
            width="400"
            height="300"
            loading="lazy"
            class="w-full h-64 object-cover rounded-lg"
          />
          <NuxtImg
            src="/src/components/TypeWindow/assets/photo_2.jpg"
            alt="Проект панорамных окон 2"
            width="400"
            height="300"
            loading="lazy"
            class="w-full h-64 object-cover rounded-lg"
          />
          <NuxtImg
            src="/src/components/TypeWindow/assets/photo_3.jpg"
            alt="Проект панорамных окон 3"
            width="400"
            height="300"
            loading="lazy"
            class="w-full h-64 object-cover rounded-lg"
          />
        </div>
      </section>
    </div>
  </div>
</template>
