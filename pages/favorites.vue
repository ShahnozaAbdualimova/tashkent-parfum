<template>
  <div class="min-h-screen py-8 px-4 sm:px-6 lg:px-8 mb-9">
    <div class="max-w-7xl container mx-auto px-4 py-12">
      <h1 class="text-2xl sm:text-2xl md:text-3xl font-bold mb-6">Избранное</h1>

      <div
        v-if="products.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
      >
        <CommonProductCard
          v-for="item in products"
          :key="item.id"
          :product="item"
        />
      </div>
      <div
        v-else
        class="items-center text-center justify-center mt-9 flex flex-col"
      >
        <img src="/images/empty.png" alt="Пусто" class="mb-4 w-48 h-48" />
        <p class="text-2xl sm:text-2xl md:text-3xl font-bold mb-1">Пусто 😕</p>
        <span class="lg:text-base md:text-sm text-sm font-normal text-gray-500">
          Вы еще не сохранили никаких продуктов
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { products } from '~/data/mainProductSection';
</script>
