<template>
  <div class="w-full h-[500px] mx-7 overflow-hidden relative slider-container">
    <swiper :modules="[Autoplay]" :slides-per-view="1.5" :space-between="20" :centeredSlides="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }" :loop="true" :looped-slides="slides.length"
      class="relative">
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="relative overflow-hidden rounded-lg transition-transform duration-500 w-auto h-439 mx-2"
          :class="{ 'scale-105': index === activeSlide }">
          <img :src="slide.image" alt="slide image" class="w-full h-full rounded-lg object-cover" />
          <div v-if="index !== activeSlide"
            class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/50 to-transparent"></div>
          <!-- Matn qismi -->
          <div class="absolute bottom-12 left-5 text-white">
            <h2 class="text-xl font-bold text-white">{{ slide.title }}</h2>
            <p class="text-sm">{{ slide.description }}</p>
            <button class="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Batafsil
            </button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      Autoplay,
    };
  },
  data() {
    return {
      slides: [
        {
          image: '/images/MainSlider-1.png',
          title: 'Kollektsiya',
          description: 'Eng yaxshi brendlar: Dior, Armani, Carolina Herrera',
        },
        {
          image: '/images/MainSlider-3.png',
          title: 'Yangi Mahsulotlar',
          description: 'Moda va zamonaviy parfyumeriya kollektsiyasi',
        },
        {
          image: '/images/MainSlider-1.png',
          title: 'Kollektsiya',
          description: 'Eng yaxshi brendlar: Dior, Armani, Carolina Herrera',
        },
        {
          image: '/images/MainSlider-3.png',
          title: 'Yangi Mahsulotlar',
          description: 'Moda va zamonaviy parfyumeriya kollektsiyasi',
        },
        {
          image: '/images/MainSlider-1.png',
          title: 'Kollektsiya',
          description: 'Eng yaxshi brendlar: Dior, Armani, Carolina Herrera',
        },
        {
          image: '/images/MainSlider-3.png',
          title: 'Yangi Mahsulotlar',
          description: 'Moda va zamonaviy parfyumeriya kollektsiyasi',
        },
      ],
      activeSlide: 1,
    };
  },
};
</script>

<style scoped>
.scale-105 {
  transform: scale(1.05);
}

.slider-container::before,
.slider-container::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  z-index: 10;
  pointer-events: none;
}

.slider-container::before {
  left: 0;
  background: linear-gradient(to right, #f7f8fa, transparent);
}

.slider-container::after {
  right: 0;
  background: linear-gradient(to left, #f7f8fa, transparent);
}
</style>
