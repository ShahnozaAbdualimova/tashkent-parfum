<template>
  <label
    class="inline-flex items-center cursor-pointer select-none w-full border-b py-2.5"
    :class="{ 'opacity-50': disabled }"
  >
    <div class="relative">
      <input
        type="checkbox"
        :checked="modelValue"
        :disabled="disabled"
        class="sr-only peer"
        @change="$emit('update:modelValue', $event.target.checked)"
      />
      <div
        class="w-5 h-5 flex items-center justify-center rounded transition-all duration-200"
        :class="[
          modelValue ? 'bg-red-500 border-2 border-transparent' : ' border-2',
        ]"
      >
        <svg
          class="w-4 h-4 stroke-white"
          :class="{ 'opacity-0': !modelValue }"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
    </div>
    <h4
      v-if="$slots.default"
      class="ml-2 text-sm font-normal text-black-500 cursor-pointer w-full"
    >
      <slot></slot>
    </h4>
    <i
      v-if="submenu"
      class="icon-chevron-down flex items-center justify-center w-5 h-5 transition-transform duration-200 text-gray-500"
    ></i>
  </label>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  submenu: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['update:modelValue']);
</script>
