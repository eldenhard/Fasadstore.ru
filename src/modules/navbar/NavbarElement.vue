<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="C:\Users\Asus\Desktop\Alutech\aluproject\src\assets\logo.webp"
          alt="Логотип компании"
          class="navbar_color"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Главная</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">О компании</a>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Продукция
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Объекты</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Контакты</a>
          </li>
        </ul>
        <ButtonPurple :title="'Запросить звонок'">Заказ звонка</ButtonPurple>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
import { useModalStore } from '../../store/store'
import ButtonPurple from '@/ui/ButtonPurple.vue'
export default {
  components: { ButtonPurple },
  setup() {
    const openModal = () => {
      useModalStore().openModal()
    }

    return { openModal }
  }
}
</script>

<style lang="scss" scoped>
.navbar_color {
  width: max(150px, 9vw);
}

.effect {
  text-align: center;
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: #fff;
  font-family: 'Montserrat', Helvetica, sans-serif;
  font-size: 18px;
  outline: none;
  background: var(--backgroundPurple);
  color: white;
  min-width: 10%;
  width: auto;
  overflow: hidden;
  border-radius: none;
  border: none;
  padding: 3px;

  &:focus {
    background: var(--backgroundPurpleHover);
    color: rgb(226, 226, 226);
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    transform: translateY(-1px);
  }

  &:hover {
    background: var(--backgroundPurpleHover);
    color: rgb(226, 226, 226);
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    transform: translateY(-1px);
  }
}

.effect.effect-1 {
  transition: all 0.2s linear 0s;
}

.effect.effect-1:before {
  content: '→';
  font-family: FontAwesome;
  font-size: 15px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  top: 0;
  opacity: 0;
  height: 100%;
  width: 40px;
  transition: all 0.2s linear 0s;
}

.effect.effect-1:hover {
  text-indent: -20px;
}

.effect.effect-1:hover:before {
  opacity: 1;
  text-indent: 0px;
}
</style>
