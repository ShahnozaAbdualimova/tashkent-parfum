<template>
    <button
      class=" flex gap-2 items-center justify-center"
    >
      <slot />
      <span>{{ text }}</span>
    </button>
  </template>
  <script setup>
  
  defineProps({
    text: {
      type: String,
      default: '',
    },})
</script>



