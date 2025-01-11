<template>
  <div
    :class="wrapperClass"
  >
    <slot name="prefix" />
    <select
      class=" bg-white-400"
      :id="id"
      :class="selectClass"
      v-model="model"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}  
      </option>
    </select>
    <slot name="suffix" />
  </div>
</template>

<script setup>
defineProps({
  id: String,
  options: {
    type: Array,
    required: true,
    default: () => [], 
  },
  selectClass: String,
  wrapperClass: String,
  modelValue: [String, Number],
});

const model = defineModel(modelValue => modelValue, { emit: 'update:modelValue' });
</script>
