<template>
  <div>
    <HomeChild @update="childMessage = $event" />
    <p>{{ childMessage }}</p>
  </div>
</template>

<script setup lang="ts">
const childMessage = ref();
</script>
