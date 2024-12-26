<template>
  <div class="w-full h-lvh bg-white absolute top-0 left-0 z-20">
    <div class="w-full py-5 px-4 bg-white border flex justify-between">
      <div class="flex items-center justify-between gap-5">
        <i
          class="icon-close block lg:hidden text-base text-300"
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
  </div>
</template>

<script setup>

const selectedLanguage = ref('O‘zbekcha');
const languages = ref(['O‘zbekcha', 'Русский', 'English']);
// Funksiyalar
const updateLanguage = (language) => {
  selectedLanguage.value = language;
};
</script>
