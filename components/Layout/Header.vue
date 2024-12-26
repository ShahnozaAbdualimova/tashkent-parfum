<script setup>
import { ref } from 'vue';
// import Dropdown from '~/components/Base/Dropdown.vue';

// Reaktiv ma'lumotlar
const selectedLanguage = ref('O‘zbekcha');
const languages = ref(['O‘zbekcha', 'Русский', 'English']);
const openMenuList = ref(false)

const openCatalogList = ref(false);

const openList = () => {
  openCatalogList.value = !openCatalogList.value;
  return openCatalogList;
};

const openMenyuList = () => {
    openMenuList.value = !openMenuList.value
    return openMenuList
}

// Funksiyalar
const updateLanguage = (language) => {
  selectedLanguage.value = language;
};
</script>

<template>
  <div class="w-full">
    <LayoutSubHeader class="hidden lg:block"/>
    <!-- Header section -->
    <header class="w-full py-4 px-5 xl:px-32">
      <div class="w-full flex items-center justify-between container mx-auto">
        <div class="flex items-center gap-8">
          <i class="icon-list block lg:hidden text-2xl font-bold" @click="openMenyuList"></i>
          <CommonLogo />
          <div class="flex items-center gap-4">
            <NuxtLink to="">
              <BaseButton
                class="font-proxima items-center px-3 py-2 bg-dark-btn rounded-lg font-normal text-sm text-white-default duration-300 hover:bg-dark-btn-hover hover:text-black-300 group hidden lg:flex"
                @click="openList"
              >
                <i
                  class="icon-list text-2xl text-white-default duration-300 group-hover:text-black-200"
                ></i>
                Каталог
              </BaseButton>
            </NuxtLink>
            <div class="hidden lg:block relative z-20">
              <div
                class="w-[400px] flex items-center px-2 bg-white-400 text-[#6F6F6F] rounded-lg"
              >
                <div class="w-7 h-full d-flex items-center justify-center">
                  <i class="icon-search"></i>
                </div>
                <BaseInput
                  type="text"
                  input-class="bg-[#F2F3F5] outline-none"
                  placeholder="Поиск"
                  @click="openSearchList"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-5">
          <div
            class="flex flex-col items-center gap-1 cursor-pointer text-[#6F6F6F] hover:text-red-500 transition-all duration-300 ease-in"
          >
            <i class="text-xl icon-box"></i>
            <p class="text-xs hidden lg:block">Мои заказы</p>
          </div>
          <div
            class="flex flex-col items-center cursor-pointer text-[#6F6F6F] hover:text-red-500 transition-all duration-300 ease-in"
          >
            <i class="text-2xl icon-basket"></i>
            <p class="text-xs hidden lg:block">Корзина</p>
          </div>
          <div
            class="flex flex-col items-center gap-1 cursor-pointer text-[#6F6F6F] hover:text-red-500 transition-all duration-300 ease-in"
          >
            <i class="text-xl icon-heart"></i>
            <p class="text-xs hidden lg:block">Избранные</p>
          </div>
        </div>
        <BaseButton variant="danger" type="button" class="hidden lg:flex"
          ><i class="icon-login text-[24px]"></i>Войти
        </BaseButton>
      </div>
    </header>
    <div class="px-5 py-5 bg-gray-50 sm:block lg:hidden">
      <div class="sm:block lg:hidden">
        <div
          class="w-full flex items-center px-2 bg-white-200 text-[#6F6F6F] rounded-lg"
        >
          <div class="w-7 h-full d-flex items-center justify-center">
            <i class="icon-search"></i>
          </div>
          <BaseInput
            type="text"
            input-class="border bg-gray-500"
            placeholder="Поиск"
          />
        </div>
      </div>
    </div>

    <!-- Catalog list section -->
    <CommonCatalogList v-if="openCatalogList" />
    <CommonMenuList v-if="openMenuList" @close-menu="openMenuList = false" class="lg:hidden"/>
  </div>
</template>
  
