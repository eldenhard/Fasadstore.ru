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
            <router-link to="/" class="nav-link" exact>Главная</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" exact>О компании</router-link>
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
              <li>
                <router-link to="/products/action" class="dropdown-item" exact>Action</router-link>
              </li>
              <li>
                <router-link to="/products/another-action" class="dropdown-item" exact
                  >Another action</router-link
                >
              </li>
              <li>
                <router-link to="/products/something-else" class="dropdown-item" exact
                  >Something else here</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/objects" class="nav-link" exact>Объекты</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contacts" class="nav-link" exact>Контакты</router-link>
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
.router-link-active {
  color: white;
  border-bottom: 2px solid white;
}

.navbar_color {
  width: max(150px, 9vw);
}

@media screen and (max-width: 900px) {
  .router-link-active {
    color: white;
    border-bottom: none;
  }
}
</style>
