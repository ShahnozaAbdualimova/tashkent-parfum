<template>
  <div class="container mx-auto my-6">
    <CommonCSectionWrapper title="Истории" linkText="Все истории">
      <div class="flex items-center  gap-2">
        <BaseCStoriesCard
          v-for="i of 7"
          :image="image"
          @click="showModal = !showModal"
        />
      </div>
    </CommonCSectionWrapper>
    <ModalStories :isVisible="showModal" @closeModal="showModal = false" :image="image"/>
  </div>
</template>

<script setup>
const image =
  'https://toshkent-parfum.uz/media/cache/17/b9/17b909aaa7036f90299f31ff59f3a0a1.webp';
const route = useRoute();
const showModal = ref(false);
</script>
