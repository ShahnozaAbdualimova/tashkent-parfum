<script setup lang="ts">
import { useSwiper } from '#imports'
import { ref } from 'vue'

const slides = ref(
  Array.from({ length: 3 }, (_, idx) => {
    // Array of sample images, replace with actual URLs
    const images = [
      'https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Slide+1',
      'https://via.placeholder.com/600x300/33FF57/FFFFFF?text=Slide+2',
      'https://via.placeholder.com/600x300/3357FF/FFFFFF?text=Slide+3',
    ]

    return {
      id: idx + 1,
      bgImage: images[idx],  // Use the image URL for the background
      title: `Коллекция самой лучшей парфюмерии ${idx + 1}`,
      description: 'Парфюмерия от премиум брендов, таких как Dior, Armani, Carolina Herrera CH',
    }
  }),
)

const swiperRef = ref(null)
const swiper1 = useSwiper(swiperRef, {
  loop: true,
  effect: 'fade',  // Fade effect for smooth transitions
  autoplay: {
    delay: 5000,  // autoplay delay in milliseconds (5 seconds)
    disableOnInteraction: false,  // ensures autoplay continues even after user interaction
  },
  on: {
    slideChange() {
      // Update active slide index whenever slide changes
      activeSlideIndex.value = swiper1.swiper.realIndex
    },
  },
})

const activeSlideIndex = ref(0)
</script>

<template>
  <main class="py-8 px-4">
    <h2 class="text-2xl font-bold text-center mb-4">Custom Slider with Images</h2>
    <div class="swiper-wrapper">
      <ClientOnly>
        <swiper-container ref="swiperRef" class="swiper-container" :loop="true">
          <swiper-slide
            v-for="(slide, index) in slides"
            :key="`slide-${slide.id}`"
            class="swiper-slide relative"
            :style="{ backgroundImage: `url(${slide.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
          >
            <div class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
              <div class="text-center text-white">
                <h3 class="text-xl font-semibold">{{ slide.title }}</h3>
                <p class="mt-2">{{ slide.description }}</p>
                <button class="mt-4 px-6 py-2 bg-gray-800 text-white text-sm rounded-full hover:bg-gray-900">Подробнее о товаре</button>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>

    <!-- Slide Options (Buttons) -->
    <div class="flex justify-center mt-6 space-x-4">
      <button
        v-for="(slide, index) in slides"
        :key="`button-${slide.id}`"
        :class="[
          'px-4 py-2 rounded-full',
          activeSlideIndex === index ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
        ]"
        @click="swiper1.swiper.slideTo(index)"
      >
        {{ slide.id }}
      </button>
    </div>

    <!-- Navigation Buttons -->
    <div class="flex justify-between mt-6">
      <button @click="swiper1.prev()" class="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-200">Prev</button>
      <button @click="swiper1.next()" class="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-200">Next</button>
    </div>
  </main>
</template>

<style lang="css">
.swiper-container {
  width: 100%;
  height: 300px; /* adjust to desired height */
}

.swiper-slide {
  height: 100%;
}
</style>

