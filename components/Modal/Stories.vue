<template>
  <ModalWrapper>
    <div class="flex items-center justify-center gap-4 relative">
      <button
        @click="navigate('prev')"
        class="active:scale-90 duration-200 ease-in-out bg-gray-100 rounded-md p-1.5 rotate-180 text-3xl text-gray-300 flex items-center justify-center w-11 h-11 hover:bg-white/[0.24]"
      >
        <i class="icon-left" />
      </button>
      <div class="flex flex-col gap-y-3">
        <slot></slot>
        <div
          @mouseenter="$emit('hoverPause')"
          @mouseleave="$emit('hoverResume')"
          @mousedown="startDrag"
          @mousemove="onDrag"
          @mouseup="endDrag"
          @touchstart="startDrag"
          @touchmove="onDrag"
          @touchend="endDrag"
          :style="{
            backgroundImage: `url(${story.image_src.default}),linear-gradient(180deg, #00000003, #090808)`,
            backgroundSize: 'cover',
          }"
          class="draggable w-[220px] h-[350px] md:w-[292px] md:h-[500px] rounded-lg flex flex-col justify-end"
        >
          <div
            :style="{
              background: 'linear-gradient(180deg, #00000001, #090808)',
            }"
            class="flex flex-col gap-y-4 px-3 pb-3 pt-8 rounded-lg"
          >
            <p class="text-gray-500 text-[14px] font-medium">
              {{ story.items[0].title }}
            </p>
            <h3 class=" text-white font-medium text-lg leading-7">
              {{ story.items[0].description }}
            </h3>
          </div>
        </div>
        <a :href="story.items[0].url">
          <button
            class="w-full py-2.5 px-5 rounded-lg bg-red-500 hover:bg-[#FA0738] text-white active:scale-95 duration-200 ease-in-out"
          >
            Подробнее
          </button>
        </a>
      </div>

      <button
        @click="navigate('next')"
        class="active:scale-90 duration-200 ease-in-out bg-gray-100 rounded-md p-1.5 text-3xl text-gray-300 flex items-center justify-center w-11 h-11 hover:bg-white/[0.24]"
      >
        <i class="icon-left" />
      </button>
      <button
        @click="closeModal"
        class="z-1000 h-8 w-8 text-xl text-white border-2 border-white absolute right-0 top-0 rounded-[100%] flex items-center justify-center duration-200 ease-in-out hover:text-red-500 hover:border-red-500 hover:rotate-90"
      >
        &#x2715;
      </button>
    </div>
  </ModalWrapper>
</template>

<script setup>
defineProps({
  story: {
    type: Object,
    required: true,
  },
  currentIndex: {
    type: Number,
    required: true,
  },
  totalStories: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['updateIndex', 'closeModal']);

const navigate = (direction) => {
  emit('updateIndex', direction);
};

const closeModal = () => {
  emit('closeModal');
};

const startX = ref(0);
const currentX = ref(0);

// Drag start event
const startDrag = (event) => {
  startX.value = event.touches ? event.touches[0].clientX : event.clientX;
};

// Drag move event
const onDrag = (event) => {
  currentX.value = event.touches ? event.touches[0].clientX : event.clientX;
};

// Drag end event
const endDrag = () => {
  const diff = currentX.value - startX.value;

  if (diff > 50) {
    // Logic for drag to the right
    onDragRight();
  } else if (diff < -50) {
    // Logic for drag to the left
    onDragLeft();
  }

  // Reset positions
  startX.value = 0;
  currentX.value = 0;
};

// Logic for dragging right
const onDragRight = () => {
  navigate('next');
};

// Logic for dragging left
const onDragLeft = () => {
  navigate('prev');
};

const handleKeyDown = (event) => {
  if (event.key === 'ArrowLeft') {
    navigate('prev');
  } else if (event.key === 'ArrowRight') {
    navigate('next');
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown);
});

</script>

<style scoped>
.draggable {
  touch-action: none;
}
</style>
