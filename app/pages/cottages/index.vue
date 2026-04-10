<script setup lang="ts">
useSeoData()
useSchemaOrg({
  type: 'Product',
  data: {
    name: 'Остекление коттеджей',
    description: 'Остекление коттеджей ALUTECH: ALT W62, W72, W77.',
    brand: { '@type': 'Brand', name: 'ALUTECH' },
    manufacturer: { '@type': 'Organization', name: 'АлюПроект' }
  }
})

const line1 = ref<HTMLElement | null>(null)
const line2 = ref<HTMLElement | null>(null)
useIntersectionObserver([line1, line2], (el: HTMLElement) => {
  el.classList.add('product-page__line--visible')
})
</script>

<template>
  <div class="glass-cottages">
    <div class="glass-cottages__header">
      <NuxtImg src="/images/cottages/1.jpg" alt="Остекление коттеджей" class="glass-cottages__bg" />

      <div class="glass-cottages__content">
        <h1 class="glass-cottages__content-header">Остекление коттеджей</h1>
        <p>эстетика, надёжность и умные технологии</p>
      </div>
    </div>

    <div class="glass-cottages__container">
      <div class="glass-cottages__description">
        <p>
          Окна (Alutech ALT W62, Alutech ALT W72) для загородного дома — это не просто заполнение
          проёмов, а полноценный инструмент для создания атмосферы. <br />
          Наши решения объединяют стиль, безопасность и энергоэффективность. Подбираем комплексно —
          под ваши задачи и архитектуру. <br />
          Взломостойкая фурнитура — скрытый стандарт наших окон. Она надёжно блокирует
          несанкционированное проникновение, но при этом удобна в ежедневном использовании. Вы
          защищены — без ощущения «крепости».
        </p>
        <br />
        <hr />
        <br />
        <p><b>Тепло зимой, прохлада летом. И экономия счетов</b></p>
        <div class="glass-cottages__description-two-blocks">
          <p>
            <br />
            Многокамерные стеклопакеты и силиконовые уплотнители работают в паре: минимизируют
            теплопотери и предотвращают сквозняки. В результате — комфортный микроклимат круглый год
            и заметное снижение расходов на отопление и кондицион
          </p>

          <NuxtImg
            src="/images/cottages/2.jpg"
            alt="Остекление коттеджей"
            class="glass-cottages__description-img"
          />
        </div>
        <br />
        <hr />
        <br />

        <p class="glass-cottages__description-header-left">
          <b>Дизайн без границ: цвет, текстура, стиль</b>
        </p>
        <div class="glass-cottages__description-two-blocks">
          <NuxtImg
            src="/images/cottages/3.webp"
            alt="Остекление коттеджей"
            class="glass-cottages__description-img--small"
          />
          <p>
            <br />
            Больше не нужно мириться с белыми коробками. Мы предлагаем десятки цветов и фактур — от
            классического дерева до графитового минимализма. Окна легко вписываются в любой фасад и
            подчёркивают индивидуальность коттеджа.
          </p>
        </div>
        <br />
        <div ref="line1" class="product-page__line"></div>

        <p>
          Раздвижные системы <b>Alutech ALT 160</b> — современный тренд загородного строительства.
          Окна превращаются в проходы, которые открываются как угодно: сдвигом, распашкой или
          гармошкой. Результат — максимум света, панорамный вид и плавная связь интерьера с террасой
          или садом.
        </p>

        <br />

        <h4><b>Прозрачные алюминиевые двери: лёгкость и прочность</b></h4>
        <div class="glass-cottages__description-two-blocks">
          <p>
            <br />
            В отличие от традиционных металлических аналогов, наши алюминиевые двери могут быть
            полностью остеклёнными. Они визуально расширяют пространство, наполняют дом светом и при
            этом сохраняют жёсткость, износостойкость и минимальное сечение рам. Никакого пластика —
            только надёжный алюминий.
          </p>

          <NuxtImg
            src="/images/cottages/4.webp"
            alt="Остекление коттеджей"
            class="glass-cottages__description-img--small"
          />
        </div>

        <br />
        <hr />
        <br />

        <p>
          <b><i>Цена зависит от проекта — но мы работаем честно </i></b>
        </p>
        <br>
        <p>
          Стоимость остекления складывается из конфигурации, размеров и выбранных опций. При этом мы
          сохраняем конкурентные цены без компромиссов по качеству. Свяжитесь с нами — получите
          индивидуальный расчёт и информацию о текущих специальных предложениях.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.glass-cottages {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;

  &__header {
    position: relative;
    width: 100%;
    height: 60vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 1;
    }
  }

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  &__content {
    position: relative;
    z-index: 2;
    color: white;
    text-align: center;
  }

  &__content-header {
    font-size: 4vh;
    font-family: 'Arial black', sans-serif;
  }

  &__container {
    width: 80%;
    margin: 2% auto;
  }

  &__description {
    font-size: 2vh;
  }

  &__description-two-blocks {
    display: flex;
    justify-content: space-between;
    gap: 10%;
  }

  &__description-img {
    width: 100%;
    border-radius: 16px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }

  &__description-header-left {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    b {
      width: 45%;
      text-align: left;
    }
  }

  &__description-two-blocks {
    display: flex;
    justify-content: space-between;
    gap: 10%;
    align-items: flex-start;

    p,
    .glass-cottages__description-img {
      width: 45%; /* Явно задаем одинаковую ширину для предсказуемости */
      flex-shrink: 0;
    }
  }

  &__description-img--small {
    width: 40%;
    height: auto;
    border-radius: 16px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }
}
</style>
