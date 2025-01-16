<template>
  <div>
    <FormGroup :label="'salom'">
      <FormSelect
        :options="customOptions"
        placeholder="Select your option"
        v-model="selected"
        :backgroundColor="'white'"
      />
    </FormGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const customOptions = ['Abubakr', 'Asadbek'];
const selected = ref(null);
</script>
