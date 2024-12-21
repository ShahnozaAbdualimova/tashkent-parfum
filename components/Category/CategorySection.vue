<template>
  <div>
    <!-- <LoyautHeader /> -->
    <LoyautCard :items="categoryName">
      <slot />
    </LoyautCard>
  </div>
</template>

<script setup>
const categoryName = [
  {
    id: 'bestseller',
    category: 'Бестселлеры',
    img: '../../public/images/cards/bestsellers.svg',
  },
];
</script>

<style scoped></style>
