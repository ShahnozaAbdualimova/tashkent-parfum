<script setup>
import { computed } from "vue";

const props = defineProps({
  background: {
    type: String,
    default: "bg-grey-600",
  },
  textColor: {
    type: String,
    default: "text-blue-500",
  },
  padding: {
    type: String,
    default: "py-2 px-4",
  },
  width: {
    type: String,
    default: "w-32", 
  },
});

const buttonStyle = computed(() => ({
  background: props.background,
  color: props.textColor,
  padding: props.padding,
  width: props.width,
}));
</script>

<template>
  <button
    :style="buttonStyle"
    type="button"
    class="flex justify-center items-center  gap-2 h-10 rounded-md font-rubik cursor-pointer"
  >
    <slot></slot>
  </button>
</template>