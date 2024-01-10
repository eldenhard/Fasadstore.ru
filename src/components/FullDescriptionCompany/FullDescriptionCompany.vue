<template>
    <div>
        <section class="pic_about">
            <h3>О компании</h3>
            <div class="text_block" ref="element">
                <p>Имея колоссальный опыт работы, мы изучили рынок, сложности и тенденции. Поэтому всегда рады предложить
                    актуальные решения в продуктовой и ценовой политике</p>
            </div>
        </section>
        <section class="about_company">
            <img src="./assets/XXL.jpg" alt="" class="first_img">
            <img src="./assets/maxresdefault-1.jpg" alt="" class="second_img">
            <div class="text_block_grid">
                <h1>Алюминиевые Системы</h1>
                <h3>Наша компания готова эффективно реализовать любые виды проектов</h3>
                <p>Внешний облик гражданских и промышленных зданий и сооружений в последнее время существенно меняется.
                    Применение для стеновых панелей и оконных заполнений алюминия, нержавеющей стали, стекла и других новых
                    материалов придает внешнему виду здания индивидуальный характер, особую архитектурную выразительность.
                    <br><br>
                    Мы, как профессиональные участники этого рынка, вносим свой вклад в развитие современной инфраструктуры
                    города, создавая качественные, удобные, эстетичные решения в современной архитектуре для комфортной
                    жизни людей.
                    <br><br>
                    По мере развития и роста нашей компании мы стараемся внести более существенный и значимый вклад в
                    современной архитектуре, вклад, которым сможет гордиться каждый сотрудник нашей компании в будущем.
                    <br><br>
                    Мы поставляем светопрозрачные конструкции на основе алюминиевого профиля (фасады, двери, окна,
                    перегородкии).
                    <br><br>
                    Наша компания предлагает качественные, надежные и эстетичные решения для комфортной жизни людей.
                </p>
            </div>
        </section>
    </div>
</template>

<script>
import { ref, onMounted, onBeforeUpdate } from 'vue'
export default {
    setup() {
        let element = ref(null)
        onMounted(() => {
            element.value.classList.add('animationBlock')
        })

        return {
            element
        }
    },
}
</script>

<style lang="scss" scoped>
.pic_about {
    background: url(./assets/ptt_about.jpg);
    filter: brightness(90%);
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    h3 {
        color: white;
        text-align: center;
        font-size: 5vh;
    }

}

.animationBlock {
    animation: animateBlock 1s ease-in-out  forwards;
}

@keyframes animateBlock {
    from {
        opacity: 0;
        transform: translateY(50px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.text_block {
    width: 50%;
    margin: 0 auto;

    p {
        color: white;
        margin-top: 2%;
        font-size: 2vh;
        text-align: center;
    }
}

.about_company {
    width: 70%;
    margin: 4% auto;
    display: grid;
    gap: 4%;
    grid-template-areas: 'first_img text_block'
        'second_img text_block';
    grid-template-columns: 0.8fr 1fr;

    h1 {
        color: vlack;
        font-family: 'Arial black', sans-serif;

    }

    h3 {
        color: rgb(55, 55, 75);
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        margin-top: 2%;

    }

    p {
        font-size: 18px;
        font-family: 'Montserrat', sans-serif;
        color: rgb(63, 63, 63);
        margin-top: 4%;
    }
}

.first_img {
    grid-area: first_img;
}

.second_img {
    grid-area: second_img;
}

.text_block_grid {
    grid-area: text_block;
}

@media screen and (max-width: 1650px) {
    .about_company {
        width: 90%;
        grid-template-areas: 'text_block text_block'
            'first_img second_img';
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 900px) {
    .text_block {
        width: 90%;

        p {

            text-align: justify;
        }
    }

    .about_company {
        width: 90%;
        grid-template-areas: 'text_block'
            'first_img';
        grid-template-columns: 1fr;
        gap: 2%;

        p {
            font-size: 14px;
            font-family: 'Montserrat', sans-serif;
            color: rgb(63, 63, 63);
            margin-top: 4%;
        }
    }
    .second_img{
        display: none;
    }
}
</style>