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
import { computed } from "vue"

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


const computedClass = computed(() => {
  const baseClass =
  "px-4 py-2 rounded text-sm font-medium transition-all duration-300 flex items-center";
  
  const variantClass = {
    headeBtn: "",
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "font-proxima rounded-md transform transition-transform active:scale-95 bg-white-400 duration-300 px-4 py-2.5 font-normal text-sm text-black",
    secondaryGray: "bg-white-500 text-white-default font-proxima rounded-md duration-300 px-4 py-2.5 font-normal text-sm",
    headerBtn: "",
    lightDanger: "font-proxima rounded-md transform transition-transform active:scale-95 bg-red-950 duration-300 px-4 py-2.5 font-normal text-sm text-red-500",
    danger:
      "font-proxima rounded-md transform transition-transform active:scale-95 bg-red-500 hover:shadow-[0_0_10px_1px_rgba(246,37,89,0.5)] duration-300 px-4 py-2.5 font-normal text-sm text-white-default",
      light: "font-proxima px-4 py-3 bg-transparent rounded-lg font-normal text-base text-white-default duration-300 hover:bg-white-default hover:text-black-300 group border border-white-default"
  }[props.variant];

  // const disabledClass = props.disabled
  //   ? "bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300"
  //   : "";

  return [baseClass, variantClass,].join(" ");
});

const emit = defineEmits(["click"]);

const handleClick = (event) => {
  if (!props.disabled) {
    emit("click", event);
  }
};
</script>
