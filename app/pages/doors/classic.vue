<script setup lang="ts">
// Страница классических дверей — /doors/classic

useSeoData()

const breadcrumbs = useBreadcrumbs()

useSchemaOrg({
  type: 'Product',
  data: {
    name: 'Классические алюминиевые двери ALUTECH',
    description:
      'Классические алюминиевые двери ALUTECH. Повышенная шумо- и теплоизоляция, взломостойкость, долгий срок службы.',
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
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Двери классические ALUTECH</h1>
          <p class="text-gray-600 text-lg leading-relaxed">
            Алюминиевые двери Алютех — это решение для комфорта и безопасности. Двери «АЛЮТЕХ»
            эффективно сберегают тепло, вписываются в любой архитектурный стиль, обладают высокой
            взломостойкостью.
          </p>
        </div>
        <div>
          <NuxtImg
            src="/src/components/TypeDoors/assets/assets_classic/фото 1.JPG"
            alt="Классические алюминиевые двери ALUTECH"
            width="600"
            height="400"
            loading="lazy"
            class="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      <!-- Triangle section -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-16">
        <div>
          <NuxtImg
            src="/src/components/TypeDoors/assets/assets_classic/фото 21.jpg"
            alt="Двери ALUTECH классические и HD"
            width="400"
            height="500"
            loading="lazy"
            class="w-full h-auto rounded-lg"
          />
        </div>
        <div class="bg-gray-50 rounded-lg p-6">
          <p class="text-gray-700 leading-relaxed">
            Классические двери Алютех — для тех, кто ценит качественные решения. Они удобны в
            использовании. Классические алюминиевые двери Алютех создают в доме уютную и безопасную
            атмосферу.
          </p>
        </div>
        <div class="bg-gray-50 rounded-lg p-6">
          <p class="text-gray-700 leading-relaxed">
            Крупноформатные HD-двери (высотой до 3 м) — новый вариант для тех, кто ищет что-то
            особенное. Они подходят для проектов, где высоты классических дверей Алютех
            недостаточно.
          </p>
        </div>
      </section>

      <!-- Крупноформатная дверь ALT W72 HD -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div class="text-center">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Крупноформатная дверь ALT W72 HD</h2>
          <NuxtImg
            src="/src/components/TypeDoors/assets/assets_classic/фото 3.jpg"
            alt="Крупноформатная дверь ALT W72 HD"
            width="500"
            height="400"
            loading="lazy"
            class="w-full h-auto rounded-lg"
          />
        </div>
        <div class="bg-gray-50 rounded-lg p-6">
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            <li>Максимальная высота: 3 м</li>
            <li>Максимальная ширина: 1,25 м</li>
            <li>Толщина заполнения: до 56 мм</li>
            <li>Монтажная глубина профиля: 72 мм</li>
            <li>Предельная масса: до 250 кг</li>
            <li>Теплоизоляция: 2,09 Вт/м²·К</li>
            <li>Взломостойкость: RC2</li>
            <li>Класс воздухопроницаемости: А</li>
            <li>Водонепроницаемость: класс А</li>
            <li>Сопротивляемость ветру: А-класс</li>
          </ul>
          <p class="text-gray-700 mt-3">Типы открываний: внутреннее, наружное</p>
        </div>
      </section>

      <!-- Классическая дверь ALT W72 -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div class="bg-gray-50 rounded-lg p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Классическая дверь ALT W72</h2>
          <p class="text-gray-700 mb-3">
            Данные конструкции ALT W72 отличаются повышенной шумо- и теплоизоляцией. Двери Alutech
            W72 полностью адаптированы под наш климат и подходят для зданий всех типов.
          </p>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            <li>Предельная высота створки: 2,5 м</li>
            <li>Предельная ширина створки: 1,1 м</li>
            <li>Толщина заполнения: до 54 мм</li>
            <li>Глубина профильной системы: 72 мм</li>
            <li>Масса: до 250 кг</li>
            <li>Уровень теплоизоляции: 1,6 Вт/м²·К</li>
            <li>Взломостойкость: D-класс</li>
            <li>Водонепроницаемость: класс 2А (50 Па)</li>
            <li>Сопротивляемость ветровой нагрузке: класс С4 (до 1600 Па)</li>
          </ul>
          <p class="text-gray-700 mt-3">Типы открываний: внутреннее, наружное</p>
        </div>
        <div class="text-center">
          <NuxtImg
            src="/src/components/TypeDoors/assets/assets_classic/фото 4.png"
            alt="Классическая дверь ALT W72"
            width="500"
            height="400"
            loading="lazy"
            class="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      <!-- Классическая дверь ALT W62 -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div class="text-center">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Классическая дверь ALT W62</h2>
          <NuxtImg
            src="/src/components/TypeDoors/assets/фото 5.jpg"
            alt="Классическая дверь ALT W62"
            width="500"
            height="400"
            loading="lazy"
            class="w-full h-auto rounded-lg"
          />
        </div>
        <div class="bg-gray-50 rounded-lg p-6">
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            <li>Максимальная высота створки – 2500 мм</li>
            <li>Максимальная ширина створки – 1250 мм</li>
            <li>Максимальный вес створки – 180 кг</li>
            <li>Толщина заполнения – 40 мм</li>
            <li>Теплопроводность Uf = 3,29 W/m²·K</li>
            <li>Приведенное сопротивление теплопередаче (ГОСТ 26602.1) R₀ = 0,546 м²·°С/Вт</li>
            <li>Водопроницаемость (ГОСТ 26602.2) – Класс А</li>
            <li>Воздухопроницаемость (ГОСТ 26602.2) – Класс А</li>
            <li>Сопротивляемость ветровой нагрузке (ГОСТ 26602.5) – Класс А</li>
            <li>Взломостойкость – RC2 (СТБ EN 1627)</li>
          </ul>
          <p class="text-gray-700 mt-3">Типы открываний: внутреннее, наружное</p>
        </div>
      </section>

      <!-- Типы ручек -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">Типы ручек</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <NuxtImg
              src="/src/components/TypeDoors/assets/фото 6.png"
              alt="Нажимная ручка с замком"
              width="300"
              height="200"
              loading="lazy"
              class="w-full h-48 object-contain rounded-lg mb-3"
            />
            <p class="text-gray-700">Нажимная ручка с замком</p>
          </div>
          <div class="text-center">
            <NuxtImg
              src="/src/components/TypeDoors/assets/фото 7.webp"
              alt="Нажимной гарнитур с замком"
              width="300"
              height="200"
              loading="lazy"
              class="w-full h-48 object-contain rounded-lg mb-3"
            />
            <p class="text-gray-700">Нажимной гарнитур с замком</p>
          </div>
          <div class="text-center">
            <NuxtImg
              src="/src/components/TypeDoors/assets/фото 8.webp"
              alt="Ручка с штангой"
              width="300"
              height="200"
              loading="lazy"
              class="w-full h-48 object-contain rounded-lg mb-3"
            />
            <p class="text-gray-700">Ручка с штангой</p>
          </div>
        </div>
      </section>

      <!-- Петли -->
      <section class="mb-16 text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">
          Прочные петли. Ресурс петель — 1 000 000 циклов закрытия и открытия
        </h2>
        <NuxtImg
          src="/src/components/TypeDoors/assets/фото 9.webp"
          alt="Прочные петли ALUTECH"
          width="600"
          height="400"
          loading="lazy"
          class="mx-auto w-full max-w-xl h-auto rounded-lg"
        />
      </section>

      <!-- Термомосты Anti-Bi-Metal -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div class="text-center">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Термомосты Anti-Bi-Metal</h2>
          <NuxtImg
            src="/src/components/TypeDoors/assets/фото 10.webp"
            alt="Термомосты Anti-Bi-Metal"
            width="500"
            height="350"
            loading="lazy"
            class="w-full h-auto rounded-lg"
          />
        </div>
        <div class="flex items-center justify-center">
          <p class="text-gray-700 text-lg leading-relaxed">
            Исключают деформацию дверей из-за большой разницы температур снаружи и внутри помещения.
            Увеличивают срок службы фурнитуры.
          </p>
        </div>
      </section>

      <!-- Типы стеклопакета -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">Типы стеклопакета</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="text-center">
            <NuxtImg
              src="/src/components/TypeDoors/assets/фото 11.webp"
              alt="Стеклопакет до 54 мм"
              width="400"
              height="300"
              loading="lazy"
              class="w-full h-48 object-cover rounded-lg mb-3"
            />
            <p class="text-gray-700">Толщина стеклопакета — до 54 мм</p>
          </div>
          <div class="text-center">
            <NuxtImg
              src="/src/components/TypeDoors/assets/фото 12.webp"
              alt="Вставки из вспененного РЕ-материала"
              width="400"
              height="300"
              loading="lazy"
              class="w-full h-48 object-cover rounded-lg mb-3"
            />
            <p class="text-gray-700">Вставки из вспененного РЕ-материала</p>
          </div>
        </div>
      </section>

      <!-- Низкие пороги -->
      <section class="mb-16 text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Пороги высотой всего 14, 20 или 22 мм</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Обеспечивают комфортное перемещение из дома на улицу и обратно, а выпадающий порог —
          безбарьерную среду.
        </p>
      </section>

      <!-- Видео -->
      <section class="mb-16 text-center">
        <ClientOnly>
          <iframe
            width="720"
            height="405"
            src="https://rutube.ru/play/embed/85033df46441920caede6d19eabf80e5/"
            frameborder="0"
            allow="clipboard-write; autoplay"
            allowfullscreen
            class="mx-auto max-w-full rounded-lg"
          />
        </ClientOnly>
      </section>

      <!-- Безопасность -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-4 text-center">Безопасность</h2>
        <p class="text-gray-600 text-center mb-4">
          Классические двери «АЛЮТЕХ» оснащены рядом комплектующих для безопасности:
        </p>
        <ul class="list-disc list-inside text-gray-700 max-w-2xl mx-auto space-y-2">
          <li>Противовзломные штапики — предотвращают выпадение стеклопакета</li>
          <li>Ударостойкое заполнение — устойчиво к механическим повреждениям</li>
          <li>Фурнитура — исключает риск самостоятельного открытия окон Алютех детьми</li>
        </ul>
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
