<template>
  <footer class="bg-white w-full mt-40">
    <div class="bg-red-500 h-1 w-full"></div>
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Contact Section -->
      <div
        class="hidden md:flex lg:flex-row px-5 py-4 mt-8 w-full items-center lg:px-1/2 justify-between bg-white-500 rounded-2xl">
        <div class="flex items-center gap-9">
          <CommonLogo type="dark" class="mb-4 lg:mb-0" />
          <div class="flex flex-col lg:flex-row lg:items-start lg:justify-start space-y-2 lg:space-y-0 lg:space-x-4">
            <span class="cursor-pointer text-base flex items-start group transition-colors duration-200 ease-in-out">
              <i class="icon-phone mr-2 text-gray-100 text-base group-hover:text-red-500 duration-200 ease-in-out"></i>
              <span class="text-gray-700 font-normal group-hover:text-red-500 duration-200 ease-in-out">+998 71 209 78
                87</span>
            </span>
            <a href="mailto:toshkentparfum@gmail.com"
              class="cursor-pointer flex items-start group transition-colors duration-200 ease-in-out gap-2">
              <i class="icon-email text-gray-100 text-base group-hover:text-red-500 duration-200 ease-in-out"></i>
              <span
                class="text-gray-700 font-normal group-hover:text-red-500 duration-200 ease-in-out">toshkentparfum@gmail.com</span>
            </a>
          </div>
        </div>

        <div class="flex space-x-4 mt-4 lg:mt-0">
          <img src="/svg/FooterAppStore.svg" alt="AppStore" class="h-10" />
          <img src="/svg/googleplay.svg" alt="GooglePlay" class="h-10" />
        </div>
      </div>

      <!-- Desktop Links Section -->
      <div class="hidden md:flex flex-wrap lg:flex-nowrap justify-between mt-12 sm:mt-20">
        <!-- Customer Links -->
        <div class="w-1/4">
          <h4 class="text-lg font-semibold">Покупателям</h4>
          <ul class="mt-2 space-y-2">
            <li v-for="link in customerLinks" :key="link.text">
              <NuxtLink :to="link.href"
                class="inline-block text-gray-100 font-semibold hover:text-red-500 duration-200 ease-in-out hover:translate-x-2">
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Sections Links -->
        <div class="w-1/4">
          <h4 class="text-lg font-semibold">Разделы</h4>
          <ul class="mt-2 space-y-2">
            <li v-for="link in sectionLinks" :key="link.text">
              <NuxtLink :to="link.href"
                class="inline-block text-gray-100 font-semibold hover:text-red-500 duration-200 ease-in-out hover:translate-x-2">
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- User Links -->
        <div class="w-1/4">
          <h4 class="text-lg font-semibold">Пользователь</h4>
          <ul class="mt-2 space-y-2">
            <li v-for="link in userLinks" :key="link.text">
              <NuxtLink :to="link.href"
                class=" text-gray-100 font-semibold hover:text-red-500  duration-200 ease-in-out">
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
          <h4 class="mt-6 text-lg font-semibold">Наши соц. сети</h4>
          <div class="flex space-x-4 mt-3">
            <a v-for="social in socialLinks" :key="social.icon" :href="social.href"
              class="text-gray-100 text-2xl transition-colors duration-200 ease-in-out hover:text-red-500">
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>

        <!-- Telegram Section Desktop -->
        <div class="bg-white-500 rounded-2xl pt-7 p-5 flex lg:mt-0 md:mt-12 justify-between items-start">
          <div class="w-3/4 max-md:-my-4">
            <h4 class="text-dark font-bold text-xl mb-4 pl-5">
              Будьте в курсе всех последних новостей через Telegram
            </h4>
            <a href="https://t.me/toshkent_parfume"
              class="w-full bg-[#2684FC] bg-opacity-[8%] rounded-[8px] flex items-center p-2 duration-300 border border-transparent group hover:border hover:border-blue-500">
              <span class="ml-2 text-dark font-semibold text-base duration-300 group-hover:text-blue-500">
                <i class="icon-telegram text-blue-500"></i> Связаться через
                Telegram
              </span>
            </a>
          </div>
          <div class="w-1/4 flex justify-end my-6">
            <img src="/svg/sentimg.svg" alt="footerLogo" class="w-16 h-16" />
          </div>
        </div>
      </div>

      <!-- Mobile version -->
      <div class="md:hidden w-full p-4">
        <div class="flex flex-col w-full">
          <!-- Logo -->
          <div class="bg-white-500 p-4 rounded-2xl">
            <CommonLogo type="dark" :width="89" :height="36" class="mb-6" />

            <!-- App Store Buttons -->
            <div class="flex space-x-4 mb-6">
              <img src="/svg/FooterAppStore.svg" alt="AppStore" class="h-10" />
              <img src="/svg/googleplay.svg" alt="GooglePlay" class="h-10" />
            </div>

            <!-- Contact Info -->
            <div class="flex flex-col space-y-2 mb-6">
              <div class="flex items-center">
                <i class="icon-phone mr-2 text-gray-100"></i>
                <span>+998 71 209 78 87</span>
              </div>
              <div class="flex items-center">
                <i class="icon-email mr-2 text-gray-100"></i>
                <span>toshkentparfum@gmail.com</span>
              </div>
            </div>
          </div>
          <!-- Navigation Grid -->
          <div class="grid p-4 grid-cols-2 gap-x-4 gap-y-6 mb-8 w-full">
            <!-- Sections -->
            <div>
              <h4 class="font-medium mb-3">Разделы</h4>
              <ul class="space-y-2 text-gray-100">
                <li v-for="link in customerLinks" :key="link.text">
                  <NuxtLink :to="link.href"
                    class="text-gray-100 font-semibold hover:text-red-500 duration-200 ease-in-out">
                    {{ link.text }}
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <!-- Customers -->
            <div>
              <h4 class="font-medium mb-3">Покупателям</h4>
              <ul class="space-y-2 text-gray-100">
                <li v-for="link in customerLinks" :key="link.text">
                  <NuxtLink :to="link.href" class="text-gray-100 font-semibold  hover:text-red-500 block">
                    {{ link.text }}
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <!-- User -->
            <div>
              <h4 class="font-medium mb-3">Пользователь</h4>
              <ul class="space-y-2 text-gray-100">
                <li v-for="link in userLinks" :key="link.text">
                  <NuxtLink :to="link.href" class="text-gray-100 font-semibold  hover:text-red-500">
                    {{ link.text }}
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <!-- Social Media -->
            <div>
              <h4 class="mb-3">Наши соц. сети</h4>
              <div class="flex space-x-4 ">
                <a v-for="social in socialLinks" :key="social.icon" :href="social.href"
                  class="text-gray-100 text-2xl transition-colors duration-200 ease-in-out hover:text-red-500">
                  <i :class="social.icon"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Telegram Section Mobile -->
          <div class="mb-8 p-3 bg-white-500 rounded-2xl w-full">
            <h4 class="font-bold text-base mb-4">
              Будьте в курсе всех последних новостей через Telegram
            </h4>
            <a href="https://t.me/toshkent_parfume"
              class="flex items-center p-3 bg-[#2684FC] bg-opacity-[8%] rounded-lg">
              <i class="icon-telegram text-blue-500 mr-2"></i>
              <span>Связаться через Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer Mobile -->
    <div class="w-full bg-white-500 md:hidden lg:hidden px-4 py-5 flex flex-col items-start">
      <div class="w-full flex justify-between items-end">
        <div>
          <p class="text-xs font-medium text-black-500 mb-4 w-44">
            Toshkent Parfum© 2023. Все права защищены.
          </p>
          <NuxtLink to="#" class="text-sm font-medium text-black-500">Политика конфеденциальности</NuxtLink>
        </div>
        <img src="/svg/UicLogo.svg" alt="UicLogo" class="h-8 relative -top-9 w-auto" />
      </div>
    </div>
    <!-- Desktop Footer Bottom -->
    <div class="hidden md:flex justify-between items-center w-full h-14 mt-20 bg-white-500 px-8 lg:px-32">
      <p class="text-sm text-black-500 font-semibold">
        &copy; Toshkent Parfum, 2023. Все права защищены.
      </p>
      <img src="/svg/UicLogo.svg" alt="UicLogo" />
      <h5 class="text-sm cursor-pointer text-black-500 font-semibold">
        Политика конфеденциальности
      </h5>
    </div>
  </footer>
</template>
<script setup>
const customerLinks = [
  { text: 'О магазине', href: '#' },
  { text: 'Рекомендации', href: '#' },
  { text: 'Бренды', href: '#' },
  { text: 'Конфиденциальность', href: '#' },
  { text: 'Обратная связь', href: '#' },
];

const sectionLinks = [
  { text: 'Парфюмерия', href: '#' },
  { text: 'Тело и ванна', href: '#' },
  { text: 'Волосы', href: '#' },
  { text: 'Лицо', href: '#' },
  { text: 'Все разделы', href: '#' },
];

const userLinks = [
  { text: 'Вход', href: '#' },
  { text: 'Регистрация', href: '#' },
];

const socialLinks = [
  { icon: 'icon-facebook', href: '#' },
  { icon: 'icon-instagram', href: '#' },
  { icon: 'icon-telegram', href: '#' },
];
</script>
