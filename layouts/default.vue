<template>
  <div>
    <LHeader /> 
    <CategorySection />
    
  </div>
</template>

<script setup>
import LHeader from './LHeader.vue';

defineProps({
  layout: 'LHeader',  
});
</script>
