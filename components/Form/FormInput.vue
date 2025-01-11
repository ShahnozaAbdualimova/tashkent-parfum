<template>
    <div
      class=""
      :class="[wrapperClass]"
    >
      <slot name="prefix" />
      <input
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :class="inputClass"
        v-model="model"
        class=""
      />
      <slot name="suffix" />
    </div>
  </template>
  
  <script setup>
  defineProps({
    id: String,
    type: String,
    placeholder: String,
    inputClass: String,
    wrapperClass: String,
    error: Boolean,
  });
  </script>
  