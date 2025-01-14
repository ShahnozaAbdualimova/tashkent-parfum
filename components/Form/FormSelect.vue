<template>
  <div :class="selectContainerClass" class="relative m-1">
    <div
      class="flex items-center justify-between w-full h-10 px-3 bg-white border border-gray-300 rounded-lg outline-none cursor-pointer"
      @click="toggleDropdown"
    >
      <slot name="trigger" :selected="modelValue">
        {{ selectedText }}
      </slot>
      <i
        class="transition-transform duration-300 icon-chevron-down"
        :class="{
          'transform rotate-180 transition-transform duration-300': isOpen,
        }"
      />
    </div>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-full opacity-0"
    >
      <div
        v-if="isOpen"
        class="absolute left-0 z-10 w-full py-2 pl-3 mt-1 bg-white border border-b border-gray-300 rounded-lg verflow-y-auto top-full max-h-60"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  selectedText: {
    type: String,
    default: 'Select an option',
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'outline', 'filled'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue', 'change']);

const isOpen = ref(false);

const selectContainerClass = computed(() => [
  'select-container',
  `variant-${props.variant}`,
  `size-${props.size}`,
  { 'opacity-50 cursor-not-allowed': props.disabled },
]);

const toggleDropdown = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value;
  }
};

const handleClickOutside = (event) => {
  if (!event.target.closest('.select-container')) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
