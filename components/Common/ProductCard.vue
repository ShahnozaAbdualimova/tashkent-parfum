<template>
  <article
    class="mx-auto w-[166px] sm:w-[166px] md:w-[180px] lg:w-[180px] bg-white-400 rounded-xl overflow-hidden cursor-pointer transition-300 border border-white hover:shadow-md"
  >
    <!-- TODO:
  1. Destructure component
  2. Move to Product folder
  3. Fix swiper -
  4. Fix counter 
  5. Fix terminal warnings
  -->
    <div class="relative">
      <!-- Swiper -->
      <Swiper
        :slides-per-view="1"
        :space-between="10"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        :pagination="{ clickable: true }"
        class="swiper-container"
      >
        <Swiper-Slide
          v-for="(image, index) in product.image"
          :key="index"
          class="swiper-slide bg-white border-2 rounded-t-xl   border-white-400 "
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
        :class="[
          {
            'border-red-500': isFavorite,
          },
        ]"
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
        <BaseCounter v-model="counter" :maxLimit="maxLimit" />
      </div>
      <div v-else class="flex group justify-center mt-2">
        <BaseButton
          :variant="'basketBtn'"
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
  </article>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// // Import your data or props
// import { products } from '~/data/mainProductSection';

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
const counter = ref(1);
const maxLimit = 5;

// Methods
const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};

const basketProduct = () => {
  isCounterVisible.value = true;
};
</script>

<style scoped>
.rotate {
  transform: rotate(-11deg);
}

</style>
