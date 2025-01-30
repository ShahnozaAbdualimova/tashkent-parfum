<template>
  <ModalWrapper>
    <div class="flex gap-4">
      <form
        @submit.prevent
        class="min-w-[323px] h-full flex flex-col justify-between bg-white p-5 rounded-xl"
      >
        <div class="flex flex-col items-center">
          <h3 class="text-xl text-black-500 font-bold mb-2">Введите код</h3>
          <p class="text-gray-200 text-sm">
            Код подтверждения был отправлен на номер:
          </p>
          <div class="flex items-center justify-center gap-1 mb-5">
            <p class="text-sm text-black-500 font-semibold leading-[18.2px]">
              +998 {{ phoneNumber }}
            </p>
            <button>
              <img src="/svg/edit.svg" alt="edit icon" />
            </button>
          </div>
          <CommonConfirmationInput />
          <div class="flex items-center justify-center gap-1.5 mt-3.5 mb-8">
            <p class="text-xs text-gray-100">Не получили код?</p>
            <p class="text-xs text-red-500 cursor-pointer">Отправить заново</p>
          </div>
        </div>

        <button
          class="sm:mt-0 w-full text-sm py-2.5 px-5 rounded-lg bg-red-500 hover:bg-[#FA0738] text-white active:scale-95 duration-200 ease-in-out"
        >
          Подтвердить
        </button>
      </form>
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
const props = defineProps({
  phoneNumber: {
    type: Number,
    required: true,
  },
});
const emit = defineEmits(['closeModal']);
const closeModal = () => {
  emit('closeModal');
};
</script>
