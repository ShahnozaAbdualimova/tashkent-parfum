<template>
  <div class="bg-white">
    <div class="py-4">
      <CommonSectionWrapper title="Популярные бренды" link-text="Все бренды" />
      <div class="flex flex-col gap-4">
        <CommonPopularBrand
          :brandList="brands"
          :animate="'animate-marquee-rtl'"
        />
        <CommonPopularBrand
          :brandList="brands"
          :animate="'animate-marquee-ltr'"
        />
        <CommonPopularBrand
          :brandList="brands"
          :animate="'animate-marquee-rtl'"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { brands } from '~/data/brands';
console.log(brands);
</script>
