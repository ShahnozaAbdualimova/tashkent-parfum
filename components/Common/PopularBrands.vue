<template>
  <div class="flex flex-col gap-4">
    <!-- TODO:jaxangir Create component for brands row -->
    <!-- First line -->
    <div class="relative overflow-hidden group">
      <div
        class="flex animate-marquee-rtl gap-4 pause-animation transition-all duration-300 cursor-pointer object-cover"
      >
        <NuxtLink
          v-for="(item, index) in brandList.concat(brandList)"
          :key="'row1-' + index"
          to="#"
          class=""
        >
          <img
            :src="item.logo"
            :alt="item.name"
            class="min-w-[220px] sm:min-w-[234px] h-[106px] sm:h-[112px] p-2 xl:p-3 sm:p-2 rounded-2xl bg-white-500 grayscale hover:grayscale-0 transition-all duration-300 object-center"
          />
        </NuxtLink>
      </div>
    </div>

    <!-- Second line -->
    <div class="relative overflow-hidden group">
      <div
        class="flex animate-marquee-ltr gap-4 pause-animation transition-all duration-300 cursor-pointer object-cover"
      >
        <NuxtLink
          to="#"
          v-for="(item, index) in brandList.concat(brandList)"
          :key="'row2-' + index"
          class=""
        >
          <img
            :src="item.logo"
            :alt="item.name"
            class="min-w-[220px] sm:min-w-[234px] h-[106px] sm:h-[112px] p-2 xl:p-3 sm:p-2 rounded-2xl bg-white-500 grayscale hover:grayscale-0 transition-all duration-300 object-center"
          />
        </NuxtLink>
      </div>
    </div>

    <!-- Third line -->
    <div class="relative overflow-hidden group">
      <div
        class="flex animate-marquee-rtl pause-animation gap-4 transition-all duration-300 cursor-pointer object-cover"
      >
        <NuxtLink
          v-for="(item, index) in brandList.concat(brandList)"
          :key="'row1-' + index"
          to="#"
          class=""
        >
          <img
            :src="item.logo"
            :alt="item.name"
            class="min-w-[220px] sm:min-w-[234px] h-[106px] sm:h-[112px] p-2 xl:p-3 sm:p-2 rounded-2xl bg-white-500 grayscale hover:grayscale-0 transition-all duration-300 object-center"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  brandList: {
    type: Array,
    required: true,
  },
});
</script>
<style scoped>
.pause-animation:hover {
  animation-play-state: paused;
}
</style>
