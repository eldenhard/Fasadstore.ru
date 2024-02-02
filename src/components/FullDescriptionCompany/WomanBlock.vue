<template>
    <div class="w_block">


        <div class="two_color_block">
            <div class="left_block">
                <h2>Наши специалисты c 2008 года установили более <br> 4900 дверей, окон и фасадов</h2>
                <p>Более 1800 заказчиков используют или просто наслаждаются нашими алюминиевыми конструкциями.</p>
                <ButtonPurple>Контактная информация</ButtonPurple>
            </div>
            <div class="right_block">
                <h2>Воплотим вашу мечту о качественном загородном доме</h2>
                <p>Чтобы вы уже через несколько месяцев смогли наслаждаться природой, спокойствием и лучшей жизнью в новом
                    доме
                    с вашей семьей</p>
                <ButtonPurple>Получить коммерческое предложение</ButtonPurple>

            </div>
            <div class="woman_block">
                <img src="./assets/girl_right.png" alt="">
            </div>
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

<style lang="scss" scoped>
.two_color_block {
    background: #F3F3F3;
    min-height: 40vh;
    margin-top: 10%;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.left_block{
    padding: 8% 8% 1% 8%;
    height: auto;
}
.right_block{
    padding: 8% 25% 0 8%;
    height: auto;
}


.right_block {
    background: rgb(156, 69, 147);
    background: radial-gradient(circle, rgba(156, 69, 147, 1) 0%, rgba(94, 49, 90, 1) 71%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 6% 100%);


    h2,
    p {
        color: rgb(241, 241, 241);
    }
}
.w_block{
    position: relative;
    box-sizing: border-box;
    height: 50vh;
    .woman_block {
    position: absolute;
    right: 0;
    top: -5vh;
    height:  55vh !important;
    img{
        height: 100%;
        width: 100%;
    }
}
}

@media screen and (max-width: 900px){
    .w_block{
        margin: 20% 0 48% 0;
    }
    .two_color_block {
        grid-template-columns: 1fr;
    }
    .woman_block{
        display: none;
    }
    .right_block {
    background: rgb(156, 69, 147);
    background: radial-gradient(circle, rgba(156, 69, 147, 1) 0%, rgba(94, 49, 90, 1) 71%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        button{
            margin-left: 25% !important;
            margin-bottom: 4%;
        }

    }
    .left_block{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
 

}
</style>