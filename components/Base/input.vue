<template>
  <!-- created input components -->
  <div class="input relative flex mt-2" :class="{ 'border-[red]': error }">
    <slot name="prefix" />
    <input
      v-model="model"
      :type
      :placeholder
      class="w-full h-full text-base font-normal font-proxima bg-white-400 rounded-lg py-2.5 pl-3 outline-none transition-all duration-300"
    />
    <slot name="suffix" />
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
  value: {
    type: String,
    required: true,
  },
  error: {
    type: Boolean,
    default: false,
  },
  inputClass: {
    type: String,
    default: '',
  },
});

const inputValue = ref();
</script>
