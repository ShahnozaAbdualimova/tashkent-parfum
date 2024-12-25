<template>
  <div class="container mx-auto my-6 bg-white-500">
    <div class="flex flex-row pt-5 gap-6">
      <div class="bg-white">
        <CFilterSidebar />
      </div>
      <div class="">
        <div class="flex flex-row">
          <h3 class="font-normal text-3xl text-black-500">Все продукты</h3>
        </div>
        <div class="p-5 bg-red-500 rounded-xl mt-5">
          <h4 class="text-2xl font-normal text-black-500">
            Популярные предложения
          </h4>
          <div class="grid grid-cols-4 gap-5 mt-4">
            <BaseProductCard
              v-for="(product, index) in products.slice(0, 4)"
              :key="index"
              :product="product"
            />
          </div>
        </div>

        <div class="grid grid-cols-4 gap-5 mt-5">
          <BaseProductCard
            v-for="(product, index) in products.slice(0, 8)"
            :key="index"
            :product="product"
          />
        </div>
        <div class="mt-5">
          <h2>gvb</h2>
          <div class="grid grid-cols-4 gap-5 mt-5">
            <BaseProductCard
              v-for="(product, index) in products.slice(0, 4)"
              :key="index"
              :product="product"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CFilterSidebar from './CFilterSidebar.vue';

import { products } from '~/data/mainProductSection';
</script>

<style></style>
