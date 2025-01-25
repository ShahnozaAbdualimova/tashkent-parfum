<template>
  <article
    class="mx-auto w-[166px] sm:w-[166px] md:w-[180px] lg:w-[180px] bg-white-400 rounded-xl overflow-hidden cursor-pointer transition-300 border border-white hover:shadow-md"
  >
    <!-- Swiper -->
    <div class="relative">
      <Swiper
        :slides-per-view="1"
        :space-between="10"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        :pagination="{ clickable: true }"
        modules="[Pagination, Autoplay]"
        class="swiper-container"
      >
        <Swiper-Slide
          v-for="(image, index) in product.image"
          :key="index"
          class="swiper-slide bg-white border-2 rounded-t-xl border-white-400"
        >
          <img
            :src="image"
            alt="product image"
            class="w-full object-cover object-center rounded-t-xl h-[150px] sm:h-[180px] md:h-[180px] lg:h-[180px]"
          />
        </Swiper-Slide>
      </Swiper>

      <!-- Discount -->
      <div
        v-if="product.discountTag"
        class="absolute top-3 left-3 border-2 z-10 border-green-200 rotate bg-green-100 text-white text-xs px-4 rounded-xl"
      >
        <i class="icon-sale text-white-100 text-2xl"></i>
      </div>

      <!-- Favorite Button -->
      <button
        @click="toggleFavorite"
        :class="{
          'border-red-500': isFavorite,
        }"
        class="absolute top-3 z-10 right-3 border border-white-400/80 bg-white-400/80 text-black-500 text-xs p-2 hover:border-red-500/20 transition duration-300 w-9 h-9 rounded-md flex justify-center items-center group"
      >
        <i
          :class="{
            'text-red-500 scale': isFavorite,
            'text-black scale': !isFavorite,
          }"
          class="icon-heart text-base transition-all duration-200"
        ></i>
      </button>
    </div>

    <!-- Product Info -->
    <div class="px-4 pb-4 gap-1">
      <!-- Product Name -->
      <h3 class="text-red-500 text-xs truncate sm:text-sm md:text-base">
        {{ product.name }}
      </h3>
      <p class="text-black-500 text-sm sm:text-xs md:text-sm">
        {{ product.brand }}
      </p>

      <!-- Price -->
      <div class="flex flex-col mt-1">
        <span
          class="text-red-500 line-through font-medium text-sm sm:text-xs md:text-sm"
        >
          {{ product.oldPrice }} UZS
        </span>
        <span class="text-black-500 font-bold text-base sm:text-xs md:text-sm">
          {{ product.price }} UZS
        </span>
      </div>

      <!-- Rating -->
      <div class="mt-2 flex items-center gap-1">
        <span v-for="n in 5" :key="n" class="text-yellow-100 text-sm">
          <i v-if="n <= product.rating" class="icon-star"></i>
          <i v-else class="icon-star text-gray-300"></i>
        </span>
        <span class="ml-1 text-gray-500 text-sm">({{ product.rating }})</span>
      </div>

      <!-- Counter -->
      <div v-if="isCounterVisible">
        <div class="flex items-center relative justify-center mt-2 gap-1">
          <button
            class="px-3 py-2.5 ease-in-out active:scale-75 flex items-center justify-center bg-white rounded-l-lg duration-300 border border-white-100 hover:bg-red-950 hover:border-red-500"
            @click="decrement"
          >
            <i  class="icon-minus text-[20px] text-red-500"></i>
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
  </article>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


// Props
defineProps({
  product: {
    type: Object,
    required: true,
  },
});

// States
const isFavorite = ref(false);
const isCounterVisible = ref(false);
const counter = ref(1); // Start with 1
const maxLimit = 5; // Max counter value
const showMaxTooltip = ref(false);

// Methods
const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};

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
.rotate {
  transform: rotate(-11deg);
}

.no-spin::-webkit-inner-spin-button,
.no-spin::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.no-spin {
  -moz-appearance: textfield;
}
</style>
