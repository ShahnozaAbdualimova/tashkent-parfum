<template>
  <h1 class="font-proxima text-2xl text-black-500 leading-[30px] font-bold">
    Добро пожаловать 👋
  </h1>
  <h3 class="font-proxima text-xl text-black-500 font-bold mb-4 mt-[52px]">
    Вход
  </h3>
  <form @submit.prevent class="min-w-[323px] h-full">
    <div class="flex flex-col justify-between h-full">
      <div class="flex flex-col gap-4 mt-4">
        <label class="font-proxima text-sm text-gray-200 leading-[13.8px]"
          >Номер телефона</label
        >
        <CommonPhoneInput type="tel" placeholder="(__) ___-__-__" />
        <label class="font-proxima text-sm text-gray-200 leading-[13.8px]"
          >Пароль</label
        >
        <CommonPasswordInput  placeholder="Введите пароль" />
        <p
          @click="$emit('switchToReset')"
          class="text-red-900 hover:text-red-500 text-sm self-end duration-200 ease-in-out cursor-pointer"
        >
          Забыли пароль?
        </p>
      </div>

      <div class="flex flex-col gap-5">
        <button
          class="w-full text-sm py-2.5 px-5 rounded-lg bg-red-500 hover:bg-[#FA0738] text-white active:scale-95 duration-200 ease-in-out"
        >
          Войти
        </button>

        <div class="auth-or flex items-center">
          <span class="mx-3 text-xs text-gray-200">Или</span>
        </div>
        <button
          @click="$emit('switchToRegister')"
          class="w-full text-sm py-2.5 px-5 rounded-lg bg-gray-400 hover:bg-gray-300 text-black-500 active:scale-95 duration-200 ease-in-out"
        >
          Зарегистрироваться
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
  width: 100%;
  height: 1px;
  background: #cdcdd0;
  opacity: 0.7;
  display: block;
}
</style>
