<template>
  <section>
    <div class="container mx-auto flex justify-between items-center">
      <!-- Title Section -->
      <div>
        <h2 v-if="title" class="text-2xl font-bold text-gray-800">
          {{ title }}
        </h2>
        <slot name="title" v-else>
          <h2 class="text-2xl font-normal font-ProximaNova text-[#383838]">
            Default Title
          </h2>
        </slot>
      </div>
      <!-- Link Section -->
      <div>
        <slot name="link">
          <NuxtLink :to="linkHref" class="text-sm text-[#9E9EA5] hover:text-gray-800 flex items-center">
            {{ linkText }}
            <i class="icon-left ml-2 text-[#9E9EA5] group-hover:text-gray-800"></i>
          </NuxtLink>
        </slot>
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
      default: '#',
    },
  },
};
</script>
