<template>
  <div>
    <div class="bg-white p-5 rounded-xl">
      <NuxtLink
        to="/profile/instructions"
        class="flex items-center gap-3 font-bold group text-black-500"
        ><svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="group-hover:-translate-x-1 transition-300"
        >
          <path
            d="M18.4004 12H5.60039M5.60039 12L10.4004 7.19995M5.60039 12L10.4004 16.8"
            stroke="#6F6F6F"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Регистрация в приложения</NuxtLink
      >
      <p class="text-black-500 font-semibold mt-4">
        Регистрация состоит из 3-х шагов На 1-м этапе вы вводите свои личные
        данные (Ф.И.Ш, номер телефона, адрес проживания) и подтверждаете свой
        профиль кодом подтверждения, отправленным на ваш номер телефона. После
        проверки вы устанавливаете пароль и пользуетесь приложением
      </p>
      <p class="text-black-500 font-semibold mt-4">
        Регистрация состоит из 3-х шагов На 1-м этапе вы вводите свои личные
        данные (Ф.И.Ш, номер телефона, адрес проживания) и подтверждаете свой
        профиль кодом подтверждения, отправленным на ваш номер телефона. После
        проверки вы устанавливаете пароль и пользуетесь приложением
      </p>
    </div>
    <Transition name="fade" mode="out-in">
      <div
        v-if="!isLike"
        class="bg-white p-5 rounded-xl mt-5 flex sm:flex-row flex-col sm:gap-2 gap-4 justify-between items-center"
      >
        <h3 class="font-bold text-sm">Была ли статья полезна для Вас?</h3>

        <div class="flex items-center gap-4">
          <BaseButton @click="handleLike" variant="secondary" class="!px-10"
            >нет</BaseButton
          >
          <BaseButton @click="handleLike" class="!px-10"> Да </BaseButton>
        </div>
      </div>
      <div
        v-else
        class="bg-white p-5 rounded-xl mt-5 flex justify-between items-center"
      >
        <h3 class="font-bold text-sm">😊 Спасибо за ваше мнение!</h3>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const isLike = ref(false);
const handleLike = () => {
  isLike.value = true;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
