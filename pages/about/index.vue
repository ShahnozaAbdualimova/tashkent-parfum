<template>
  <div>
    <BaseFormGroup :label="'salom'">
      <BaseFormSelect
        :options="customOptions"
        placeholder="Select your option"
        v-model="selected"
        :backgroundColor="'white'"
      />
    </BaseFormGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const customOptions = ['Abubakr', 'Asadbek'];
const selected = ref(null);
</script>
