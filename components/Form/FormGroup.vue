<template>
  <div class="mb-[100px]">
    <label
      :class="labelStyle"
      :for="id"
      class="text-sm font-normal text-gray-200 leading-130"
    >
      {{ label }}
    </label>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  id: String,
  label: String,
  labelStyle: String,
});
</script>
