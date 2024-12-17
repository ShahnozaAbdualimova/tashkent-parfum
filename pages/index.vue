<template>
  <div>
    <CommonLogo />
    <BaseDropdown 
      :options="options"
    />
  <BaseButton 
    variant="primary" 
    @click="handleSecondaryClick"
    >Secondary Button
  </BaseButton>
  <LHeader/>

  <h1 class="font-medium">Asadbek</h1>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import BaseDropdown from "@/components/base/dropdown.vue";
import LHeader from '~/layouts/LHeader.vue';

const options = ref([1, 2, 3, 4, 5]);
</script>