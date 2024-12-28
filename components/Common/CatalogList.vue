<template>
  <div class="">
    <div
      class="w-screen h-screen fixed overflow-y-scroll z-20 bg-white grid grid-cols-4 gap-y-[50px] px-32 py-16"
    >
      <ul class="flex flex-col gap-3 container mx-auto" v-for="catalog of catalogs" :key="catalog">
        <h3 class="text-xl font-medium">{{ catalog.name }}</h3>
        <NuxtLink to="#">
            <li v-for="item of catalog.subcategories" :key="item" class="text-base mt-3 font-medium subcatalog">
                {{ item }}
              </li>
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { catalogs } from '~/data/data.js';
</script>

<style scoped>

.subcatalog:hover {
    color: red;
    transition: all 0.2s ease-in;
}
</style>

