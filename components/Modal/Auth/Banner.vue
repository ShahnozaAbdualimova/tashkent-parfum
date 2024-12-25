<template>
  <div class="banner flex flex-col items-center justify-center px-6 pt-10 pb-6 max-w-[391px] ">
    <NuxtLink to="/">
      <CommonLogo type="white" />
    </NuxtLink>
      <p class="text-center mt-5 mb-4 text-white text-sm leading-130">Парфюме́рия — совокупность изделий, применяемых для ароматизации тела человека, одежды, белья и воздуха в помещениях.</p>
    <img src="/svg/auth_main.svg" alt="main banner image">
    <img src="/images/auth_banner_img_shadow.png" alt="banner image shadow">
    <div class="flex items-center justify-center gap-4">
      <a href="https://apps.apple.com/uz/app/toshkent-parfum/id6458222909">
        <img src="/svg/app_store.svg" alt="app store">
      </a>
      <a href="https://play.google.com/store/apps/details?id=uz.tashkentparfum.tashkentparfumapp&pli=1" >
        <img src="/svg/google_play.svg" alt="google play" >
      </a>
    </div>
  </div>
</template>



<style scoped>
.banner {
  background: linear-gradient(193deg, #EB2859 -6.24%, #792036 92.34%);
}
</style>
<script setup lang="ts">
</script>
