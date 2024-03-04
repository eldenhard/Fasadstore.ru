<template>
    <div class="grid product container">
        <div class="column-xs-12 column-md-7">
            <div class="product-gallery">
                <div class="product-image">
                    <img class="active" :src="activeImage" />
                </div>
                <ul class="image-list">
                    <li class="image-item" v-for="(image, index) in images" :key="index">
                        <img :src="image" @click="changeImage(image)" />
                    </li>
                </ul>
            </div>
        </div>
        <div class="column-xs-12 column-md-5">
            <h2>Офис ООО «Алюминиевые Системы»</h2>
            <h6>Бизнес Центр «Гефест», г. Москва,
                Дмитровское шоссе, 157, стр. 7, метро Лианозово 450 метров.</h6>
            <div class="description">
            
                В нашем офисе сможете посмотреть полноразмерные образцы окон и дверей из профиля
                АЛЮТЕХ W72 , раздвижных дверей Алютех SL160.
                Контроль качества на всех этапах проведение работ, начиная от консультации, замера, изготовления
                изделий, монтажа и заканчивая гарантийным обслуживанием вашего остекления. Будьте уверенны,
                обратившись в нашу компанию, мы будем прилагать максимальные усилия для реализации Вашего проекта.
                В результате Вы получите, остекление которое будет радовать Вас долгие годы!
                Компетентные и отзывчивые менеджеры всегда готовы оказать информационную и консультационную
                поддержку, по всем возникающим вопросам.
                Производство
                Наше производство расположено: Новая Москва, съезд с ЦКА, поселение Щаповское ,квартал No266.
                Благодаря отлаженным производственным процессам, алюминиевые конструкции, производимые
                компанией, стали доступными для любого заказчика. Возможности производства стремительно растут,
                поэтому мы можем предложить грамотные решения на все случаи жизни: от стандартных окон до сложных
                конструкций, применяемых в домах с пассивным отоплением.
                Удовлетворять любые требования наших заказчиков, архитекторов, застройщиков, обеспечивая при этом
                безукоризненное качество.
                Применяя высокоточное оборудование, обеспечить геометрическую форму изделия любой сложности и
                довести его до совершенства
                В производстве своих конструкций наша компания применяет только качественные составляющие, которые
                произведены европейскими компаниями мирового уровня. Все наши поставщики гарантируют заводское
                качество, безопасность и долговечность своих изделий. Благодаря 16-летнему опыту и использованию
                немецкого оборудования мы добились высочайшего качества
                Собственное производство позволяет нам:
                Позволяет нам предлагать лучшие цены на рынке!
                Работаем с разными профильными системами и фурнитурой
                Минимальные сроки производства
                Работаем с большими объемами и укладываемся в короткий срок
                Все работы от проектирования до монтажа на вашем объекте!
                Доставим заказ в любой регион страны
                Изготовим за 7-14 дней алюминиевое остекление нужного размера и формы. Окрасим в выбранный
                вами цвет. Укомплектуем всем необходимым, согласно ТЗ или ваших пожеланий.

            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const activeImage = ref(new URL('./assets/office_p.jpg', import.meta.url).href);
        const images = ref([
            new URL('./assets//office1.jpg', import.meta.url).href,

            new URL('./assets/office3.jpg', import.meta.url).href,
            new URL('./assets/shop.jpg', import.meta.url).href,
        ]);

        const changeImage = (imageSrc) => {
            activeImage.value = imageSrc;
        };

        return { activeImage, images, changeImage };
    },
};
</script>

<style lang="scss" scoped>

.container {
    margin: auto;
    padding: 0 1rem;
    width: 70vw;
}

.grid {
    display: flex;
    flex-direction: column;
    flex-flow: row wrap;
}


ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

ul li {
    margin: 0 1.75rem 0 0;
}

a {
    color: #888;
    text-decoration: none;
    transition: all 0.2s ease;
}

a:hover {
    color: #333;
}

a.active {
    color: #333;
}




h2 {
    font-size: 2.125rem;
    margin: 0;
    font-family: 'Arial-black', sans-serif;
}

img {
    max-width: 100%;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
}



.description {
    border-top: 0.0625rem solid #e3dddd;
    margin: 2rem 0;
    padding: 1rem 0 0 0;
}



.container {
    margin: auto;
    padding: 0 1rem;
    max-width: 80vw;
}

.grid>[class*=column-] {
    padding: 1rem;
}

.grid.menu,
.grid.product {
    border-bottom: 0.0625rem solid #e3dddd;
}

.grid.menu>[class*=column-] {
    padding: 0.5rem 1rem 0.5rem 1rem;
}

.grid.product {
    padding: 0 0 1.5rem 0;
}

.grid.second-nav>[class*=column-] {
    padding: 0.5rem 1rem;
}


.product-image {
    display: none;
}

.image-list li {
    margin: 0;
}

@media (min-width: 62rem) {

    .product-image img,
    .image-list img {
        width: 100%;
    }

    .product-image {
        display: block;
    }

    .product-image img {
        height: 52vh;
    }

    .product-image img.active {
        display: block;
        margin: 0 0 0.75rem 0;
    }

    .image-list {
        display: flex;
        overflow: hidden;
    }

    .image-list li {
        margin: 0 0.75rem 0 0;
        flex-basis: 100%;
    }

    .image-list li:nth-child(3) {
        margin: 0;
    }

    .image-list img {
        height: 10rem;
        width: 100%;
        transition: opacity 0.3s ease;
        cursor: pointer;
    }

    .image-list img:hover {
        opacity: 0.7;
    }






}

@-webkit-keyframes fadeImg {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeImg {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>