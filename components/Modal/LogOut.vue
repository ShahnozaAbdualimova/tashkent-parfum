<template>
  <ModalWrapper>
    <div class="flex gap-4">
      <form
        class="min-w-[323px] h-full flex flex-col justify-between bg-white p-5 rounded-xl"
      >
        <div class="flex items-center justify-between">
          <p class="text-xl leading-6 font-bold text-black-500">
            Выйти из аккаунта
          </p>
          <button @click="closeModal" class="group">
            <i
              class="icon-close text-2xl text-gray-100 group-hover:text-red-500 transition-300"
            ></i>
          </button>
        </div>
        <p class="text-black-500 text-sm leading-4 font-normal my-5">
          Вы уверены, что хотите выйти из своей учетной записи
        </p>
        <div class="flex items-center gap-4 mt-2">
          <BaseButton
            @click="closeModal()"
            variant="secondary"
            class="!py-2 md:py-2.5 w-full text-red-500"
            >Отменить</BaseButton
          >
          <BaseButton
            @click="closeModal('logout')"
            class="!py-2 md:py-2.5 w-full"
            >Выйти</BaseButton
          >
        </div>
      </form>
    </div>
  </ModalWrapper>
</template>

<script setup>
const emit = defineEmits(['closeModal']);
const closeModal = (type) => {
  emit('closeModal');
  if (type === 'logout') {
    navigateTo('/');
  }
};
</script>
