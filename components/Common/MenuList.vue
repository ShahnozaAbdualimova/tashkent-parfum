<template>
  <div class="w-full h-lvh bg-white absolute top-0 left-0 z-20 px-4">
    <div class="w-full py-5 bg-white flex justify-between">
      <div class="flex items-center justify-between gap-5">
        <i
          class="icon-close block lg:hidden text-300 text-xl text-gray-700"
          @click.self="$emit('close-menu')"
        ></i>
        <div class="flex gap-4 text-gray-300">
          <a href="" target="_blank">
            <i
              class="icon-facebook cursor-pointer hover:text-red-500 transition-all duration-300 text-xl"
            ></i>
          </a>
          <a href="https://www.instagram.com/toshkent_parfum_/" target="_blank">
            <i
              class="icon-instagram cursor-pointer hover:text-red-500 transition-all duration-300 text-xl"
            ></i>
          </a>
          <a href="https://t.me/toshkent_parfume" target="_blank">
            <i
              class="icon-telegram cursor-pointer hover:text-red-500 transition-all duration-300 text-xl"
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
    <BaseButton @click="showModal = !showModal" type="primary" class="">
      <i class="icon-login text-[24px]"></i>
      Войти
    </BaseButton>
    <div class="w-full py-2 bg-white border-gray-300">
      <!-- Asosiy menyu -->
      <ul>
        <li
          v-for="(item, index) in catalogs"
          :key="index"
          class="relative w-full py-2 border-b border-gray-400 text-base font-medium"
          @click="toggleDropdown(index)"
        >
          <div class="w-full flex justify-between">
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
