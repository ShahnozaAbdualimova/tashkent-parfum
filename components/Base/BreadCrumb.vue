<template>
  <nav aria-label="Breadcrumb">
    <ol class="flex items-center space-x-2 text-sm text-gray-500">
      <li>
        <router-link to="/" class="hover:text-gray-700">Home</router-link>
      </li>
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <span class="mx-2">/</span>
        <router-link
          :to="crumb.path"
          :class="{
            'text-gray-900 font-medium': index === breadcrumbs.length - 1,
          }"
        >
          {{ crumb.name }}
        </router-link>
      </li>
    </ol>
  </nav>
</template>
<script setup>
const route = useRoute();

const breadcrumbs = computed(() => {
  const path = route.path;
  if (path === '/') return [];
  return path
    .split('/')
    .filter(Boolean)
    .map((crumb, index, array) => {
      return {
        name: crumb.charAt(0).toUpperCase() + crumb.slice(1),
        path: '/' + array.slice(0, index + 1).join('/'),
      };
    });
});
</script>
