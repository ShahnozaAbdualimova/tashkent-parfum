<template>
  <div class="flex flex-col gap-4">
    <!-- Первая строка -->
    <div class="relative overflow-hidden group">
     <NuxtLink to="#" class="flex animate-marquee-rtl gap-4 pause-animation transition-all duration-300 cursor-pointer">
        
          <img
          v-for="(item, index) in brandList.concat(brandList)" 
          :key="'row1-' + index"
          :src="item.logo"
          :alt="item.name"
          class="px-4 py-4 rounded-2xl bg-white-500 w-[200px]"
        />
      </NuxtLink>
    </div>

    <!-- Вторая строка -->
    <div class="relative overflow-hidden group">
      <NuxtLink to="#" class="flex animate-marquee-ltr gap-4 pause-animation transition-all duration-300 cursor-pointer">
        <img
          v-for="(item, index) in brandList.concat(brandList)"
          :key="'row2-' + index"
          :src="item.logo"
          :alt="item.name"
          class="px-4 py-4 rounded-2xl bg-white-500 w-[200px]"
        />
      </NuxtLink>
    </div>

    <!-- Третья строка -->
    <div class="relative overflow-hidden group">
      <NuxtLink to="#" class="flex animate-marquee-rtl gap-4 pause-animation transition-all duration-300 cursor-pointer">
        <img
          v-for="(item, index) in brandList.concat(brandList)"
          :key="'row3-' + index"
          :src="item.logo"
          :alt="item.name"
          class="px-4 py-4 rounded-2xl bg-white-500 w-[200px]"
        />
      </NuxtLink>
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