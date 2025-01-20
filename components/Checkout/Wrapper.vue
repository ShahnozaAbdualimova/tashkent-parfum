<template>
  <div class="p-5">
    <h3
      class="text-black-500  text-2xl font-semibold pb-4 border-b border-white-500"
    >
      {{ title }}
    </h3>
    <div class="min-h-[200px]"><slot /></div>

  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
