<template>
  <div>
    <!-- <HomeHeroSection /> -->
    <HomeRecommendedSection />
    <HomeStoriesSection />
       <CommonProductReviewSlider />
  </div>
  <Breadcrumb />
</template>

<script>
definePageMeta({
  breadcrumb: [{ name: 'Home', link: '/' }],
});
</script>
