<template>
  <div class="relative font-sans w-[363px] text-gray-100">
    <div
      class="flex items-center justify-between px-4 py-2 border-none rounded-lg cursor-pointer border-gray-5x00"
      :class="[
        backgroundColor === 'gray' ? 'bg-white-400' : 'bg-white text-black',
      ]"
      @click="toggleDropdown"
    >
      <span>{{ selectedOption || placeholder }}</span>
      <i
        :class="[
          'icon-chevron-down',
          dropdownOpen ? 'rotate-180' : '',
          'transition-transform duration-300 ease-in-out',
        ]"
      ></i>
    </div>

    <transition name="slide-fade">
      <ul
        v-show="dropdownOpen"
        class="absolute left-0 right-0 z-10 mt-1 overflow-x-hidden overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg top-full max-h-40"
      >
        <li
          v-for="(option, index) in options"
          :key="index"
          @click="selectOption(option)"
          :class="[
            '!w-full px-4 py-2 cursor-pointer border-b border-gray-400',
            option === selectedOption
              ? 'text-black'
              : 'hover:bg-white-400 transform transition-all duration-300',
          ]"
        >
          {{ option }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  placeholder: {
    type: String,
    default: 'Select an option',
  },
  backgroundColor: {
    type: String,
    default: 'white',
  },
});

const emit = defineEmits(['update:modelValue']);

const dropdownOpen = ref(false);
const selectedOption = ref(null);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  emit('update:modelValue', option);
  dropdownOpen.value = false;
};
</script>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  transform-origin: top;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  transform: translateY(0);
  opacity: 1;
}

ul {
  overflow-y: scroll;
}

ul::-webkit-scrollbar {
  width: 0px;
}

ul::-webkit-scrollbar-thumb {
  background-color: #a0aec0;
  border-radius: 0.25rem;
}

ul::-webkit-scrollbar-track {
  background-color: #edf2f7;
}

ul::-webkit-scrollbar-button {
  display: none !important;
}
</style>
