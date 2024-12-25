<template>
  <Input 
  :type="inputType" 
  :placeholder="placeholder" 
  v-model="model" 
  :error="error">
    <template #suffix>
      <button class="px-2" type="button" @click="toogleInputType">
        <!-- <img class="w-[24px]" src="/svg/eye.svg" alt="eye-for-" /> -->
      </button>
    </template>
  </Input>
</template>

<script setup>

import Input from '../Base/Input.vue';

defineProps({
  placeholder: {
    type: String,
    required: true
  },
  error: {
    type: Boolean,
    default: false,
  }
})

const inputType = ref('password')

const toogleInputType = () => {
  if (inputType.value === 'password') {
    inputType.value = 'text'
  } else {
    inputType.value = 'password'
  }
}

const model = defineModel()
</script>
