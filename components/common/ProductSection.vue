<template>
  <section class="w-full mt-16 mb-11">
    <div class="container mx-auto">
      <CommonSectionWrapper
      title="Рекомендуемые товары"
      link-text="Все товары"
      class=""
    >
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3"
      >
        <commonProductCard
          v-for="(product, index) in products.slice(0, 6)"
          :key="index"
          :product="product"
        />
      </div>
    </CommonSectionWrapper>
    </div>
  </section>
</template>

<script setup>
// import { products } from '~/data/mainProductSection';
import { products } from '~/data/mainProductSection';
</script>
  