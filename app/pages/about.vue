<script setup lang="ts">
// Страница «О компании» — АлюПроект

useSeoData()

const breadcrumbs = useBreadcrumbs()

// Office gallery image switcher
const activeImage = ref('/src/components/FullDescriptionCompany/assets/office_p.jpg')
const galleryImages = ref([
  '/src/components/FullDescriptionCompany/assets/office1.jpg',
  '/src/components/FullDescriptionCompany/assets/office3.jpg',
  '/src/components/FullDescriptionCompany/assets/shop.jpg'
])

function changeImage(imageSrc: string) {
  galleryImages.value.push(activeImage.value)
  const index = galleryImages.value.indexOf(imageSrc)
  if (index !== -1) {
    galleryImages.value.splice(index, 1)
  }
  activeImage.value = imageSrc
}
</script>

<template>
  <div>
    <!-- Breadcrumbs -->
    <AppBreadcrumbs :breadcrumbs="breadcrumbs" />

    <!-- Hero Section — FullDescriptionCompany -->
    <section
      class="relative flex flex-col items-center justify-center w-full h-[60vh] bg-cover bg-center brightness-90"
      :style="{
        backgroundImage: `url('/src/components/FullDescriptionCompany/assets/ptt_about.jpg')`
      }"
    >
      <h3 class="text-white text-center text-4xl md:text-5xl font-bold">О компании</h3>
      <div class="w-[90%] md:w-1/2 mx-auto mt-4">
        <p class="text-white text-sm md:text-base text-center">
          Имея колоссальный опыт работы, мы изучили рынок, сложности и тенденции. Поэтому всегда
          рады предложить актуальные решения в продуктовой и ценовой политике
        </p>
      </div>
    </section>

    <!-- Company Description Grid -->
    <section
      class="w-[90%] xl:w-[70%] mx-auto my-8 md:my-12 grid gap-6 grid-cols-1 lg:grid-cols-[0.8fr_1fr]"
    >
      <!-- On large screens: images left, text right. On smaller: text first, images below -->
      <div class="order-2 lg:order-1 grid gap-4 grid-rows-2">
        <NuxtImg
          src="/src/components/FullDescriptionCompany/assets/XXL.jpg"
          alt="Алюминиевые конструкции — производство"
          class="w-full h-full object-cover rounded-lg"
          loading="lazy"
          width="600"
          height="400"
        />
        <NuxtImg
          src="/src/components/FullDescriptionCompany/assets/maxresdefault-1.jpg"
          alt="Алюминиевые фасады — монтаж"
          class="w-full h-full object-cover rounded-lg hidden lg:block"
          loading="lazy"
          width="600"
          height="400"
        />
      </div>
      <div class="order-1 lg:order-2">
        <h1 class="text-2xl md:text-3xl font-black">Алюминиевые Системы</h1>
        <h3 class="text-gray-700 font-semibold mt-3 text-lg">
          Наша компания готова эффективно реализовать любые виды проектов
        </h3>
        <div class="text-gray-600 mt-4 text-base space-y-4">
          <p>
            Внешний облик гражданских и промышленных зданий и сооружений в последнее время
            существенно меняется. Применение для стеновых панелей и оконных заполнений алюминия,
            нержавеющей стали, стекла и других новых материалов придает внешнему виду здания
            индивидуальный характер, особую архитектурную выразительность.
          </p>
          <p>
            Мы, как профессиональные участники этого рынка, вносим свой вклад в развитие современной
            инфраструктуры города, создавая качественные, удобные, эстетичные решения в современной
            архитектуре для комфортной жизни людей.
          </p>
          <p>
            По мере развития и роста нашей компании мы стараемся внести более существенный и
            значимый вклад в современной архитектуре, вклад, которым сможет гордиться каждый
            сотрудник нашей компании в будущем.
          </p>
          <p>
            Мы поставляем светопрозрачные конструкции на основе алюминиевого профиля (фасады, двери,
            окна, перегородки).
          </p>
          <p>
            Наша компания предлагает качественные, надежные и эстетичные решения для комфортной
            жизни людей.
          </p>
        </div>
      </div>
    </section>

    <!-- Office Gallery — AboutCompany -->
    <section
      class="w-[90%] xl:w-[70%] mx-auto my-8 md:my-12 flex flex-col-reverse md:flex-row-reverse gap-8"
    >
      <div class="w-full md:w-1/2">
        <div class="h-[30vh] md:h-[50vh] rounded-lg overflow-hidden">
          <NuxtImg
            :src="activeImage"
            alt="Офис компании Алюминиевые Системы"
            class="w-full h-full object-cover rounded-lg cursor-pointer transition-shadow duration-300 hover:shadow-xl"
            width="600"
            height="400"
            loading="lazy"
          />
        </div>
        <ul class="flex gap-2 mt-3 list-none p-0">
          <li v-for="(img, index) in galleryImages" :key="index" class="w-1/3 cursor-pointer">
            <NuxtImg
              :src="img"
              alt="Офис — фото"
              class="w-full h-full object-cover rounded-lg transition-shadow duration-300 hover:shadow-xl"
              width="200"
              height="150"
              loading="lazy"
              @click="changeImage(img)"
            />
          </li>
        </ul>
      </div>
      <div class="w-full md:w-1/2">
        <h3 class="text-xl md:text-2xl font-black">Офис ООО «Алюминиевые Системы»</h3>
        <h5 class="mt-3 text-gray-700">
          Бизнес Центр «Гефест»,<br />
          г. Москва, Дмитровское шоссе, 157, стр. 7, м. Лианозово
        </h5>
        <div class="text-gray-600 mt-4 text-base space-y-4">
          <p>
            В нашем офисе сможете посмотреть полноразмерные образцы окон и дверей из профиля АЛЮТЕХ
            W72, раздвижных дверей Алютех SL160. Контроль качества на всех этапах проведения работ,
            начиная от консультации, замера, изготовления изделий, монтажа и заканчивая гарантийным
            обслуживанием вашего остекления. Будьте уверены, обратившись в нашу компанию, мы будем
            прилагать максимальные усилия для реализации Вашего проекта.
          </p>
          <p>
            <strong>Производство</strong><br />
            Наше производство расположено: Новая Москва, съезд с ЦКА, поселение Щаповское, квартал
            №266.<br />
            Благодаря отлаженным производственным процессам, алюминиевые конструкции, производимые
            компанией, стали доступными для любого заказчика. Возможности производства стремительно
            растут, поэтому мы можем предложить грамотные решения на все случаи жизни: от
            стандартных окон до сложных конструкций, применяемых в домах с пассивным отоплением.
          </p>
          <p>Собственное производство позволяет нам:</p>
          <ol class="list-decimal pl-6 space-y-1 text-gray-600">
            <li>Предлагать лучшие цены на рынке!</li>
            <li>Работать с разными профильными системами и фурнитурой</li>
            <li>Минимальные сроки производства</li>
            <li>Работать с большими объемами и укладываться в короткий срок</li>
            <li>Все работы от проектирования до монтажа на вашем объекте!</li>
            <li>Доставить заказ в любой регион страны</li>
            <li>
              Изготовить за 7-14 дней алюминиевое остекление нужного размера и формы. Окрасить в
              выбранный вами цвет. Укомплектовать всем необходимым, согласно ТЗ или ваших пожеланий.
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- Three Advantage Cards — ThreeBlock -->
    <section class="w-[90%] xl:w-[70%] mx-auto my-8 md:my-12">
      <div class="flex flex-col md:flex-row justify-between gap-4">
        <div
          class="relative h-[15vh] md:h-[25vh] w-full md:w-[30%] rounded-lg bg-cover bg-center overflow-hidden"
          :style="{
            backgroundImage: `url('/src/components/FullDescriptionCompany/assets/floor.jpg')`
          }"
        >
          <div
            class="absolute inset-0 bg-black/50 flex flex-col items-center justify-center rounded-lg hover:bg-black/60 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="rgb(250,250,250)"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"
              />
              <path
                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
              />
            </svg>
            <p class="text-white text-sm mt-2 font-bold uppercase text-center">
              Стоимость работ фиксируется
            </p>
          </div>
        </div>
        <div
          class="relative h-[15vh] md:h-[25vh] w-full md:w-[30%] rounded-lg bg-cover bg-center overflow-hidden"
          :style="{
            backgroundImage: `url('/src/components/FullDescriptionCompany/assets/instraction.jpg')`
          }"
        >
          <div
            class="absolute inset-0 bg-black/50 flex flex-col items-center justify-center rounded-lg hover:bg-black/60 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="rgb(250,250,250)"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"
              />
              <path
                d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <p class="text-white text-sm mt-2 font-bold uppercase text-center">5 лет гарантии</p>
          </div>
        </div>
        <div
          class="relative h-[15vh] md:h-[25vh] w-full md:w-[30%] rounded-lg bg-cover bg-center overflow-hidden"
          :style="{
            backgroundImage: `url('/src/components/FullDescriptionCompany/assets/amchair.jpg')`
          }"
        >
          <div
            class="absolute inset-0 bg-black/50 flex flex-col items-center justify-center rounded-lg hover:bg-black/60 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="rgb(250,250,250)"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
              />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
            <p class="text-white text-sm mt-2 font-bold uppercase text-center">
              Установка по ГОСТ<br />точно в срок
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Dark Section — Client Types -->
    <section class="w-full bg-[#1a1a1a] relative">
      <div
        class="w-full bg-cover bg-center bg-no-repeat py-12"
        :style="{
          backgroundImage: `url('/src/components/FullDescriptionCompany/assets/about_why_overlay.png')`
        }"
      >
        <div class="flex flex-col items-center">
          <h3 class="text-gray-400 text-lg">ООО "Алюминевые системы"</h3>
          <p class="text-white text-xl md:text-2xl font-bold text-center mt-2">
            Мы помогаем создавать лицо города
          </p>
        </div>
        <div
          class="w-[95%] xl:w-[80%] mx-auto mt-10 flex flex-col md:flex-row justify-between gap-6"
        >
          <!-- Card 1: Private clients -->
          <div
            class="w-full md:w-1/3 bg-white rounded-lg shadow-lg flex flex-col items-center p-6 text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#823D7B"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
              />
            </svg>
            <p class="text-sm uppercase font-semibold mt-3">Частным клиентам</p>
            <span class="text-gray-500 text-sm mt-2">
              Компания "Алюминиевые системы" произведёт, доставит и установит для Вас современные
              окна и двери, застеклит лоджию или балкон, создаст любую нестандартную конструкцию от
              зенитных фонарей до зимнего сада.
            </span>
          </div>
          <!-- Card 2: Regular clients -->
          <div
            class="w-full md:w-1/3 bg-white rounded-lg shadow-lg flex flex-col items-center p-6 text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#823D7B"
              viewBox="0 0 16 16"
            >
              <path
                d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"
              />
              <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <p class="text-sm uppercase font-semibold mt-3">Постоянным клиентам</p>
            <span class="text-gray-500 text-sm mt-2">
              Наша компания заинтересована в установлении партнёрских отношений и развитии сети и
              приглашает к сотрудничеству дилеров, дистрибьюторов. В случае Вашей
              заинтересованности, готовы обсудить с Вами все возможности сотрудничества.
            </span>
          </div>
          <!-- Card 3: Construction companies -->
          <div
            class="w-full md:w-1/3 bg-white rounded-lg shadow-lg flex flex-col items-center p-6 text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#823D7B"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"
              />
              <path
                d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <p class="text-sm uppercase font-semibold mt-3">Строительным компаниям</p>
            <span class="text-gray-500 text-sm mt-2">
              Для компаний, специализирующихся на фасадном строительстве, компания Алюминиевые
              системы осуществляет комплексное проектирование и комплектацию светопрозрачных
              конструкций на объекты различного назначения: торгово-развлекательные комплексы,
              бизнес-центры, жилые комплексы, коттеджи.
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Block — WomanBlock -->
    <section class="relative mt-16 md:mt-24 mb-12">
      <div class="bg-gray-100 grid grid-cols-1 md:grid-cols-2 relative">
        <div class="p-8 md:p-12 flex flex-col justify-center items-center md:items-start">
          <h2 class="text-xl md:text-2xl font-bold">
            Наши специалисты c 2008 года установили более<br />
            4900 дверей, окон и фасадов
          </h2>
          <p class="text-gray-600 mt-3">
            Более 1800 заказчиков используют или просто наслаждаются нашими алюминиевыми
            конструкциями.
          </p>
          <UButton class="mt-4" color="primary" size="lg"> Контактная информация </UButton>
        </div>
        <div
          class="p-8 md:p-12 flex flex-col justify-center items-center md:items-start text-white"
          style="
            background: radial-gradient(circle, rgba(156, 69, 147, 1) 0%, rgba(94, 49, 90, 1) 71%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 6% 100%);
          "
        >
          <h2 class="text-xl md:text-2xl font-bold">
            Воплотим вашу мечту о качественном загородном доме
          </h2>
          <p class="mt-3 text-gray-100">
            Чтобы вы уже через несколько месяцев смогли наслаждаться природой, спокойствием и лучшей
            жизнью в новом доме с вашей семьей
          </p>
          <UButton class="mt-4" color="primary" variant="outline" size="lg">
            Получить коммерческое предложение
          </UButton>
        </div>
        <!-- Woman image — hidden on mobile -->
        <div class="hidden md:block absolute right-0 -top-[5vh] h-[55vh]">
          <NuxtImg
            src="/src/components/FullDescriptionCompany/assets/girl_right.png"
            alt="Специалист компании"
            class="h-full w-auto"
            loading="lazy"
            width="400"
            height="500"
          />
        </div>
      </div>
    </section>
  </div>
</template>
