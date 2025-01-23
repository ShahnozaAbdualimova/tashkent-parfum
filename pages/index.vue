<template>
  <div>
    <!-- <HomeHeroSection /> -->
    <HomeRecommendedSection />
    <HomeStoriesSection />
       <CommonProductReviewSlider />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  breadcrumb: [{ name: 'Home', link: '/' }],
});
</script>
