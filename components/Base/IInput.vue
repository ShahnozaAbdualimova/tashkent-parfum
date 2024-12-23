<template>
    <div
      class="relative bg-white-400 rounded-lg flex items-center border border-transparent border-solid focus:within-border-black-500"
      :class="{ 'border-red-400': error }"
    >
      
      <span
        v-if="isPhoneNumber"
        class="px-3 py-2.5 bg-gray-200 border-r text-black-500 text-base font-normal rounded-l-lg"
      >
        +998
      </span>
  
      <slot name="prefix" />
      <input
        v-model="formattedValue"
        autocomplete="off"
        :type="type"
        :placeholder="placeholder"
        :class="computedClass"
        
        @input="formatCardInput"
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
    variant: {
      type: String,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isPhoneNumber: {
      type: Boolean,
      default: false, 
    },
  });
  
  const formattedValue = ref('');
  
  const computedClass = computed(() => {
    const baseClass =
      'py-2.5 pl-3 rounded-lg bg-white-400 text-sm  font-medium transition-all duration-300 flex items-center outline-none';
  
    const variantClass = {
      primary: 'w-full h-full text-base font-normal bg-white-400 py-2.5 pl-3  outline-none text-black-500',
      phoneNumber: 'w-full h-full font-normal text-sm bg-white-400 py-2.5 pl-3 text-black-500 outline-none',
   
    }[props.variant];
  
    const disabledClass = props.disabled
      ? ' bg-white-400 cursor-not-allowed'
      : '';
  
    return [baseClass, variantClass, disabledClass].join(' ');
  });
  
  const formatCardInput = () => {
    let value = formattedValue.value.replace(/\D/g, '');
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    formattedValue.value = value;
  };
  </script>

