<template>
  <CheckoutWrapper title="Контактные данные">
    <div class="flex gap-4 pt-5">
      <div class="w-full">
        <p class="text-gray-200 text-sm font-medium pb-2">Ф.И.О</p>
        <BaseInput placeholder="Введите полное имя" />
      </div>

      <div class="w-full">
        <p class="text-gray-200 text-sm font-medium pb-2">Телефон номер</p>
        <CommonPhoneInput
          placeholder="(__) ___-__-__"
          v-maska="{ mask: '(##) ###-##-##' }"
        />
      </div>
    </div>
    <div class="w-1/2 my-6 pr-2">
      <Transition name="fade" mode="out-in">
      <button
        @click="addNumber"
        v-if="!showInput"
        class="active:scale-95 hover:bg-red-100 duration-200 ease-in-out text-red-500 bg-red-950 py-2 px-4 rounded-lg font-proxima font-semibold leading-[24px] flex items-center gap-1"
      >
        <i class="icon-plus text-2xl" />
        <span class="text-sm">Добавить доп. номер телефона</span>
      </button>

      <div v-else>
        <p class="text-gray-200 text-sm font-medium pb-2">Телефон номер</p>
        <div class="flex items-center bg-white-400 rounded-lg pr-1.5 w-auto">
          <CommonPhoneInput
            class="w-full"
            placeholder="(__) ___-__-__"
            v-maska="{ mask: '(##) ###-##-##' }"
          />
          <button
            @click="addNumber"
            class="icon-cancel text-gray-200 text-2xl hover:text-red-500 duration-200 ease-in-out"
          ></button>
        </div>
      </div>
        </Transition>
    </div>

    <div class="pt-5 border-t border-white-500 flex justify-between">
      <button
        @click="$emit('switchToAddress')"
        class="flex items-center gap-1.5 text-sm py-2.5 px-10 rounded-lg bg-gray-400 hover:bg-gray-300 text-black-500 active:scale-95 duration-200 ease-in-out"
      >
        <i class="icon-left rotate-180"></i>
        <span>Назад</span>
      </button>
      <button
        @click="$emit('switchToPayment')"
        class="flex items-center gap-1.5 text-sm py-2.5 px-10 rounded-lg bg-red-500 hover:bg-[#FA0738] text-white active:scale-95 duration-200 ease-in-out"
      >
        <span>Продолжить</span>
        <i class="icon-left"></i>
      </button>
    </div>
  </CheckoutWrapper>
</template>

<script setup>
onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
const showInput = ref(false);
const addNumber = () => {
  showInput.value = !showInput.value;
};
</script>



<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
