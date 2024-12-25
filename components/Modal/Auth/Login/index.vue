<template>
  <ModalWrapper>
    <div class="flex gap-2">

    <div class="flex rounded-xl">
      <ModalAuthBanner/>
    </div>

        <button
            @click="closeModal"
            class="h-8 w-8 text-xl text-white border-2 border-white rounded-[100%] flex items-center justify-center duration-200 ease-in-out hover:text-red-500 hover:border-red-500 hover:rotate-90"
        >
          &#x2715;
        </button>

    </div>

  </ModalWrapper>
</template>


<script setup>
const emit = defineEmits(['closeModal']);

const closeModal = () => {
  emit('closeModal');
};
</script>
