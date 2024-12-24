<template>
  <div class="w-full">
    <div class="w-full py-2 bg-gray-50 px-32">
      <div class="w-full py-1 flex justify-between">
        <div class="flex gap-6">
          <NuxtLink class="w-auto h-auto flex items-center gap-2 cursor-pointer hover:text-red-300">
            <i class="icon-phone text-2xl text-gray-300"></i>
            <span class="text-gray-600 text-xs">+998 (71) 200 70 07</span>
          </NuxtLink>
          <NuxtLink class="w-auto h-auto flex items-center gap-2 cursor-pointer">
            <i class="icon-adress text-2xl text-gray-300"></i>
            <span class="text-gray-600 text-xs">+998 (71) 200 70 07</span>
          </NuxtLink>
        </div>
        <div class="flex items-center gap-3">
          <div class="flex gap-4 text-gray-400">
            <NuxtLink to="">
              <i class="icon-facebook cursor-pointer hover:text-red-500 transition-all duration-300 text-xl"></i>
            </NuxtLink>
            <NuxtLink to="https://www.instagram.com/toshkent_parfum_/">
              <i class="icon-instagram cursor-pointer hover:text-red-500 transition-all duration-300 text-xl"></i>
            </NuxtLink>
            <NuxtLink to="https://t.me/toshkent_parfume">
              <i class="icon-telegram cursor-pointer hover:text-red-500 transition-all duration-300 text-xl"></i>
            </NuxtLink>
          </div>
          <Dropdown :selectedValue="selectedLanguage" :options="languages" @update:selectedValue="updateLanguage" />
        </div>
      </div>
    </div>
    <header class="w-full py-4 px-32">
      <div class="w-full flex items-center justify-between container mx-auto">
        <div class="flex gap-8">
          <CommonLogo type="light" />
          <div class="flex items-center gap-4">
            <BaseCButton
              class="font-proxima px-3 py-2 bg-dark-btn rounded-lg font-normal text-sm text-white-default duration-300 hover:bg-dark-btn-hover hover:text-black-300 group"
            >
              <i
                class="icon-list text-2xl text-white-default duration-300 group-hover:text-black-200"
              ></i>
              Каталог
            </BaseCButton>
            <div
              class="flex items-center px-2 bg-[#F2F3F5] text-[#6F6F6F] rounded-lg"
            >
              <div class="w-7 h-full d-flex items-center justify-center">
                <i class="icon-search"></i>
              </div>
              <input type="text" class="w-[436px] py-2 bg-[#F2F3F5] outline-none" placeholder="Поиск" />
            </div>
          </div>
        </div>
        <div class="flex gap-5">
          <div
            class="flex flex-col items-center gap-1 cursor-pointer text-[#6F6F6F] hover:text-red-500 transition-all duration-300 ease-in">
            <i class="text-xl icon-box"></i>
            <p class="text-xs">Мои заказы</p>
          </div>
          <div
            class="flex flex-col items-center cursor-pointer text-[#6F6F6F] hover:text-red-500 transition-all duration-300 ease-in">
            <i class="text-2xl icon-basket"></i>
            <p class="text-xs">Корзина</p>
          </div>
          <div
            class="flex flex-col items-center gap-1 cursor-pointer text-[#6F6F6F] hover:text-red-500 transition-all duration-300 ease-in">
            <i class="text-xl icon-heart"></i>
            <p class="text-xs">Избранные</p>
          </div>
        </div>
        <BaseButton variant="danger" type="button"><i class="icon-login text-[24px]"></i>Войти
        </BaseButton>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Dropdown from '~/components/Base/Dropdown.vue';

// Reaktiv ma'lumotlar
const selectedLanguage = ref('O‘zbekcha');
const languages = ref(['O‘zbekcha', 'Русский', 'English']);

// Funksiyalar
const updateLanguage = (language) => {
  selectedLanguage.value = language;
};
</script>
