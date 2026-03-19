<template>
  <div>
    <div class="accordion" id="accordionExample">
      <!-- 1 Алюминевые окна -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Алюминевые окна
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <img src="./assets/alum_window.png" alt="Алюминевые окна" />
            <p style="margin-top: 4vh; font-weight: 600">
              Окна премиум-класса теплые, созданные по индивидуальным заказам и сочетающие в себе
              стиль и надежность
            </p>
            <ButtonPurple style="width: 100%">Подробнее ➔</ButtonPurple>
          </div>
        </div>
      </div>
    </div>
    <div class="accordion" id="accordionExample2">
      <!-- 2 Алюминевые раздвижные двери -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Алюминевые раздвижные двери
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse show"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <img src="./assets/alum_razd_door.png" alt="Алюминевые раздвижные двер" />
            <p style="margin-top: 4vh; font-weight: 600">
              Раздвижные двери для частных домов и коттеджей. Комфортное открывание. Максимальная
              площадь остекления
            </p>
            <ButtonPurple style="width: 100%">Подробнее ➔</ButtonPurple>
          </div>
        </div>
      </div>
    </div>
    <div class="accordion" id="accordionExample3">
      <!--3 Остекление террас и балконов -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Остекление террас и балконов
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse show"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <img src="./assets/terrace.jpg" alt="Остекление террас и балконов" />
            <p style="margin-top: 4vh; font-weight: 600">
              Портальные теплые конструкции для террас и веранд. Панорамное остекление в сдвижных и
              складывающихся системах
            </p>
            <ButtonPurple style="width: 100%">Подробнее ➔</ButtonPurple>
          </div>
        </div>
      </div>

      <!--4 Котеджи -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            Остекление котеджей
          </button>
        </h2>
        <div
          id="collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <img src="./assets/villa.png" alt="Остекление котеджей" />
            <p style="margin-top: 4vh; font-weight: 600">
              Предлагаем все виды остекления для коттеджей и загородных домов под ключ
            </p>
            <ButtonPurple style="width: 100%">Подробнее ➔</ButtonPurple>
          </div>
        </div>
      </div>
      <!-- 5 Алюминевые двери  -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFive">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            Алюминевые двери
          </button>
        </h2>
        <div
          id="collapseFive"
          class="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <img src="./assets/alum_doors.jpg" alt="Алюминевые двери" />
            <p style="margin-top: 4vh; font-weight: 600">
              Двери АЛЮТЕХ придадут индивидуальность Вашему дому. Обладают повышенной тепло- и
              звукоизоляцией.
            </p>
            <ButtonPurple style="width: 100%">Подробнее ➔</ButtonPurple>
          </div>
        </div>
      </div>
      <!--6 Зимний сад -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingSix">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="false"
            aria-controls="collapseSix"
          >
            Зимние сады
          </button>
        </h2>
        <div
          id="collapseSix"
          class="accordion-collapse collapse"
          aria-labelledby="headingSix"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <img src="./assets/winter_garden.jpg" alt="Зимние сады" />
            <p style="margin-top: 4vh; font-weight: 600">Остекление зимних садов под ключ</p>
            <ButtonPurple style="width: 100%">Подробнее ➔</ButtonPurple>
          </div>
        </div>
      </div>
      <!--7 Остекление фасадов -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingSeven">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSeven"
            aria-expanded="false"
            aria-controls="collapseSeven"
          >
            Остекление фасадов, витражи
          </button>
        </h2>
        <div
          id="collapseSeven"
          class="accordion-collapse collapse"
          aria-labelledby="headingSeven"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <img src="./assets/fasad.png" alt="Остекление фасадов, витражи" />
            <p style="margin-top: 4vh; font-weight: 600">
              Витражное (панорамное) остекление для сплошного многоэтажного остекления
            </p>
            <ButtonPurple style="width: 100%">Подробнее ➔</ButtonPurple>
          </div>
        </div>
      </div>
      <!--8 Деревянные окна -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingEight">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseEight"
            aria-expanded="false"
            aria-controls="collapseEight"
          >
            Деревянные окна
          </button>
        </h2>
        <div
          id="collapseEight"
          class="accordion-collapse collapse"
          aria-labelledby="headingEight"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <img src="./assets/wood.jpg" alt="Деревянные окна" />
            <p style="margin-top: 4vh; font-weight: 600">
              Окна из массива дуба, лиственницы, сосны. Дерево-алюминий и алюмо-дерево
            </p>
            <ButtonPurple style="width: 100%">Подробнее ➔</ButtonPurple>
          </div>
        </div>
      </div>
      <!--9 Гаражные ворота -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingNine">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseNine"
            aria-expanded="false"
            aria-controls="collapseNine"
          >
            Гаражные ворота
          </button>
        </h2>
        <div
          id="collapseNine"
          class="accordion-collapse collapse"
          aria-labelledby="headingNine"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <img src="./assets/garage_doors.png" alt="Гаражные ворота" />
            <p style="margin-top: 4vh; font-weight: 600">
              Гаражные секционные ворота – одно из самых популярных и современных решений,
              максимально удобны в эксплуатации
            </p>
            <ButtonPurple style="width: 100%">Подробнее ➔</ButtonPurple>
          </div>
        </div>
      </div>
      <!--10 Окна ПВХ -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTen">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTen"
            aria-expanded="false"
            aria-controls="collapseTen"
          >
            Окна ПВХ
          </button>
        </h2>
        <div
          id="collapseTen"
          class="accordion-collapse collapse"
          aria-labelledby="headingTen"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <img src="./assets/window_pvh.jpg" alt="Окна ПВХ" />
            <p style="margin-top: 4vh; font-weight: 600">
              Немецкие пластиковые окна «Рехау» — гарантия качества, надежности
            </p>
            <ButtonPurple style="width: 100%">Подробнее ➔</ButtonPurple>
          </div>
        </div>
      </div>
      <!--11 Фурнитура -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingEleven">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseEleven"
            aria-expanded="false"
            aria-controls="collapseEleven"
          >
            Фурнитура
          </button>
        </h2>
        <div
          id="collapseEleven"
          class="accordion-collapse collapse"
          aria-labelledby="headingEleven"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <img src="./assets/accessories.png" alt="Фурнитура" />
            <p style="margin-top: 4vh; font-weight: 600">
              Широкий ассортимент ведущих производителей фурнитуры для алюминиевых окон и дверей
            </p>
            <ButtonPurple style="width: 100%">Подробнее ➔</ButtonPurple>
          </div>
        </div>
      </div>
      <!--12 Стеклопакеты -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwelve">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwelve"
            aria-expanded="false"
            aria-controls="collapseTwelve"
          >
            Стеклопакеты
          </button>
        </h2>
        <div
          id="collapseTwelve"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwelve"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <img src="./assets/double_glazing.png" alt="Стеклопакеты" />
            <p style="margin-top: 4vh; font-weight: 600">
              Виды стеклопакетов и их функциональность
            </p>
            <ButtonPurple style="width: 100%">Подробнее ➔</ButtonPurple>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPurple from '@/ui/ButtonPurple.vue'
export default {
  components: { ButtonPurple }
}
</script>

<style scoped>
#accordionExample {
  width: 100%;
  /* margin-bottom: 16%; */
}

.accordion-item {
  margin-top: 2%;
}

img {
  box-shadow: 2px 2px 5px grey;
  border-radius: 4px;
}
</style>
