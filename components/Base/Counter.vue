<template>
  <div class="flex items-center relative justify-center gap-1">
    <button
      class="px-3 py-2.5 flex items-center justify-center bg-white rounded-l-lg duration-300 rounded-r-sm border border-white-100 hover:bg-red-1150/10 hover:border-red-500"
      @click="decrement"
    >
      <i class="icon-minus text-[20px] text-red-500"></i>
    </button>
    <input
      v-model.number="value"
      @input="validateCounter"
      type="number"
      class="no-spin text-lg rounded py-1.5 focus:border-red-500 w-[64px] transition-all duration-300 border border-white hover:border-red-500 font-normal text-center appearance-none outline-none"
    />
    <button
      :class="{
        'bg-gray-400': value === maxLimit,
        'bg-white-100': value < maxLimit,
      }"
      class="px-3 py-2.5 flex items-center justify-center rounded-r-lg duration-300 rounded-l-sm border border-white hover:bg-green-200/10 hover:border-green-100"
      @click="increment"
    >
      <i
        :class="{
          'text-gray-500': value === maxLimit,
          'text-green-100': value < maxLimit,
        }"
        class="icon-plus text-[20px]"
      ></i>
    </button>
    <div
      v-if="showMaxTooltip"
      class="absolute top-[-10px] -right-9 transform -translate-x-1/2 bg-black-700 text-white px-2 py-1 rounded-md text-xs"
    >
      Max {{ maxLimit }}
    </div>
  </div>
</template>

<script setup>

defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  maxLimit: {
    type: Number,
    default: 5,
  },
});

//counter

const value = ref(modelValue); // Sync counter value with parent
const showMaxTooltip = ref(false); // Tooltip for max limit

const increment = () => {
  if (value.value < maxLimit) {
    value.value++;
    hideMaxTooltip();
  } else {
    displayMaxTooltip();
  }
  emitUpdate();
};

const decrement = () => {
  if (value.value > 1) {
    value.value--;
    emitUpdate();
  }
};

const validateCounter = () => {
  if (value.value < 1) {
    value.value = 1;
  } else if (value.value > maxLimit) {
    value.value = maxLimit;
  }
  emitUpdate();
};

const displayMaxTooltip = () => {
  showMaxTooltip.value = true;
  setTimeout(hideMaxTooltip, 500);
};

const hideMaxTooltip = () => {
  showMaxTooltip.value = false;
};

const emitUpdate = () => {
  emit('update:modelValue', value.value);
};

watch(
  () => modelValue,
  (newValue) => {
    value.value = newValue;
  }
);
</script>

<style scoped>
.no-spin::-webkit-inner-spin-button,
.no-spin::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.no-spin {
  -moz-appearance: textfield;
}
</style>
