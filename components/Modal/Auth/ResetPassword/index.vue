<template>
  <div class="relative">
    <button class="absolute left-0 icon-left rotate-180 cursor-pointer " @click="$emit('switchToLogin')" />
  </div>
  <h3 class="mt-[52px] font-proxima text-xl text-black-500 font-bold mb-4">
    Восстановление пароля
  </h3>
  <form @submit.prevent class="min-w-[323px] h-full">

    <div class="flex flex-col justify-between h-full">
      <div class="flex flex-col gap-4 mt-4">
        <label class="font-proxima text-sm text-gray-200 leading-[13.8px]"
        >Номер телефона</label
        >
        <CommonPhoneInput
          type="tel"
          placeholder="(__) ___-__-__"
        />
      </div>
      <button
        @click="$emit('switchToConfirmation')"
        class="w-full text-sm py-2.5 px-5 rounded-lg bg-red-500 hover:bg-[#FA0738] text-white active:scale-95 duration-200 ease-in-out"
      >
        Подтвердить
      </button>
    </div>




  </form>
</template>

<script setup>
</script>

