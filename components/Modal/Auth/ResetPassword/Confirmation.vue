<template>
  <form
    @submit.prevent
    class="min-w-[323px] h-full flex flex-col justify-between"
  >
    <div class="relative">
      <button
        class="absolute left-0 icon-left rotate-180 cursor-pointer"
        @click="$emit('switchToReset')"
      />
    </div>

    <div class="flex flex-col items-center">
      <h3 class="font-proxima text-xl text-black-500 font-bold mb-2">
        Введите код
      </h3>
      <p class="font-proxima text-gray-200 text-sm">
        Код подтверждения был отправлен на номер:
      </p>
      <div class="flex items-center justify-center gap-1 mb-5">
        <p class="text-sm text-black-500 font-semibold leading-[18.2px]">
          +998 99 144 34 29
        </p>
        <button @click="$emit('switchToReset')">
          <img src="/svg/edit.svg" alt="edit icon" />
        </button>
      </div>
      <CommonConfirmationInput />
      <div class="flex items-center justify-center gap-1.5 mt-3.5">
        <p class="text-xs text-gray-100">Не получили код?</p>
        <p class="text-xs text-red-500 cursor-pointer">Отправить заново</p>
      </div>
    </div>

    <button
      class="mt-8 sm:mt-0 w-full text-sm py-2.5 px-5 rounded-lg bg-red-500 hover:bg-[#FA0738] text-white active:scale-95 duration-200 ease-in-out"
    >
      Подтвердить
    </button>
  </form>
</template>

<script setup></script>
