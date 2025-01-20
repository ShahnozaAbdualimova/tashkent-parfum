<template>
  <div class="w-full border-t border-white-400 bg-white max-sm:hidden max-md:hidden">
    <div class="container">
      <div class="flex items-center justify-between h-16 px-2 w-full">
        <div v-for="(link, index) in links" :key="link.title"
          class="relative group overflow-hidden cursor-pointer flex items-center whitespace-nowrap">
          <span
            class="block text-[0.65rem] xxs:text-xs sm:text-sm font-medium text-gray-800 group-hover:translate-y-[-100%] group-hover:text-red-500 transition-transform duration-200">
            {{ link.title }}
          </span>
          <span
            class="absolute inset-0 text-[0.65rem] xxs:text-xs sm:text-sm font-medium text-red-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-200">
            {{ link.title }}
          </span>
          <div v-if="index !== links.length - 1" class="hidden sm:block w-px h-4 bg-gray-300 mx-2 sm:mx-3 md:mx-4">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  <script setup lang="ts">
const { data } = useCategoriesFetcher()

const links = computed(() => data.value?.results || []);
</script>

