<template>
  <div>
    <BaseCCard :items="categoryName">
      <slot />
    </BaseCCard>
  </div>
</template>

<script setup>
const categoryName = [
  {
    id: 'bestseller',
    category: 'Бестселлеры',
    img: '/images/cards/bestsellers.svg',
  },
];
</script>

<style scoped></style>
