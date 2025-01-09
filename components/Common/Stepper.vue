<script setup>
defineProps({
  steps: {
    type: Array,
    required: true,
  },
  activeStep: {
    type: Number,
    required: true,
  },
});

// Mock data for steps
// const steps = reactive([
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
// ]);
</script>

<template>
  <div
    class="bg-white relative -z-20 rounded-[44px] flex items-center justify-between p-4 overflow-hidden gap-5"
  >
    <div
      v-for="step in steps"
      class="relative h-10 w-[210px] rounded-[44px] flex items-center justify-center gap-1"
      :class="[
        activeStep === step.id
          ? 'bg-white-600'
          : activeStep > step.id
            ? 'bg-red-500'
            : 'bg-white-400',
      ]"
    >
      <div
        class="w-[250%] transition-all duration-300 h-0.5 bg-red-500 absolute right-0 -z-10"
        :class="activeStep >= step.id ? 'bg-red-500' : 'bg-white-400'"
      ></div>
      <i
        class="text-2xl"
        :class="[
          step.icon,
          activeStep === step.id
            ? 'text-red-500'
            : activeStep > step.id
              ? 'text-white'
              : 'text-black-500',
        ]"
      ></i>
      <span
        class="font-normal text-base"
        :class="activeStep > step.id ? 'text-white' : 'text-black-500'"
      >
        {{ step.label }}</span
      >
    </div>
  </div>
</template>
