<template>
  <div
    class="relative bg-white-400 rounded-lg flex items-center border border-transparent border-solid focus:within-border-black-500"
    :class="{ 'border-red-400': error }"
  >

    <slot name="prefix" />
    <input
      v-model="model"
      
      autocomplete="off"
      :type
      :placeholder
      class="w-full h-full text-base font-normal bg-white-400 py-2.5 pl-3 outline-none text-black-500 placeholder-gray-100"
   
    />
    <slot name="suffix" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
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
  mask: {
      type: String,
      default: '',
    },
});




</script>
