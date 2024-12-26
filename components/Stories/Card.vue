<template>
  <div
    class="w-[134px] h-[182px] p-2 flex items-center justify-center border-[1.6px] bg-red-100 bg-opacity-20 rounded-xl cursor-pointer group"
    :class="borderColor"
  >
    <img
      :src="story?.image_src?.default"
      alt="stories img"
      class="transition-transform ease-in-out duration-200 w-full h-full object-cover group-hover:scale-95 rounded-lg"
    />
  </div>
</template>

<script setup>
defineProps({
  story: {
    type: Object,
    required: true,
  },
  borderColor: {
    type: String,
    default: 'border-red-500',
  },
});
</script>
