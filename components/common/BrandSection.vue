<template>
  <div class="container mx-auto mt-16 mb-11">
    <CommonCSectionWrapper
      title="Парфюм от топ брендов"
      link-text="Все бренды"
    />
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3"
    >
      <BaseTopBrandCard
        v-for="(brand, index) in brands.slice(0, 4)"
        :key="index"
        :brand="brand"
      />
    </div>
  </div>
</template>

<script setup>
import { brands } from '~/data/mainProductSection';
</script>
