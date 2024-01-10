<template>
    <div>
        <section class="img_block">
            <div class="overlay">
                <div class="overlay_block">
                    <p class="main_description">Контактная информация</p>
                    <p class="mini_description">Всю нашу продукцию можно заказать не выходя из дома. Инженер по замерам
                        выезжает
                        бесплатно со всеми образцами продукции по Москве и Московской области.
                    </p>
                </div>
            </div>
        </section>
        <section class="three_elements">2</section>
        <section class="form">3</section>
    </div>
</template>


<style lang="scss" scoped>
.img_block {
    height: 55vh;
    width: 100%;
    background: url(./assets/backgroundContact.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;

    .overlay {
        background: rgba(59, 59, 59, .5);
        background: linear-gradient(0deg, rgba(59, 59, 59, .5) 0%, rgba(0, 0, 0, .7) 100%);
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .overlay_block {
            width: 40%;
            margin: 0 auto;

            .main_description {
                color: white;
                font-weight: bold;
                font-size: 3vh;
                text-align: center;
            }

            .mini_description {
                color: var(--colorGrey);
                font-size: 1.8vh;
                text-align: center;
                font-weight: 400;
            }
        }

    }
}</style>