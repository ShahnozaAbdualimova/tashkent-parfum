<template>
  <div
    class="w-full h-screen transition-300 fixed overflow-y-scroll z-20 bg-white grid grid-cols-4 gap-y-[50px] px-32 pt-16 pb-[200px]"
    :class="{ 'rotate-x-90': !isCatalogOpen }"
  >
    <ul
      class="flex flex-col gap-3 container mx-auto"
      v-for="catalog of catalogs"
      :key="catalog"
    >
      <h3 class="text-xl font-medium">{{ catalog.name }}</h3>
      <NuxtLink to="#">
        <li
          v-for="item of catalog.subcategories"
          :key="item"
          class="text-base mt-3 font-medium subcatalog"
        >
          {{ item }}
        </li>
      </NuxtLink>
    </ul>
  </div>
</template>

<script setup>
import { catalogs } from '~/data/data.js';

defineProps({
  isCatalogOpen: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.subcatalog:hover {
  color: red;
  transition: all 0.2s ease-in;
}

.rotate-x-90 {
  transform: rotateX(90deg);
}
</style>
