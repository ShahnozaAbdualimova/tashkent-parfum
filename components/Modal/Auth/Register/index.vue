<template>
  <h1 class="font-proxima text-2xl text-black-500 leading-[30px] font-bold">
    Регистрация
  </h1>
  <h3 class="font-proxima text-xl text-black-500 font-bold mb-4 mt-[52px]">
    Введите свои данные
  </h3>
  <form @submit.prevent class="min-w-[323px] h-full">
    <div class="flex flex-col justify-between h-full">
      <div class="flex flex-col gap-4 mt-4">
        <label class="font-proxima text-sm text-gray-200 leading-[13.8px]"
          >Ф.И.О</label
        >
        <BaseInput placeholder="Введите Ф.И.О." />
        <label class="font-proxima text-sm text-gray-200 leading-[13.8px]"
          >Номер телефона</label
        >
        <CommonPhoneInput type="tel" placeholder="(__) ___-__-__" />
      </div>

      <div class="flex flex-col gap-5">
        <button
          class="w-full text-sm py-2.5 px-5 rounded-lg bg-red-500 hover:bg-[#FA0738] text-white active:scale-95 duration-200 ease-in-out"
        >
          Зарегистрироваться
        </button>

        <div class="auth-or flex items-center">
          <span class="mx-3 text-xs text-gray-200"
            >У Вас уже имеется аккаунт?</span
          >
        </div>
        <button
          @click="$emit('switchToLogin')"
          class="w-full text-sm py-2.5 px-5 rounded-lg bg-gray-400 hover:bg-gray-300 text-black-500 active:scale-95 duration-200 ease-in-out"
        >
          Войти
        </button>
      </div>
    </div>
  </form>
</template>

<script setup></script>

<style scoped>
.auth-or::before,
.auth-or::after {
  content: '';
  width: 20%;
  height: 1px;
  background: #cdcdd0;
  opacity: 0.7;
  display: block;
}
</style>
