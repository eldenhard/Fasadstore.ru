<template>
    <div class="wrapper">
        <input type="checkbox" />
        <div class="fab"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white"
                class="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>
        </div>
        <div class="fac">
            <a href="tel:+74957655026">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="rgb(26, 26, 26)"
                    class="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5" />
                </svg>

            </a>
            <a href="https://wa.me/79197205872">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#25D366" class="bi bi-whatsapp"
                    viewBox="0 0 16 16">
                    <path
                        d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
            </a>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const isShowContacts = ref(false)

        const show = ref(true)
        return {
            isShowContacts,
            show
        }
    },
}
</script>

<style scoped>
.wrapper {
    width: var(--width);
    height: var(--height);
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 10;
    margin: 2dvh 2dvh;
    border-radius: var(--border-radius);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6rem;
}

.wrapper .fab {
    background: var(--background);
    width: var(--width);
    height: var(--height);
    position: relative;
    z-index: 3;
    border-radius: var(--border-radius);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fab-animation-reverse 0.4s ease-out forwards;
}



.wrapper .fac {
    width: 70px;
    height: 150px;
    border-radius: 64px;
    position: absolute;
    background: rgba(255, 255, 255);
    z-index: 2;
    padding: 0.5rem 0.5rem;
    opacity: 0;
    top: -110px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transition: opacity 0.2s ease-in, top 0.2s ease-in, width 0.1s ease-in;

}

.wrapper .fac a {
    color: var(--icon-color);
    opacity: 0.8;
}

.wrapper .fac a:hover {
    transition: 0.2s;
    opacity: 1;
    color: #30444f;
}

.wrapper input {
    height: 100%;
    width: 100%;
    border-radius: var(--border-radius);
    cursor: pointer;
    position: absolute;
    z-index: 5;
    opacity: 0;
}

.wrapper input:checked~.fab {
    animation: fab-animation 0.4s ease-out forwards;
}

.wrapper input:checked~.fac {
    width: 70px;
    height: 150px;
    animation: fac-animation 0.4s ease-out forwards 0.1s;
    top: -180px;
    opacity: 1;
}

@keyframes fab-animation {
    0% {
        transform: rotate(0) scale(1);
    }

    20% {
        transform: rotate(60deg) scale(0.93);
    }

    55% {
        transform: rotate(35deg) scale(0.97);
    }

    80% {
        transform: rotate(48deg) scale(0.94);
    }

    100% {
        transform: rotate(45deg) scale(0.95);
    }
}

@keyframes fab-animation-reverse {
    0% {
        transform: rotate(45deg) scale(0.95);
    }

    20% {
        transform: rotate(-15deg);
    }

    55% {
        transform: rotate(10deg);
    }

    80% {
        transform: rotate(-3deg);
    }

    100% {
        transform: rotate(0) scale(1);
    }
}

@keyframes fac-animation {
    0% {
        transform: scale(1, 1);
    }

    33% {
        transform: scale(0.95, 1.05);
    }

    66% {
        transform: scale(1.05, 0.95);
    }

    100% {
        transform: scale(1, 1);
    }
}
</style>