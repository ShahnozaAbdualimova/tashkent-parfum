<template>
  <div class="flex flex-col p-6 bg-white rounded-l-xl ">
    <h1 class="font-proxima text-2xl text-black-500 leading-[30px] font-bold">Добро пожаловать 👋</h1>
    <form class="min-w-[323px] mt-[52px] ">
      <h3 class="font-proxima text-xl text-black-500 font-bold mb-4">Вход</h3>
      <div class="flex flex-col gap-4 mb-[59px]">
        <BaseInput label="Номер телефона" type="tel" placeholder="(__) ___-__-__" />
        <BaseInput label="Пароль" type="password" placeholder="Введите пароль"/>
        <NuxtLink to="#" class="text-red-500 text-sm self-end">Забыли пароль?</NuxtLink>
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
            class="w-full text-sm py-2.5 px-5 rounded-lg bg-gray-400 hover:bg-gray-300  text-black-500 active:scale-95 duration-200 ease-in-out"
        >
          Зарегистрироваться
        </button>
      </div>

    </form>
  </div>
</template>

<script setup>

</script>

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

