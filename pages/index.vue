<template>
  <div>
    <HomeHeroSection />
    <HomeRecommendedSection />
    <HomeStoriesSection />
    <CommonProductReviewSlider/>
  </div>
</template>
<script>
definePageMeta({
  breadcrumb: [{ name: 'Home', link: '/' }],
});
</script>