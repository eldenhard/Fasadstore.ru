<template>
  <div class="wrapper">
    <input type="checkbox" aria-label="Открыть контакты" />
    <div class="fab">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="white"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
        />
      </svg>
    </div>
    <div class="fac">
      <a href="tel:+74957655026" aria-label="Позвонить">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="rgb(26, 26, 26)"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </a>
      <a
        href="https://max.ru/join/mpPhGL6NOwn6T6zp06oKRePovLXW7n1rV0DECEXqFiE"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="MAX"
        class="fac__max"
      >
        <img
          src="/images/social/max.svg"
          alt=""
          width="35"
          height="35"
        />
      </a>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 10;
  margin: 2dvh;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
}

.wrapper .fab {
  background: #4285f4;
  width: 50px;
  height: 50px;
  position: relative;
  z-index: 3;
  border-radius: 100%;
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
  padding: 0.5rem;
  opacity: 0;
  top: -110px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition:
    opacity 0.2s ease-in,
    top 0.2s ease-in,
    width 0.1s ease-in;
}

.wrapper .fac a {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #344955;
  opacity: 0.8;
  transition:
    opacity 0.2s,
    background 0.2s;
}

.wrapper .fac a:hover {
  opacity: 1;
  color: #30444f;
}

.wrapper .fac .fac__max:hover {
  background: #8419ff;
}

.wrapper input {
  height: 100%;
  width: 100%;
  border-radius: 100%;
  cursor: pointer;
  position: absolute;
  z-index: 5;
  opacity: 0;
}

.wrapper input:checked ~ .fab {
  animation: fab-animation 0.4s ease-out forwards;
}

.wrapper input:checked ~ .fac {
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
