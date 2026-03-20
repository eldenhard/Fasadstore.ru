<script setup lang="ts">
const isDrawerOpen = ref(false)

const navItems = [
  { label: 'Главная', to: '/' },
  { label: 'О компании', to: '/about' },
  {
    label: 'Продукция',
    children: [
      { label: 'Алюминиевые окна', to: '/windows' },
      { label: 'Алюминиевые двери', to: '/doors' }
    ]
  },
  { label: 'Объекты', to: '/objects' },
  { label: 'Контакты', to: '/contacts' }
]

const mobileLinks = [
  { label: 'Главная', to: '/' },
  { label: 'О компании', to: '/about' },
  { label: 'Объекты', to: '/objects' },
  { label: 'Контакты', to: '/contacts' }
]

const productLinks = [
  { label: 'Алюминиевые окна', to: '/windows' },
  { label: 'Алюминиевые двери', to: '/doors' }
]
</script>

<template>
  <header class="navbar">
    <nav class="navbar__inner">
      <NuxtLink to="/" class="navbar__logo">
        <NuxtImg
          src="/images/logo.webp"
          alt="Логотип компании"
          width="160"
          height="40"
          class="navbar__logo-img"
        />
      </NuxtLink>

      <UNavigationMenu
        :items="navItems"
        variant="link"
        highlight
        highlight-color="neutral"
        color="neutral"
        class="navbar__menu"
        :ui="{ link: 'text-white', linkLabel: 'text-white', childLink: 'text-gray-900' }"
      />

      <UButton
        as="a"
        href="tel:+74957655026"
        variant="ghost"
        color="neutral"
        icon="i-lucide-phone"
        label="+7(495) 765-50-26"
        class="navbar__phone"
      />

      <UButton
        variant="ghost"
        color="neutral"
        icon="i-lucide-menu"
        class="navbar__burger"
        aria-label="Открыть меню"
        @click="isDrawerOpen = true"
      />
    </nav>

    <ClientOnly>
      <USlideover v-model:open="isDrawerOpen" side="left">
        <template #body>
          <div class="navbar__drawer">
            <NuxtLink
              v-for="link in mobileLinks"
              :key="link.to"
              :to="link.to"
              class="navbar__drawer-link"
              @click="isDrawerOpen = false"
              >{{ link.label }}</NuxtLink
            >
            <div class="navbar__drawer-divider">
              <p class="navbar__drawer-label">Продукция</p>
              <NuxtLink
                v-for="item in productLinks"
                :key="item.to"
                :to="item.to"
                class="navbar__drawer-link navbar__drawer-link--sub"
                @click="isDrawerOpen = false"
                >{{ item.label }}</NuxtLink
              >
            </div>
            <div class="navbar__drawer-divider">
              <UButton
                as="a"
                href="tel:+74957655026"
                icon="i-lucide-phone"
                label="+7(495) 765-50-26"
                color="primary"
                block
                class="navbar__drawer-phone"
              />
            </div>
          </div>
        </template>
      </USlideover>
    </ClientOnly>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: #111827;
}

.navbar__inner {
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 64px;
}

.navbar__logo {
  flex-shrink: 0;
}

.navbar__logo-img {
  height: 2.5rem;
  width: auto;
}

.navbar__menu {
  display: none;
}

.navbar__phone {
  display: none;
  color: white;
}

.navbar__burger {
  min-width: 44px;
  min-height: 44px;
  color: white;
}

@media (min-width: 1024px) {
  .navbar__menu {
    display: flex;
  }

  .navbar__phone {
    display: inline-flex;
  }

  .navbar__burger {
    display: none;
  }
}

/* Drawer */
.navbar__drawer {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.navbar__drawer-link {
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  font-size: 1.125rem;
  font-weight: 500;
  min-height: 44px;
}

.navbar__drawer-link--sub {
  padding-left: 1rem;
}

.navbar__drawer-divider {
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
}

.navbar__drawer-label {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.navbar__drawer-phone {
  min-height: 44px;
}
</style>
