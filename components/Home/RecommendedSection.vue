<template>
  <div class="container mx-auto mt-6">
    <CommonSectionWrapper title="Рекомендуемые товары" linkText="Все товары" linkHref="/products">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pb-11">
        <CommonProductCard
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
