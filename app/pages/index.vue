<script setup lang="ts">
// Главная страница — АлюПроект
// Секции: HomeHeroSlider → HomeIntroSection → HomeDirectionsSection → PartnerBlock
// h1 находится в компоненте HomeIntroSection (единственный на странице)

useSeoData()

const config = useProjectConfig()
useSchemaOrg({
  type: 'Organization',
  data: {
    name: config.companyName,
    url: config.siteUrl,
    telephone: config.companyPhone,
    email: config.companyEmail,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Дмитровское шоссе 157, стр. 7',
      addressLocality: 'Москва',
      addressCountry: 'RU'
    }
  }
})
</script>

<template>
  <div>
    <HomeHeroSlider />
    <HomeIntroSection />
    <HomeDirectionsSection />
    <PartnerBlock />
  </div>
</template>
