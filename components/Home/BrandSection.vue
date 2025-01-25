<template>
  <CommonSectionWrapper
    title="Популярные бренды"
    link-text="Все бренды"
    class="bg-white py-4"
    body-class="flex flex-col gap-4"
  >
    <CommonPopularBrand v-for="animation in marqueList" :brandList :animation />
  </CommonSectionWrapper>
</template>

<script setup>
import { brands as brandList } from '~/data/brands';

const marqueList = [
  'animate-marquee-rtl',
  'animate-marquee-ltr',
  'animate-marquee-rtl',
];
</script>
