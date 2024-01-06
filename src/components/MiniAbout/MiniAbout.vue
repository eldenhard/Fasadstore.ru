<template>
    <div class="block">
        <section class="left_block">
            <div class="block_1">
                <img src="./assets/stanok.jpg" alt="">
            </div>
            <div class="block_2">
                <img src="./assets/propizvodstvo.webp" alt="">

            </div>
            <div class="block_3">
                <p>Алюминиевые системы изготовит и установит алюминиевые конструкции. Выполняем монтаж в Москве и области, даем официальную гарантию на изделие и установку. Дверные и оконные,  панорамные системы для дома, коммерческих и общественных объектов.</p>
            </div>
        </section>
        <section class="right_block">
            <div class="text_block">
                <h1>Алюминиевые система</h1>
                <p> Наша готова эффективно реализовать любые виды проектов Алютех
                    Внешний облик гражданских и промышленных зданий и сооружений в последнее время существенно меняется.
                    Применение для стеновых панелей и оконных заполнений алюминия, нержавеющей стали, стекла и других новых
                    материалов придает внешнему виду здания индивидуальный характер, особую архитектурную выразительность.
                </p>
            </div>
        </section>
    </div>
</template>

<style scoped>
.block {
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5%;
}
.left_block{
    display: grid;
    grid-template-areas: 'first second third';
}
.block_1{
    grid-area: first;
}
.block_2{
    grid-area: second;
}
.block_3{
    background: #FFFFFF;
    color: black;
    padding: 4%;
    grid-area: third;
}
</style>