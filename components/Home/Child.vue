<template>
  <div>
    <button @click="$emit('update', 'Hi Dad!')">Send Message To Parent</button>
  </div>
</template>

<script setup lang="ts">
interface Emits {
  update: [msg];
}
defineEmits<Emits>();
</script>
