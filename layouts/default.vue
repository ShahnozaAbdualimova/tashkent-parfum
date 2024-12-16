<!-- layouts/error-layout.vue -->
<template>
  <div class="flex flex-col min-h-screen">
    <header class="h-[182px] bg-gray-200">
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </nav>
    </header>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  // You can define props here if needed for the layout
});
</script>
