<template>
  <Input
  :type="inputPhone" 
    placeholder="(___) ___-__-__"
    v-model="model"
    v-mask="mask"
  >
    <template #prefix>
      <span
        class="px-3 py-2.5 bg-gray-400  text-black-500 text-base font-normal rounded-l-lg"
      >
        +998
      </span>
    </template>
  </Input>
</template>

<script setup>


import Input from '../Base/Input.vue';

defineProps({
  placeholder: {
    type: String,
    required: true
  }
  
})

const inputPhone = ref('String')

const model = defineModel()
</script>
