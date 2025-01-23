<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-3">
    <div class="bg-white-500">
      <div
        class="flex flex-col sm:flex-row items-center justify-between mt-5 gap-1 md:flex-row"
      >
        <h2
          class="font-bold text-2xl sm:text-2xl lg:text-3xl text-black-500 leading-10"
        >
          Все бренды
        </h2>
        <BaseInput class="w-full sm:w-auto pl-2.5" placeholder="search">
          <template #prefix>
            <i class="icon-search text-[20px] text-grey-100"></i>
          </template>
        </BaseInput>
      </div>
      <div class="grid grid-cols-4 gap-6 items-center justify-center mt-5">
        <div
          class="bg-white p-4 rounded-2xl justify-center items-center shadow-xl overflow-hidden"
          v-for="(brand, index) in brands"
          :key="index"
        >
          <img :src="brand.imgBrand" alt="brand-img" />
        </div>
      </div>
      <div class="flex justify-center mt-6 sm:mt-8 mb-8 sm:mb-16">
        <BaseButton variant="lightDanger" class="w-full sm:w-auto">
          <i class="icon-left text-[20px] rotate-90"></i>
          Загрузить еще
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { brands } from '~/data/BrandsData';
</script>

<style></style>
