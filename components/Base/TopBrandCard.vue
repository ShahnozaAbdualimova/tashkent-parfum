<template>
  <div
    class="col-span-1 w-full sm:w-[278px] bg-white-400 rounded-xl overflow-hidden cursor-pointer transition-300 border border-white-400 hover:border-gray-500 hover:shadow-xl"
  >
    <div class="flex gap-3">
      <div class="" v-for="(logo, index) in brands.logo" :key="index">
        <img :src="logo" alt="" class="rounded-full border border-gray-200" />

        <div class="flex-grow">
          <h2 class="text-sm font-medium text-gray-700">{{ brands.name }}</h2>
          <p class="text-sm text-gray-500">{{ brands.description }}</p>
        </div>
      </div>
    </div>
    <div v-for="image in brand.image" :key="image.id">
      <img :src="image.src" :alt="'Image' + image.id" />
      <div v-for="price in brand.price" :key="price.id">
  <p>{{ price.value }} UZS</p>
</div>
    </div>
    

  </div>
</template>
<script setup>
import { brands } from '~/data/mainProductSection';

defineProps({
  brand: {
    type: Object,
    required: true,
  },
});
</script>