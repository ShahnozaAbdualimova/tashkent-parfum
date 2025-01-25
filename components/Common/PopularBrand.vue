<template>
  <div class="flex flex-col gap-4">
    <div class="relative overflow-hidden group">
      <div
        class="flex gap-4 pause-animation transition-all duration-300 cursor-pointer object-cover"
        :class="animation"
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
  animation: {
    type: String,
    default: 'animate-marquee-rtl',
  },
});
</script>
<style scoped>
.pause-animation:hover {
  animation-play-state: paused;
}
</style>
