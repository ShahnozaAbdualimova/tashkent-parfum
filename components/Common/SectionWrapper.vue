<template>
  <section class="mt-10 container">
    <div class="mx-auto flex justify-between items-center">
      <!-- Title Section -->
      <div>
        <h2 v-if="title" class="text-2xl font-bold text-black-500">
          {{ title }}
        </h2>
        <slot name="title" v-else>
          <h2 class="text-3xl font-normal Nova text-black-500">
           
          </h2>
        </slot>
      </div>
      <!-- Link Section -->
      <div>
        <NuxtLink
          to="#"
          class="text-gray-100  text-base flex items-center hover:text-red-500 duration-300 ease-in-out"
        >
          Все разделы
          <i class="icon-left ml-2"></i>
        </NuxtLink>
      </div>
    </div>
    <!-- Content Section -->
    <div class="mt-4" :class="bodyClass">
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
    bodyClass: {
      type: String,
      default: '',
    },
  },
};
</script>