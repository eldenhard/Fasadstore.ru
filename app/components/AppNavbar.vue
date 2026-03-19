<script setup lang="ts">
const isDrawerOpen = ref(false)

const navLinks = [
  { label: 'Главная', to: '/' },
  { label: 'О компании', to: '/about' },
  { label: 'Объекты', to: '/objects' },
  { label: 'Контакты', to: '/contacts' }
]

const productItems = [
  [
    { label: 'Алюминиевые окна', to: '/windows' },
    { label: 'Алюминиевые двери', to: '/doors' }
  ]
]
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-gray-900">
    <nav class="mx-auto flex items-center justify-between px-4 h-16 max-w-7xl">
      <NuxtLink to="/" class="shrink-0">
        <NuxtImg
          src="/images/logo.webp"
          alt="Логотип компании"
          width="160"
          height="40"
          class="h-10 w-auto"
        />
      </NuxtLink>
      <div class="hidden lg:flex items-center gap-1">
        <UNavigationMenu
          :items="navLinks.map((l) => ({ label: l.label, to: l.to }))"
          class="text-white"
        />
        <UDropdownMenu :items="productItems">
          <UButton
            variant="ghost"
            color="neutral"
            label="Продукция"
            trailing-icon="i-lucide-chevron-down"
            class="text-white"
          />
        </UDropdownMenu>
      </div>
      <UButton
        as="a"
        href="tel:+74957655026"
        variant="ghost"
        color="neutral"
        icon="i-lucide-phone"
        label="+7(495) 765-50-26"
        class="hidden lg:inline-flex text-white"
      />
      <UButton
        variant="ghost"
        color="neutral"
        icon="i-lucide-menu"
        class="lg:hidden min-w-[44px] min-h-[44px] text-white"
        aria-label="Открыть меню"
        @click="isDrawerOpen = true"
      />
    </nav>
    <ClientOnly>
      <USlideover v-model:open="isDrawerOpen" side="left">
        <template #body>
          <div class="p-6 space-y-4">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="block py-3 text-lg font-medium min-h-[44px] flex items-center"
              @click="isDrawerOpen = false"
              >{{ link.label }}</NuxtLink
            >
            <div class="border-t pt-4">
              <p class="text-sm text-gray-500 mb-2">Продукция</p>
              <NuxtLink
                v-for="item in productItems[0]"
                :key="item.to"
                :to="item.to"
                class="block py-3 pl-4 text-lg min-h-[44px] flex items-center"
                @click="isDrawerOpen = false"
                >{{ item.label }}</NuxtLink
              >
            </div>
            <div class="border-t pt-4">
              <UButton
                as="a"
                href="tel:+74957655026"
                icon="i-lucide-phone"
                label="+7(495) 765-50-26"
                color="primary"
                block
                class="min-h-[44px]"
              />
            </div>
          </div>
        </template>
      </USlideover>
    </ClientOnly>
    <div class="lg:hidden fixed bottom-4 right-4 z-50">
      <UButton
        as="a"
        href="tel:+74957655026"
        icon="i-lucide-phone"
        color="primary"
        size="xl"
        class="rounded-full shadow-lg min-w-[44px] min-h-[44px]"
        aria-label="Позвонить"
      />
    </div>
  </header>
</template>
