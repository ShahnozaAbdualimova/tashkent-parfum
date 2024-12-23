<template>
  <div
    class="col-span-1 w-full sm:w-[180px] bg-white-400 shadow-lg rounded-xl overflow-hidden cursor-pointer transition-300 border border-white-400  hover:border-gray-500"
  >
    <div class="relative">
      <!-- Swiper -->
      <swiper
        :slidesPerView="1"
        spaceBetween="10"
        loop="true"
        autoplay="true"
        pagination="true"
        navigation="true"
        class="swiper-container"
      >
        <swiper-slide v-for="(images, index) in product.image" :key="index">
          <img
            :src="images"
            alt="product image"
            class="w-full object-cover object-center"
          />
        </swiper-slide>
      </swiper>

      <!-- скидка -->
      <div
        v-if="product.discountTag"
        class="absolute top-3 left-3 border-2 border-green-200 rotate bg-green-100 text-white text-xs px-4 rounded-xl"
      >
        <i class="icon-sale text-white-100 text-2xl"></i>
      </div>
    </div>

    <div class="p-4 gap-1">
      <!-- название товара -->
      <h3 class="text-red-500 text-xs font-normal truncate font-proxima">
        {{ product.name }}
      </h3>
      <p class="text-black-500 font-normal text-sm font-proxima">
        {{ product.brand }}
      </p>
      <!-- цена -->
      <div class="flex flex-col mt-1">
        <span
          class="text-red-500 line-through text-sm font-normal font-proxima"
        >
          {{ product.oldPrice }} UZS
        </span>
        <span class="text-black-500 font-normal text-base font-proxima">
          {{ product.price }} UZS
        </span>
      </div>
      <!-- рейтинг -->
      <div class="mt-2 flex items-center gap-1">
        <span v-for="n in 5" :key="n" class="text-yellow-100 text-sm">
          <i v-if="n <= product.rating" class="icon-star"></i>
          <i v-else class="icon-star text-gray-300"></i>
        </span>
        <span class="ml-1 text-gray-500 text-sm">({{ product.rating }})</span>
      </div>
      <!-- сouter -->
      <div
        v-if="isCounterVisible"
        class="flex items-center relative justify-center mt-2 gap-1"
      >
        <button
          class="px-3 py-2.5 flex items-center justify-center bg-white-default rounded-l-lg duration-300 rounded-r-sm border border-white-100 hover:bg-red-500/10 hover:border-red-500"
          @click="decrement"
        >
          <i class="icon-minus text-[20px] text-red-500"></i>
        </button>
        <!-- <span
          class="text-lg rounded px-6 py-1.5 text-black-500 bg-white-100 font-normal"
        >
          {{ counter }}
        </span> -->
        <input
          v-model.number="counter"
          @input="validateCounter"
          type="number"
          class="no-spin text-lg rounded py-1.5 focus:border-red-500 w-[64px] transition-all duration-300 border border-white-default hover:border-red-500 border font-normal text-center appearance-none outline-none"
        />

        <button
          :class="{
            'bg-gray-400': counter === maxLimit,
            'bg-white-100': counter < maxLimit,
          }"
          class="px-3 py-2.5 flex items-center justify-center rounded-r-lg duration-300 rounded-l-sm border border-white-default hover:bg-green-100/10 hover:border-green-100"
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
        <div
          v-if="showMaxTooltip"
          class="absolute top-[-10px] -right-5 transform -translate-x-1/2 bg-black-700 text-white-default px-2 py-1 rounded-md text-xs"
        >
          Max
        </div>
      </div>
      <div v-else class="flex justify-center mt-2">
        <BaseButton
          variant="danger"
          class="text-white-100"
          @click="showCounter"
        >
          <i
            class="icon-basket text-[24px] items-center flex text-white-100 duration-300 group-hover:text-white-100"
          ></i>
          В корзину
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// Props for the product data
defineProps({
  product: {
    type: Object,
    required: true,
  },
});

// Reactive state variables
const isCounterVisible = ref(false); // Display counter visibility
const counter = ref(1); // Current counter value
const maxLimit = 5; // Maximum value for the counter
const showMaxTooltip = ref(false); // Display the "Max" tooltip

// Show the counter
const showCounter = () => {
  isCounterVisible.value = true;
};

// Increment the counter value
const increment = () => {
  if (counter.value < maxLimit) {
    counter.value++;
    hideMaxTooltip(); // Hide the "Max" tooltip if it was displayed
  } else {
    displayMaxTooltip(); // Show the "Max" tooltip
  }
};

// Decrement the counter value
const decrement = () => {
  if (counter.value > 1) {
    counter.value--;
  } else {
    isCounterVisible.value = false; // Hide the counter when decreasing to 1
  }
};

const validateCounter = () => {
  if (counter.value < 1) {
    counter.value = 1; // Минимальное значение
  } else if (counter.value > maxLimit) {
    counter.value = maxLimit; // Максимальное значение
  }
};

// Show the "Max" tooltip
const displayMaxTooltip = () => {
  showMaxTooltip.value = true;
  setTimeout(hideMaxTooltip, 500); // Hide the tooltip after 1.5 seconds
};

// Hide the "Max" tooltip
const hideMaxTooltip = () => {
  showMaxTooltip.value = false;
};
</script>

<style scoped>
.rotate {
  transform: rotate(-11deg);
}

/* Убираем стрелки */
.no-spin::-webkit-inner-spin-button,
.no-spin::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* no spin */
.no-spin {
  -moz-appearance: textfield;
}
</style>
