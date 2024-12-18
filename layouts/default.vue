<template>
  <div>
    <LayoutHeader />
    <CategorySection />
  </div>
</template>

<script setup>
import LHeader from './LHeader.vue';

defineProps({
  layout: 'LHeader',  
});
</script>
