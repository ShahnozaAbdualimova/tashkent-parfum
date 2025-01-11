<template>
  <div class="flex items-center gap-1">
    <div v-for="index in 5" :key="index" class="relative">
      <div class="text-gray-400 icon-star text-xs" />

      <div
        class="absolute top-0 left-0 overflow-hidden text-yellow-100 icon-star text-xs"
        :style="{ width: getStarFill(index) + '%' }"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  rating: {
    type: Number,
    default: 0,
  },
});

const getStarFill = (index) => {
  const fullStars = Math.floor(props.rating);
  const decimalPart = props.rating - fullStars;

  if (index <= fullStars) return 100;
  if (index === fullStars + 1) return decimalPart * 100;
  return 0;
};
</script>

<style scoped>

</style>
