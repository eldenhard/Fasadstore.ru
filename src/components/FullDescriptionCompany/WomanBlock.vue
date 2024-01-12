<template>
    <div class="two_color_block">
        <div class="left_block">
            <h2>Наши специалисты c 2008 года установили более <br> 1870 дверей, окон и фасадов</h2>
            <p>Больше 350 заказчиков используют или просто наслаждаются нашими алюминиевыми конструкциями.</p>
            <ButtonPurple>Контактная информация</ButtonPurple>
        </div>
        <div class="right_block">
            <h2>Воплотим вашу мечту о качественном загородном доме</h2>
            <p>Чтобы вы уже через несколько месяцев смогли наслаждаться природой, спокойствием и лучшей жизнью в новом доме
                с вашей семьей</p>
            <ButtonPurple>Получить коммерческое предложение</ButtonPurple>

        </div>
    </div>
</template>

<script>
import ButtonPurple from '@/ui/ButtonPurple.vue';
export default {
    components: { ButtonPurple },
    setup() {

    },
}
</script>

<style scoped>
.two_color_block {
    background: #F3F3F3;
    height: 35vh;
    margin-top: 10%;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.two_color_block::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: polygon(49% 0, 100% 0, 100% 100%, 52% 100%);
    -webkit-box-shadow: -14px 16px 8px 0px rgba(34, 60, 80, 0.54);
    -moz-box-shadow: -14px 16px 8px 0px rgba(34, 60, 80, 0.54);
    box-shadow: -14px 16px 8px 0px rgba(34, 60, 80, 0.54);
    background-color: #823D7B;
    z-index: 1;
}

.left_block,
.right_block {
    padding: 8%;
}



</style>