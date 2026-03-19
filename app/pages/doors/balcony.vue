<script setup lang="ts">
// Страница балконных (террасных) дверей — /doors/balcony

useSeoData()

const breadcrumbs = useBreadcrumbs()

useSchemaOrg({
  type: 'Product',
  data: {
    name: 'Балконные (террасные) двери ALUTECH',
    description:
      'Балконные и террасные алюминиевые двери ALUTECH. Герметичность, взломостойкость RC2, минимальная высота порога 20 мм.',
    brand: { '@type': 'Brand', name: 'ALUTECH' },
    manufacturer: { '@type': 'Organization', name: 'АлюПроект' }
  }
})

const tabItems = [
  { label: 'HD-двери', to: '/doors/hd' },
  { label: 'Классические', to: '/doors/classic' },
  { label: 'Балконные', to: '/doors/balcony' }
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
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Дверь балконная (Террасная) ALUTECH</h1>
          <p class="text-gray-600 text-lg leading-relaxed">
            Решение для обустройства террасы или балкона. Благодаря запиранию фурнитуры по периметру
            конструкции достигается герметичность и взломостойкость дверей. Минимальная высота
            порога (20 мм) — это безопасный и комфортный доступ в помещение.
          </p>
        </div>
        <div>
          <NuxtImg
            src="/src/components/TypeDoors/assets/assets_balcony/фото 1.jpg"
            alt="Балконная (террасная) дверь ALUTECH"
            width="600"
            height="400"
            loading="lazy"
            class="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      <!-- Технические характеристики -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16">
        <div>
          <NuxtImg
            src="/src/components/TypeDoors/assets/assets_balcony/фото 3.jpg"
            alt="Технические характеристики балконной двери"
            width="500"
            height="400"
            loading="lazy"
            class="w-full h-auto rounded-lg"
          />
        </div>
        <div class="bg-gray-50 rounded-lg p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Технические характеристики</h2>

          <h3 class="text-lg font-semibold text-gray-800 mb-2">Размеры</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Максимальная высота створки: 2500 мм</li>
            <li>Максимальная ширина створки: 1600 мм</li>
            <li>Макс. вес заполнения: 150 кг</li>
          </ul>

          <h3 class="text-lg font-semibold text-gray-800 mb-2">Энергоэффективность</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Толщина заполнения: до 58 мм</li>
            <li>Теплопроводность: Uf = 1,6 W/m²·K</li>
            <li>Приведенное сопр. теплопередаче (ГОСТ 26602.1): R₀ до 1 м²·°С/Вт</li>
          </ul>

          <h3 class="text-lg font-semibold text-gray-800 mb-2">Комфорт</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Водопроницаемость (ГОСТ 26602.2): Класс А</li>
            <li>Воздухопроницаемость (ГОСТ 26602.2): Класс А</li>
            <li>Сопр. ветровой нагрузке (ГОСТ 26602.5): Класс А</li>
            <li>Звукоизоляция (ГОСТ 22602.3): До 48 дБ</li>
          </ul>

          <h3 class="text-lg font-semibold text-gray-800 mb-2">Безопасность</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Класс взломостойкости: RC2 (СТБ EN 1627)</li>
            <li>Тип открывания: внутреннее</li>
          </ul>
          <p class="text-gray-700">Типы открываний: внутреннее, наружное</p>
        </div>
      </section>

      <!-- Типы ручек -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">Типы ручек</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <NuxtImg
              src="/src/components/TypeDoors/assets/assets_balcony/фото7.webp"
              alt="Односторонняя с видимым редуктором"
              width="300"
              height="200"
              loading="lazy"
              class="w-full h-48 object-contain rounded-lg mb-3"
            />
            <p class="text-gray-700">Односторонняя c видимым редуктором</p>
          </div>
          <div class="text-center">
            <NuxtImg
              src="/src/components/TypeDoors/assets/assets_balcony/фото 8.webp"
              alt="Односторонняя со скрытым редуктором"
              width="300"
              height="200"
              loading="lazy"
              class="w-full h-48 object-contain rounded-lg mb-3"
            />
            <p class="text-gray-700">Односторонняя со скрытым редуктором</p>
          </div>
          <div class="text-center">
            <NuxtImg
              src="/src/components/TypeDoors/assets/assets_balcony/фото 9.webp"
              alt="Односторонняя с ключом"
              width="300"
              height="200"
              loading="lazy"
              class="w-full h-48 object-contain rounded-lg mb-3"
            />
            <p class="text-gray-700">Односторонняя с ключом</p>
          </div>
        </div>
      </section>

      <!-- Защита от шума и влаги -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">Защита от шума и влаги</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <NuxtImg
              src="/src/components/TypeDoors/assets/assets_balcony/фото 4.webp"
              alt="Вставка из вспененного материала"
              width="300"
              height="200"
              loading="lazy"
              class="w-full h-48 object-cover rounded-lg mb-3"
            />
            <p class="text-gray-700">Вставка из вспененного материала</p>
          </div>
          <div class="text-center">
            <NuxtImg
              src="/src/components/TypeDoors/assets/assets_balcony/фото 5.webp"
              alt="Многократная система уплотнителей"
              width="300"
              height="200"
              loading="lazy"
              class="w-full h-48 object-cover rounded-lg mb-3"
            />
            <p class="text-gray-700">Многократная система уплотнителей</p>
          </div>
          <div class="text-center">
            <NuxtImg
              src="/src/components/TypeDoors/assets/assets_balcony/фото 6.webp"
              alt="Стеклопакет толщина до 58 мм"
              width="300"
              height="200"
              loading="lazy"
              class="w-full h-48 object-cover rounded-lg mb-3"
            />
            <p class="text-gray-700">Стеклопакет толщина до 58 мм</p>
          </div>
        </div>
      </section>

      <!-- Защита от пыли -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <NuxtImg
            src="/src/components/TypeDoors/assets/assets_balcony/фото 10.webp"
            alt="Полиамидные уголки защитят дом от пыли"
            width="500"
            height="400"
            loading="lazy"
            class="w-full h-auto rounded-lg"
          />
        </div>
        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-3">Пыль с улицы не проникнет в дом</h2>
          <p class="text-gray-700 text-lg mb-4">
            Полиамидные уголки защитят дом от пыли и выхлопных газов.
          </p>
          <p class="text-gray-700 mb-3">
            Террасные двери «АЛЮТЕХ» оснащены рядом комплектующих для безопасности:
          </p>
          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li>Противовзломные штапики — предотвращают выпадение стеклопакета</li>
            <li>Ударостойкое заполнение — устойчиво к механическим повреждениям</li>
            <li>Фурнитура — исключает риск самостоятельного открытия окон Алютех детьми</li>
          </ul>
        </div>
      </section>

      <!-- Преимущества -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">
          Преимущества алюминиевых дверей ALUTECH
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
            <strong>Разнообразие дизайна:</strong> Можно выбрать любой цвет и тип открывания дверей,
            включая глухие, распашные, раздвижные или поворотные варианты.
          </li>
          <li>
            <strong>Доступная цена:</strong> Низкая стоимость при высоком качестве делает двери
            ALUTECH конкурентоспособными на рынке.
          </li>
        </ol>
      </section>

      <!-- Портфолио -->
      <section class="mb-16 text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">
          Наши выполненные работы:
          <NuxtLink to="/objects" class="text-blue-600 hover:underline">Все проекты</NuxtLink>
        </h2>
      </section>
    </div>
  </div>
</template>
