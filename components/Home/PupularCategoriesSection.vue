<template>
  <div>
    <BaseCard :items="categoryName" />
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
