<template>
  <div>
    <!-- <CommonCFilterSidebar/> -->

    <!-- <CommonFooter/> -->
    <Home />
    <CommonProductReviewSlider/>
    <CommonFooter/>
  </div>
</template>

<script setup>
import Home from '../components/Home/Home.vue';

definePageMeta({
  layout: 'default',
});
</script>
