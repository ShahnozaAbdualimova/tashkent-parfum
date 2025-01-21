<template>
  <nav aria-label="Breadcrumb">
    <ol class="flex items-center space-x-2 text-sm text-gray-500">
      <li>
        <NuxtLink
          to="/"
          class="text-sm text-[#6F6F6F] hover:text-gray-400 duration-500"
          >Home</NuxtLink
        >
      </li>
      <div v-if="crumb != 'Home'">
        <img src="/images/circle.svg" alt="" />
      </div>
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <span
          :class="[
            {
              'text-white-500 leading-[130%]': index === breadcrumbs.length - 1,
            },
            'cursor-default ',
          ]"
        >
          {{ crumb.name }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const breadcrumbs = computed(() => {
  const path = route.path;
  if (path === '/') return [];

  return path
    .split('/')
    .filter(Boolean)

    .map((element, index, array) => {
      return {
        name: element.charAt(0).toUpperCase() + element.slice(1),
        path: '/' + array.slice(0, index + 1).join('/'),
      };
    });
});
</script>
