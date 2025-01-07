<template>
  <div class="relative mt-2">
    <div
      class="flex justify-between border rounded-md border-grey-100 bg-grey-600 py-2.5 pl-3 pr-2.5 cursor-pointer select-none"
      @click="isOpen = !isOpen"
    >
      <span class="text-base font-normal text-dark-100">{{
        selectedOptionText
      }}</span>
      <i class="icon-chevron-small text-grey-200 text-[10px]"></i>
    </div>
    <Transition name="dropdown">
      <ul
        v-if="isOpen"
        class="absolute top-[calc(100%+4px) border border-grey-100 rounded-md bg-white w-full z-10"
      >
        <li
          v-for="(option, index) of options"
          :key="index"
          class="px-4 py-3 border-b border-grey-100 last-border-none cursor-pointer select-none text-dark-200"
          @click="onSelect(option)"
        >
          {{ option[props.labelKey] }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  labelKey: {
    type: String,
    default: 'name',
  },
  valueKey: {
    type: String,
    default: 'id',
  },
});

const selectedOption = ref();
const selectedOptionText = ref('');

const onSelect = (option) => {
  console.log(option);
  isOpen.value = false;
  selectedOption.value = option;
  selectedOptionText.value = option[props.labelKey];
};
</script>

<style scoped>
.dropdown-enter-active .dropdown-leave-active {
  transition: all 0.2s ease-in-out;
}
.dropdown-enter-from .dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
