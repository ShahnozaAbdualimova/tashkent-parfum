<template>
  <div class="container mx-auto mt-16 mb-11">
   
    <CommonSectionWrapper
      title="Популярные бренды"
      link-text="Все бренды"
    />

    <div class="grid grid-cols-5 grid-rows-1 gap-4 ">
      <CommonPopularBrands
        v-for="(brand, index) in brands"
        :key="brand.name + index"
        :brand="brand"
      />
    </div>
  </div>
</template>

<script setup>
import { brands } from '~/data/brands';
</script>
