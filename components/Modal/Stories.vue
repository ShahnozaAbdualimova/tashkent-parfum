<template>
  <ModalWrapper>
    <div class="flex items-center justify-center gap-4">
      <button
        @click="navigate('prev')"
        class="active:scale-90 duration-200 ease-in-out bg-gray-100 rounded-md p-1.5 rotate-180 text-3xl text-gray-300 flex items-center justify-center w-11 h-11 hover:bg-white-default/[0.24]"
      >
        <i class="icon-left" />
      </button>
      <div class="flex flex-col gap-y-3">
        <slot></slot>
        <div
            @mouseenter="$emit('hoverPause')"
            @mouseleave="$emit('hoverResume')"
          :style="{
            backgroundImage: `url(${story.image_src.default}),linear-gradient(180deg, #00000003, #090808)`,
            backgroundSize: 'cover',
          }"
          class="w-[220px] h-[350px] md:w-[292px] md:h-[500px] rounded-lg flex flex-col justify-end"
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
            <h3
              class="font-proxima text-white-default font-medium text-lg leading-7"
            >
              {{ story.items[0].description }}
            </h3>
          </div>
        </div>
        <a :href="story.items[0].url">
          <button
            class="w-full py-2.5 px-5 rounded-lg bg-red-500 hover:bg-[#FA0738] text-white-default active:scale-95 duration-200 ease-in-out"
          >
            Подробнее
          </button>
        </a>
      </div>

      <button
        @click="navigate('next')"
        class="active:scale-90 duration-200 ease-in-out bg-gray-100 rounded-md p-1.5 text-3xl text-gray-300 flex items-center justify-center w-11 h-11 hover:bg-white-default/[0.24]"
      >
        <i class="icon-left" />
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

const emit = defineEmits(['updateIndex']);

const navigate = (direction) => {
  emit('updateIndex', direction);
};
</script>
