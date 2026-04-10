<template>
  <div class="layout">
    <AppNavbar />
    <main class="layout__main">
      <slot />
    </main>
    <AppFooter />
    <FloatingPhone />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout__main {
  flex: 1;
  /* padding-top: 64px; */
}
</style>
