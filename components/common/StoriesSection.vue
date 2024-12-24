<template>
  <div class="container mx-auto my-6">
    <CommonCSectionWrapper title="Истории" linkText="Все истории">


      <div v-if="isLoading" class="flex justify-center items-center py-6">
        <span>Loading...</span>
      </div>


      <swiper v-else class="mySwiper" :slidesPerView="7" spaceBetween="8">
        <swiper-slide v-for="(story, index) in stories" :key="story.id">
          <div class="flex items-center gap-2">
            <BaseCStoriesCard :story="story" @click="openModal(index)" />
          </div>
        </swiper-slide>
      </swiper>
    </CommonCSectionWrapper>




    <ModalStories
        v-if="showModal"
        :isVisible="showModal"
        @closeModal="closeModal"
        :story="stories[selectedStoryIndex]"
        :currentIndex="selectedStoryIndex"
        :totalStories="stories.length"
        @updateIndex="updateStoryIndex"
        @hoverPause="pauseAutoSlideAndProgress"
        @hoverResume="resumeAutoSlideAndProgress"
    >
      <div v-if="showModal" class="relative w-full h-1.5 bg-gray-300 rounded mt-3">
        <div
            class="absolute top-0 left-0 h-full bg-red-500 transition-200 rounded"
            :style="{ width: progressBarWidth + '%' }"
        ></div>
      </div>
    </ModalStories>
  </div>
</template>

<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';


const { data} = useDataFetcher();
const stories = computed(() => data.value?.results || []);
const showModal = ref(false);
const selectedStoryIndex = ref(0);
const isLoading = ref(true);
const isDataLoaded = ref(false);


const progressBarWidth = ref(0);
let progressInterval = null;
let autoSlideInterval = null;
let pausedProgress = null;
let pausedTimeRemaining = null;


onMounted(() => {
  if (data.value) {
    isLoading.value = false;
    isDataLoaded.value = true;

  }
});


watch(data, (newData) => {
  if (newData) {
    isLoading.value = false;
    isDataLoaded.value = true;
  }
});


const openModal = (index) => {
  selectedStoryIndex.value = index;
  showModal.value = true;
  startAutoSlide();
  startProgressBar();
};

const closeModal = () => {
  showModal.value = false;
  stopAutoSlide();
  stopProgressBar();
  progressBarWidth.value = 0;
  selectedStoryIndex.value = 0;
};


const updateStoryIndex = (direction) => {
  progressBarWidth.value = 0;
  stopAutoSlide();
  stopProgressBar();

  if (direction === 'prev') {
    selectedStoryIndex.value = (selectedStoryIndex.value - 1 + stories.value.length) % stories.value.length;
  } else if (direction === 'next') {
    selectedStoryIndex.value = (selectedStoryIndex.value + 1) % stories.value.length;
  }

  startAutoSlide();
  startProgressBar();
};


const startAutoSlide = () => {
  stopAutoSlide();
  autoSlideInterval = setInterval(() => {
    updateStoryIndex('next');
  }, pausedTimeRemaining ?? 5000);
};

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
};


const startProgressBar = () => {

  stopProgressBar();
  const progressSpeed = 0.25;
  const intervalTime = 12;

  progressInterval = setInterval(() => {
    if (progressBarWidth.value < 100) {
      progressBarWidth.value += progressSpeed;
    } else {
      progressBarWidth.value = 100;
      stopProgressBar();
    }
  }, intervalTime);
};

const stopProgressBar = () => {
  if (progressInterval) {
    clearInterval(progressInterval);
  }
};


const pauseAutoSlideAndProgress = () => {
  pausedProgress = progressBarWidth.value;
  pausedTimeRemaining = (5000 * (100 - progressBarWidth.value)) / 100;
  stopAutoSlide();
  stopProgressBar();
};

const resumeAutoSlideAndProgress = () => {
  progressBarWidth.value = pausedProgress;
  startAutoSlide();
  startProgressBar();
};

onBeforeUnmount(() => {
  stopAutoSlide();
  stopProgressBar();
});
</script>
