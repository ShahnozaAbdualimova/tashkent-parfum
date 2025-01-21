<script setup>
import { computed } from 'vue';

const props = defineProps({
  steps: {
    type: Array,
    required: true,
  },
  activeStep: {
    type: Number,
    default: 1,
  },
});

const getStepStyle = computed(
  () => (step) =>
    props.activeStep === step.id
      ? 'bg-white-600'
      : props.activeStep > step.id
        ? 'bg-red-500'
        : 'bg-white-400'
);

const getIconStyle = computed(
  () => (step) =>
    props.activeStep === step.id
      ? 'text-red-500'
      : props.activeStep > step.id
        ? 'text-white'
        : 'text-black-500'
);

const getLabelStyle = computed(
  () => (step) => (props.activeStep > step.id ? 'text-white' : 'text-black-500')
);

const isLabelVisible = computed(
  () => (step) => props.activeStep === step.id || 'hidden sm:block'
);

// [
//   {
//     id: 1,
//     label: 'Адрес доставки',
//     icon: 'icon-location',
//   },
//   {
//     id: 2,
//     label: 'Контактные данные',
//     icon: 'icon-contact',
//   },
//   {
//     id: 3,
//     label: 'Оплата',
//     icon: ' icon-wallet',
//   },
// ];
</script>

<template>
  <div
    class="bg-white relative -z-20 rounded-[44px] flex items-center justify-between p-4 overflow-hidden gap-5"
  >
    <div
      v-for="step in steps"
      :key="step.id"
      class="relative h-10 sm:w-[210px] rounded-[44px] flex items-center justify-center gap-1 px-2"
      :class="getStepStyle(step)"
    >
      <div
        class="w-[250%] transition-all duration-300 h-0.5 absolute right-0 -z-10"
        :class="activeStep >= step.id ? 'bg-red-500' : 'bg-white-400'"
      ></div>
      <i class="text-2xl" :class="[step.icon, getIconStyle(step)]"></i>
      <span
        class="font-normal"
        :class="[getLabelStyle(step), isLabelVisible(step)]"
      >
        {{ step.label }}
      </span>
    </div>
  </div>
</template>
