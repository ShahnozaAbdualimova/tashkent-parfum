<template>
  <div class="container mx-auto mt-6">
    <CommonSectionWrapper title="Рекомендуемые товары" linkText="Все товары">
      <div class="grid grid-cols-6 gap-3">
        <ProductCard
          v-for="(product, index) in products.slice(0, 6)"
          :key="index"
          :product="product"
        />
      </div>
    </CommonSectionWrapper>
  </div>
</template>

<script setup>
import { products } from '~/data/mainProductSection';
</script>
