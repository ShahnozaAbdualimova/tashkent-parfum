<template>
  <div class="container mx-auto py-4 mt-8 mb-11 items-center">
    <!--title link -->
    <CommonSectionWrapper
      title="Парфюм от топ брендов"
      link-text="Все бренды"
    />
    <!-- Cards -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  pb-11"
    >
      <CommonTopBrandCard
        v-for="(brand, index) in brands.slice(0, 4)"
        :key="brand.title + index"
        :brand="brand"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { brands } from '~/data/mainProductSection';
</script>
