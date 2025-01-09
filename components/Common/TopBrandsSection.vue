<template>
  <div class="container mx-auto mt-16 mb-11">
    <!--title link -->
    <CommonSectionWrapper
      title="Парфюм от топ брендов"
      link-text="Все бренды"
    />
    <!-- Cards -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6"
    >
      <CommonTopBrandCard
        v-for="(brand, index) in brands.slice(0, 4)"
        :key="brand.title + index"
        :brand="brand"
      />
    </div>
  </div>
</template>

<script setup>
// import { brands } from '~/data/mainProductSection';
import { brands } from '~/data/mainProductSection';
</script>
