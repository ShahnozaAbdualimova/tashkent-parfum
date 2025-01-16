<template>
  <div class="w-full py-2 bg-gray-50 px-5 xl:px-32">
    <div class="w-full py-1 flex justify-between items-center">
      <div class="flex gap-6">
        <i class="icon-close block lg:hidden" @click.self="$emit('close-menu')"></i>
        <a
          class="w-auto h-auto items-center gap-2 cursor-pointer hover:text-red-500 hidden lg:flex"
          href="tel:+998712007007"
          target="_blank"
        >
          <i class="icon-phone text-2xl text-gray-300"></i>
          <span class="text-gray-200 text-xs">+998 (71) 200 70 07</span>
        </a>
        <a
          class="w-auto h-auto items-center gap-2 cursor-pointer hover:text-red-500 hidden lg:flex"
          href="https://www.google.com/maps/dir/Inha+University+in+Tashkent,+Ziyolilar+Street,+Tashk[…]41.338525?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        >
          <i class="icon-adress text-2xl text-gray-300"></i>
          <span class="text-gray-200 text-xs"
            >Yunusobod, Ahmad Donish ko'chasi, 4/80</span
          >
        </a>
      </div>
      <div class="flex items-center gap-3">
        <div class="flex gap-4 text-gray-200">
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
        <BaseDropdown
          :selectedValue="selectedLanguage"
          :options="languages"
          @update:selectedValue="updateLanguage"
        />
      </div>
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
