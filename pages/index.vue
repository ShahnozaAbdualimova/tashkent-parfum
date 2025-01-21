<template>
  <div>
    <HomeHeroSection />
    <HomeRecommendedSection />
    <ClientOnly>
      <HomeStoriesSection />
    </ClientOnly>
    <!--    <CommonProductReviewSlider />-->
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  breadcrumb: [{ name: 'Home', link: '/' }],
});
</script>
