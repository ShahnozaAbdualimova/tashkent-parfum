<template>
  <button
    :class="computedClass"
    :type="type"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from "vue";

// Define props
const props = defineProps({
  type: {
    type: String,
    default: "button",
  },
  variant: {
    type: String,
    default: "primary",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

const computedClass = computed(() => [
  "px-4 py-2 rounded text-sm font-medium transition-all duration-300",
  {
    primary: "bg-blue-500 text-white-default hover:bg-blue-600",
    secondary: "bg-gray-500 text-white-default hover:bg-gray-600",
    success: "bg-green-500 text-white-default hover:bg-green-600",
    danger: "bg-red-500 text-white-default hover:bg-red-600",
  }[props.variant],
  props.disabled
    ? "bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300"
    : "",
]);

const handleClick = (event) => {
  if (!props.disabled) {
    emit("click", event);
  }
};
</script>
