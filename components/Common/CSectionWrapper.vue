<template>
  <section class="mt-10 container">
    <div class="mx-auto flex justify-between items-center">
      <!-- Title Section -->
      <div>
        <h2 v-if="title" class="text-2xl font-bold text-gray-800">
          {{ title }}
        </h2>
        <slot name="title" v-else>
          <h2 class="text-2xl font-normal Nova text-[#383838]">
           
          </h2>
        </slot>
      </div>
      <!-- Link Section -->
      <div>
        <NuxtLink
          to="#"
          class="text-sm text-[#9E9EA5] flex items-center hover:text-red-500"
        >
          Все разделы
          <i class="icon-left ml-2 mt-1"></i>
        </NuxtLink>
      </div>
    </div>
    <!-- Content Section -->
    <div class="mt-4">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    linkText: {
      type: String,
      default: null,
    },
    linkHref: {
      type: String,
      default: "#",
    },
  },
};
</script>
