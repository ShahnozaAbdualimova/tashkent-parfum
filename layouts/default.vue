<!-- layouts/default.vue -->
<template>
  <div>
    <h1>Salom, header</h1>
    <CommonBreadcrumb />
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({});
</script>
