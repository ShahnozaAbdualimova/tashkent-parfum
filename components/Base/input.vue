<template>
  <!-- created input components -->
  <div class="">
    <input
      v-model="model"
      :type
      :placeholder
      class="w-full h-full text-base font-normal font-proxima bg-white-400 rounded-lg py-2.5 pl-3"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  placeholder: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    default: 'text',
  },
});
</script>
