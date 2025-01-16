<template>
  <div
    class="mx-auto  w-[166px] sm:w-[166px] md:w-[180px] lg:w-[180px] bg-white-400 rounded-xl overflow-hidden cursor-pointer transition-300 border border-white  hover:shadow-md"
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
            class="w-full object-cover object-center rounded-t-xl h-[150px] sm:h-[180px] md:h-[180px] lg:h-[180px]"
          />
        </swiper-slide>
      </swiper>

      <!-- discount -->
      <div
        v-if="product.discountTag"
        class="absolute top-3 left-3 border-2 border-green-200 rotate bg-green-100 text-white text-xs px-4 rounded-xl"
      >
        <i class="icon-sale text-white-100 text-2xl"></i>
      </div>
      <button
        @click="toggleFavorite"
        :class="[{
          'border-red-500': isFavorite
        }]"
        class="absolute top-3 right-3 border border-white-400/80 bg-white-400/80 text-black-500 text-xs p-2 hover:border-red-500/20 transition duration-300 w-9 h-9 rounded-md flex justify-center items-center group"
      >
        <i
          :class="[{
            'text-red-500 scale': isFavorite,
            'text-black scale': !isFavorite
          }]"
          class="icon-heart text-base transition-all duration-200"
        ></i>
      </button>
    </div>

    <div class="p-4 gap-1">
      <!-- product name -->
      <h3 class="text-red-500 text-xs truncate  sm:text-sm md:text-base">
        {{ product.name }}
      </h3>
      <p class="text-black-500 text-sm sm:text-xs md:text-sm ">
        {{ product.brand }}
      </p>
      <!-- price -->
      <div class="flex flex-col mt-1">
        <span
          class="text-red-500 line-through font-medium text-sm sm:text-xs md:text-sm"
        >
          {{ product.oldPrice }} UZS
        </span>
        <span class="text-black-500 font-bold text-base sm:text-xs md:text-sm ">
          {{ product.price }} UZS
        </span>
      </div>
      <!-- rating -->
      <div class="mt-2 flex items-center gap-1">
        <span v-for="n in 5" :key="n" class="text-yellow-100 text-sm">
          <i v-if="n <= product.rating" class="icon-star"></i>
          <i v-else class="icon-star text-gray-300"></i>
        </span>
        <span class="ml-1 text-gray-500 text-sm">({{ product.rating }})</span>
      </div>
      <!-- counter -->
      <div v-if="isCounterVisible">
        <BaseCounter v-model="counter" :maxLimit="maxLimit" />
      </div>
      <div v-else class="flex group justify-center mt-2">
        <BaseButton
          :variant="'basketBtn'"
          class=""
          :type="'button'"
          :disabled="false"
          :icon="'icon-basket'"
          :icon-position="'left'"
          @click="basketProduct"
        >
          В корзину
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { products } from '~/data/mainProductSection';

// import { Swiper, SwiperSlide } from 'swiper/vue';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// Props
defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const isFavorite = ref(false); // For tracking the favorite state
const isCounterVisible = ref(false); // Display counter visibility
const counter = ref(1); // Current counter value
const maxLimit = 5; // Maximum value for the counter
const showMaxTooltip = ref(false); // Display the "Max" tooltip

// Methods
const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value; // Toggle favorite state
};
// Bascket
const basketProduct = () => {
  isCounterVisible.value = true;
};

const increment = () => {
  if (counter.value < maxLimit) {
    counter.value++;
    hideMaxTooltip();
  } else {
    displayMaxTooltip();
  }
};

const decrement = () => {
  if (counter.value > 1) {
    counter.value--;
  } else {
    isCounterVisible.value = false; // Hide the counter when decreasing to 1
  }
};

const validateCounter = () => {
  if (counter.value < 1) {
    counter.value = 1; // Minimum value
  } else if (counter.value > maxLimit) {
    counter.value = maxLimit; // Maximum value
  }
};

const displayMaxTooltip = () => {
  showMaxTooltip.value = true;
  setTimeout(hideMaxTooltip, 500);
};

const hideMaxTooltip = () => {
  showMaxTooltip.value = false;
};
</script>

<style scoped>
.rotate {
  transform: rotate(-11deg);
}

/* no spin */
.no-spin::-webkit-inner-spin-button,
.no-spin::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.no-spin {
  -moz-appearance: textfield;
}
</style>
