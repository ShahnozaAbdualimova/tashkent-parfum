<template>
  <div class="w-full border-t border-white-400 bg-white">
    <div class="container">
      <div class="flex items-center justify-between h-16 px-8">
        <div v-for="(link, index) in links" :key="link.title"
          class="relative group overflow-hidden cursor-pointer flex items-center whitespace-nowrap mx-1 sm:mx-2">
          <span
            class="block text-sm font-medium text-gray-800 group-hover:translate-y-[-100%] group-hover:text-red-500 transition-transform duration-200">
            {{ link.title }}
          </span>
          <span
            class="absolute inset-0 text-sm font-medium text-red-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-200">
            {{ link.title }}
          </span>
          <div v-if="index !== links.length - 1" class="hidden sm:block w-px h-4 bg-gray-300 ml-6"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = useCategoriesFetcher()

const links = computed(() => data.value?.results || []);

</script>

