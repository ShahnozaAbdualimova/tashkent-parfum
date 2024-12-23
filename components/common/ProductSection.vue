<template>
    <div class="container mx-auto mt-6">
      <CommonCSectionWrapper title="Рекомендуемые товары" link-text="Все товары">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          <BaseProductCard
            v-for="(product, index) in products.slice(0, 6)"
            :key="index"
            :product="product"
          />
        </div>
      </CommonCSectionWrapper>
    </div>
  </template>
  
  <script setup>
  import { products } from '~/data/mainProductSection';
  </script>
  