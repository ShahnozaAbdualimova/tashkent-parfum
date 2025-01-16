<template>
  <CommonCSectionWrapper title="Популярные разделы">
    <RouterLink
      to="#"
      class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-y-4 gap-x-6 category-card"
    >
      <div
        class="pt-4 ps-5 pb-4 bg-white rounded-xl flex justify-between w-auto h-auto relative hover:shadow-xl"
        v-for="i of categoryName"
        :key="i"
      >
        <div class="flex flex-col gap-14 w-full">
          <h3 class="text-base md:text-xl">{{ i.category }}</h3>
          <NuxtLink
            to="#"
            class="text-sm flex items-center gap-1 card-link opacity-0 transition-all duration-200 text-red-500"
          >
            Перейти
            <i class="icon-left text-sm"></i>
          </NuxtLink>
        </div>
        <img
          :src="i.img"
          alt="#"
          class="absolute right-0 bottom-0 rounded-br-lg w-24 h-16 md:w-[108px] md:h-24"
        />
      </div>
    </RouterLink>
  </CommonCSectionWrapper>
</template>

<script setup>
import { categoryName } from '~/data/data.js';
</script>

<style scoped>
.category-card :hover .card-link {
  opacity: 100;
}
</style>
