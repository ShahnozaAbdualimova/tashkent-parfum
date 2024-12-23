<template>
  <div class="container mx-auto mt-3 mb-12 items-center justify-center">
    <div class="bg-bodyBg">
      <div class="flex items-center justify-between mt-5">
        <h2 class="font-normal text-3xl text-black-500 leading-10">
          Все бренды
        </h2>
        <BaseInput class="pl-2.5" placeholder="search">
          <template #prefix>
            <i class="icon-search text-[20px] text-grey-100"></i>
          </template>
        </BaseInput>
      </div>
      <div class="grid grid-cols-4 gap-6 items-center justify-center mt-5">
        <div
          class="bg-white p-4 rounded-2xl justify-center items-center outline-none"
          v-for="(brand, index) in brands"
          :key="index"
        >
          <img :src="brand.imgBrand" alt="brand-img" />
        </div>
      </div>
      <div class="items-center justify-center flex mt-8">
        <BaseButton variant="lightDanger">
          <i class="icon-left text-[20px] rotate-90"></i>
          Загрузить еще</BaseButton
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { brands } from '~/data/BrandsData';
</script>

<style></style>
