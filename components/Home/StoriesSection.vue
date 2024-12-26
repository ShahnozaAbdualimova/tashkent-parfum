<template>
  <div class="mx-auto my-6">
    <CommonSectionWrapper title="Истории" linkText="Все истории">
      <div class="slider-container overflow-hidden relative container mx-auto">
        <swiper class="mySwiper" :slidesPerView="8.5" :initialSlide="10">
          <swiper-slide v-for="(story, index) in stories" :key="story.id">
            <StoriesCard
              :story="story"
              @click="openModal(index)"
              :borderColor="getStoryBorderColor(story.id)"
            />
          </swiper-slide>
        </swiper>
      </div>
    </CommonSectionWrapper>

    <ModalStories
      v-if="showModal"
      :isVisible="showModal"
      :story="stories[selectedStoryIndex]"
      :currentIndex="selectedStoryIndex"
      :totalStories="stories.length"
      @updateIndex="updateStoryIndex"
      @hoverPause="pauseAutoSlideAndProgress"
      @hoverResume="resumeAutoSlideAndProgress"
      @closeModal="closeModal"
    >
      <div
        v-if="showModal"
        class="relative w-full h-1.5 bg-gray-300 rounded mt-3"
      >
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

const { data } = useDataFetcher();
const stories = computed(() => data.value?.results || []);
const showModal = ref(false);
const selectedStoryIndex = ref(0);
const isLoading = ref(true);
const isDataLoaded = ref(false);
const viewedStoryIds = ref([]);

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
  markStoryAsViewed(index);
};

const markStoryAsViewed = (index) => {
  const storyId = stories.value[index]?.id;
  if (storyId && !viewedStoryIds.value.includes(storyId)) {
    viewedStoryIds.value.push(storyId);
  }
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
    selectedStoryIndex.value =
      (selectedStoryIndex.value - 1 + stories.value.length) %
      stories.value.length;
  } else if (direction === 'next') {
    selectedStoryIndex.value =
      (selectedStoryIndex.value + 1) % stories.value.length;
  }
  markStoryAsViewed(selectedStoryIndex.value);
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

const getStoryBorderColor = (storyId) => {
  return viewedStoryIds.value.includes(storyId)
    ? 'border-gray-500'
    : 'border-red-500';
};

onBeforeUnmount(() => {
  stopAutoSlide();
  stopProgressBar();
});
</script>
<style scoped>
.slider-container::before,
.slider-container::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 60px;
  z-index: 10;
  pointer-events: none;
}

.slider-container::before {
  left: 0;
  background: linear-gradient(to right, #fff, transparent);
}

.slider-container::after {
  right: 0;
  background: linear-gradient(to left, #fff, transparent);
}
</style>
