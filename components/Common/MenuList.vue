<template>
  <div class="w-full h-lvh bg-white absolute top-0 left-0 z-30 px-4 overflow-y-scroll">
    <div class="w-full py-5 bg-white flex justify-between fixed z-30">
      <div class="flex items-center justify-between gap-5">
        <i
          class="icon-close block lg:hidden text-300 text-2xl text-gray-700"
          @click.self="$emit('close-menu')"
        ></i>
        <div class="flex gap-4 text-gray-300">
          <a href="" target="_blank">
            <i
              class="icon-facebook cursor-pointer hover:text-red-500 transition-all duration-300 text-2xl"
            ></i>
          </a>
          <a href="https://www.instagram.com/toshkent_parfum_/" target="_blank">
            <i
              class="icon-instagram cursor-pointer hover:text-red-500 transition-all duration-300 text-2xl"
            ></i>
          </a>
          <a href="https://t.me/toshkent_parfume" target="_blank">
            <i
              class="icon-telegram cursor-pointer hover:text-red-500 transition-all duration-300 text-2xl"
            ></i>
          </a>
        </div>
      </div>
      <BaseDropdown
        :selectedValue="selectedLanguage"
        :options="languages"
        @update:selectedValue="updateLanguage"
      />
    </div>
    <div class="mt-20">
      <BaseButton @click="showModal = !showModal" type="primary" class="my-2">
        <i class="icon-login text-[24px]"></i>
        Войти
      </BaseButton>
      <div class="w-full py-2 bg-white border-gray-300">
        <!-- Asosiy menyu -->
        <ul>
          <li
            v-for="(item, index) in catalogs"
            :key="index"
            class="relative w-full py-4 border-b border-gray-400 text-base"
            @click="toggleDropdown(index)"
          >
            <div class="w-full flex justify-between font-medium">
              {{ item.name }}
              <i
                class="icon-chevron-down text-sm text-gray-600"
                :class="{ rotated: openIndex }"
              ></i>
            </div>
            <!-- Submenu -->
            <ul
              v-if="item.subcategories && openIndex === index"
              class="w-full bg-white border-gray-400"
            >
              <NuxtLink to="#">
                <li
                  v-for="(subItem, subIndex) in item.subcategories"
                  :key="subIndex"
                  class="py-2 text-sm"
                >
                  {{ subItem }}
                </li>
              </NuxtLink>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col gap-3.5 py-2">
      <a
        class="w-auto h-auto items-center gap-2 cursor-pointer hover:text-red-500 flex  lg:hidden"
        href="tel:+998712007007"
        target="_blank"
      >
        <i class="icon-phone text-2xl text-gray-300"></i>
        <span class="text-gray-200 text-sm">+998 (71) 200 70 07</span>
      </a>
      <a
        class="w-auto h-auto items-center gap-2 cursor-pointer hover:text-red-500 flex lg:hidden"
        href="https://www.google.com/maps/dir/Inha+University+in+Tashkent,+Ziyolilar+Street,+Tashk[…]41.338525?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
      >
        <i class="icon-adress text-2xl text-gray-300"></i>
        <span class="text-gray-200 text-sm"
          >Yunusobod, Ahmad Donish ko'chasi, 4/80</span
        >
      </a>
    </div>
  </div>
</template>

<script setup>
const showModal = ref(false);

const closeModal = () => {
  showModal.value = false;
};

import { catalogs } from "~/data/data.js";

const selectedLanguage = ref("O‘zbekcha");
const languages = ref(["O‘zbekcha", "Русский", "English"]);
// Funksiyalar
const updateLanguage = (language) => {
  selectedLanguage.value = language;
};

const openIndex = ref(false);

const toggleDropdown = (index) => {
  openIndex.value = openIndex.value === index ? false : index;
};
</script>

<style scoped>
.rotated {
  transform: rotate(180deg);
}
</style>
