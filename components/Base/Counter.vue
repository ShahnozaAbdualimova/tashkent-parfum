<template>
  <div class="flex items-center relative justify-center gap-1">
    <!-- Decrement Button -->
    <button
      class="px-3 py-2.5 ease-in-out active:scale-75 flex items-center justify-center bg-white rounded-l-lg duration-300 border border-white-100 hover:bg-red-950 hover:border-red-500"
      @click="decrement"
    >
      <i class="icon-minus text-[20px] text-red-500"></i>
    </button>

    <!-- Counter Input -->
    <input
      v-model.number="counter"
      type="number"
      class="no-spin text-lg outline-none rounded py-1.5 focus:border-red-500 w-full transition-all duration-300 border border-white hover:border-red-500 font-normal text-center appearance-none active:scale-110"
    />

    <!-- Increment Button -->
    <button
      :class="{
        'bg-gray-400': counter === maxLimit,
        'bg-white-100': counter < maxLimit,
      }"
      class="px-3 py-2.5 ease-in-out active:scale-75 flex items-center justify-center rounded-r-lg duration-300 border border-white hover:bg-green-200/10 hover:border-green-100"
      @click="increment"
    >
      <i
        :class="{
          'text-gray-500': counter === maxLimit,
          'text-green-100': counter < maxLimit,
        }"
        class="icon-plus text-[20px]"
      ></i>
    </button>

    <!-- Max Limit -->
    <div
      v-if="showMaxTooltip"
      class="absolute top-[-10px] -right-9 transform -translate-x-1/2 bg-black-700 text-white px-2 py-1 rounded-md text-xs"
    >
      Max {{ maxLimit }}
    </div>
  </div>
</template>

<script setup>
// Props for Counter component
defineProps({
  initialCount: {
    type: Number,
    default: 1,
  },
  maxLimit: {
    type: Number,
    required: true,
  },
});

// Emits to parent component
const emit = defineEmits(['update:counter', 'visibilityChanged']);

// State
const counter = ref(initialCount);
const showMaxTooltip = ref(false);

// Methods
const increment = () => {
  if (counter.value < maxLimit) {
    counter.value++;
    showMaxTooltip.value = false;
  } else if (counter.value === maxLimit) {
    showMaxTooltip.value = true;
  }
  emit('update:counter', counter.value);
};

const decrement = () => {
  if (counter.value > 1) {
    counter.value--;
    showMaxTooltip.value = false;
    emit('update:counter', counter.value);
  } else {
    emit('visibilityChanged', false); 
    counter.value = 1; 
  }
};
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
