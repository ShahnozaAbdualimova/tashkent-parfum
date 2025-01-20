<template>
  <div>
    <CommonBreadcrumbs/>
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