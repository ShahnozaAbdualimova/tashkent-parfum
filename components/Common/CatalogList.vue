<template>
  <div class="">
  <div
    class="overflow-y-scroll bg-blue-500 border-2 border-blue-700 rotate-90 grid grid-cols-4 gap-y-[50px] px-32 py-16"
  >
    <ul
      class="flex flex-col gap-3 container mx-auto"
      v-for="catalog of catalogs"
      :key="catalog"
    >
      <h3 class="text-xl font-medium">{{ catalog.name }}</h3>
      <li v-for="item of catalog.subcategories" :key="item">
        <NuxtLink to="/" class="text-base mt-3 font-medium subcatalog">
          {{ item }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { catalogs } from '~/data/data.js';

const props = defineProps({
  isCatalogOpen: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.subcatalog:hover {
  color: red;
  transition: all 0.2s ease-in;
}
</style>
