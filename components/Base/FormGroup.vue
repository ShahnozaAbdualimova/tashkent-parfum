<template>
  <div class="flex flex-col gap-2">
    <label
      :class="labelStyle"
      :for="id"
      class="text-sm font-semibold text-gray-200 leading-130"
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
