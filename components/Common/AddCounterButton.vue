<template>
    <div>
<!-- Counter -->
<div v-if="isCounterVisible">
        <div class="flex items-center relative justify-center mt-2 gap-1">
          <button
            class="px-3 py-2.5 ease-in-out active:scale-90 flex items-center justify-center bg-white rounded-l-lg duration-300 border border-white-100 hover:bg-red-950 hover:border-red-500"
            @click="decrement"
          >
            <i class="icon-minus text-[20px] text-red-500"></i>
          </button>
          <input
            v-model.number="counter"
            type="number"
            class="no-spin text-lg outline-none rounded py-1.5 focus:border-red-500 w-full transition-all duration-300 border border-white hover:border-red-500 font-normal text-center appearance-none out active:scale-110line-none"
          />
          <button
            :class="{
              'bg-gray-400': counter === maxLimit,
              'bg-white-100': counter < maxLimit,
            }"
            class="px-3 py-2.5 ease-in-out active:scale-90 flex items-center justify-center rounded-r-lg duration-300 border border-white hover:bg-green-200/10 hover:border-green-100"
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
          <!-- Tooltip for max limit -->
          <div
            v-if="showMaxTooltip"
            class="absolute top-[-10px] -right-9 transform -translate-x-1/2 bg-black-700 text-white px-2 py-1 rounded-md text-xs"
          >
            Max {{ maxLimit }}
          </div>
        </div>
      </div>

      <!-- BaseButton -->
      <div v-else class="flex group justify-center mt-2">
        <BaseButton
          :variant="'basketBtn'"
          :type="'button'"
          :icon="'icon-basket'"
          :icon-position="'left'"
          @click="basketProduct"
          class=""
        >
          В корзину
        </BaseButton>
      </div>
    </div>
</template>

<script setup>
const isCounterVisible = ref(false);
const counter = ref(1); // Start with 1
const maxLimit = 5; // Max counter value
const showMaxTooltip = ref(false);



const basketProduct = () => {
  isCounterVisible.value = true;
};


const increment = () => {
  if (counter.value < maxLimit) {
    counter.value++;
    showMaxTooltip.value = false; // Hide tooltip when increment is below max
  } else if (counter.value === maxLimit) {
    showMaxTooltip.value = true; // Show tooltip only when max limit is reached
  }
};

const decrement = () => {
  if (counter.value > 1) {
    counter.value--;
    showMaxTooltip.value = false; // Hide tooltip when decrementing below max
  } else {
    isCounterVisible.value = false; // Hide counter and show "Add to cart" button
    counter.value = 1; // Reset counter to minimum
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