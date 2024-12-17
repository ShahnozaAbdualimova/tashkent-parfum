<template>
  <div>
    <LHeader/>
    <slot></slot> 
  </div>
</template>

<script setup>
import LHeader from './LHeader.vue';

defineProps({
  layout: 'LHeader',  
});
</script>
