<template>
  <footer class="bg-white w-full">
    <div class="bg-red-500 h-1 w-full"></div>
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Contact Section -->
      <div
        class="hidden md:flex min-h-[80px] px-5 py-4 mt-8 w-full items-start justify-between bg-white-500 rounded-2xl">
        <CommonLogo type="dark" />
        <div class="flex items-center absolute right-1/2 py-4">
          <span class="hover:text-red-500 cursor-pointer text-base">
            <i class="icon-phone mr-2 text-gray-100 text-base"></i>
            <span class="black-500">+998 71 209 78 87</span>
          </span>
          <a href="mailto:toshkentparfum@gmail.com" class="pl-4 hover:text-red-500 cursor-pointer">
            <i class="icon-email text-gray-100 text-base"></i>
            <span class="pl-4 black-500 text-base">toshkentparfum@gmail.com</span>
          </a>
        </div>
        <div class="py-2 flex space-x-4">
          <img src="/svg/FooterAppStore.svg" alt="AppStore" />
          <img src="/svg/googleplay.svg" alt="GooglePlay" />
        </div>
      </div>

      <!-- Desktop Links Section -->
      <div class="hidden md:flex flex-wrap lg:flex-nowrap justify-between mt-12 sm:mt-20">
        <!-- Customer Links -->
        <div class="w-1/4">
          <h4 class="text-lg font-semibold">Покупателям</h4>
          <ul class="mt-2 space-y-2">
            <li>
              <NuxtLink to="#" class="text-gray-600 hover:text-red-500">О магазине</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="text-gray-600 hover:text-red-500">Рекомендации</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="text-gray-600 hover:text-red-500">Бренды</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="text-gray-600 hover:text-red-500">Конфиденциальность</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="text-gray-600 hover:text-red-500">Обратная связь</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Sections Links -->
        <div class="w-1/4">
          <h4 class="text-lg font-semibold">Разделы</h4>
          <ul class="mt-2 space-y-2">
            <li>
              <NuxtLink to="#" class="text-gray-600 hover:text-red-500">Парфюмерия</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="text-gray-600 hover:text-red-500">Тело и ванна</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="text-gray-600 hover:text-red-500">Волосы</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="text-gray-600 hover:text-red-500">Лицо</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="text-gray-600 hover:text-red-500">Все разделы</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- User Links -->
        <div class="w-1/4">
          <h4 class="text-lg font-semibold">Пользователь</h4>
          <ul class="mt-2 space-y-2">
            <li>
              <NuxtLink to="#" class="text-gray-600 hover:text-red-500">Вход</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="text-gray-600 hover:text-red-500">Регистрация</NuxtLink>
            </li>
          </ul>
          <h4 class="mt-6 text-lg font-semibold">Наши соц. сети</h4>
          <div class="flex space-x-4 mt-2">
            <a href="#"><i class="icon-facebook text-xl text-gray-600 hover:text-red-500"></i></a>
            <a href="#"><i class="icon-instagram text-xl text-gray-600 hover:text-red-500"></i></a>
            <a href="#"><i class="icon-telegram text-xl text-gray-600 hover:text-red-500"></i></a>
          </div>
        </div>

        <!-- Telegram Section Desktop -->
        <div class="w-[580px] h-[156px] bg-white-500 rounded-2xl p-5 flex justify-between items-start">
          <div class="w-3/4">
            <h4 class="text-dark font-bold text-xl mb-4 pl-5">
              Будьте в курсе всех последних новостей через Telegram
            </h4>
            <a href="https://t.me/toshkent_parfume"
              class="w-full bg-[#2684FC] bg-opacity-[8%] rounded-[8px] flex items-center p-2 duration-300 border border-transparent group hover:border hover:border-blue-500">
              <span class="ml-2 text-dark font-semibold text-base duration-300 group-hover:text-blue-500">
                <i class='icon-telegram text-blue-500'></i> Связаться через Telegram
              </span>
            </a>
          </div>
          <div class="w-1/4 flex justify-end my-6">
            <img src="/svg/sentimg.svg" alt="footerLogo" class="w-16 h-16">
          </div>
        </div>
      </div>

      <!-- Mobile version -->
      <div class="md:hidden w-full p-4">
        <div class="flex flex-col w-full">
          <!-- Logo -->
          <div class="bg-white-500 p-4 rounded-2xl">
            <CommonLogo type="dark" class="mb-6" />

            <!-- App Store Buttons -->
            <div class="flex space-x-4 mb-6">
              <img src="/svg/FooterAppStore.svg" alt="AppStore" class="h-10" />
              <img src="/svg/googleplay.svg" alt="GooglePlay" class="h-10" />
            </div>

            <!-- Contact Info -->
            <div class="flex flex-col space-y-2 mb-6">
              <div class="flex items-center">
                <i class="icon-phone mr-2 text-gray-400"></i>
                <span>+998 71 209 78 87</span>
              </div>
              <div class="flex items-center">
                <i class="icon-email mr-2 text-gray-400"></i>
                <span>toshkentparfum@gmail.com</span>
              </div>
            </div>
          </div>
          <!-- Navigation Grid -->
          <div class="grid p-4 grid-cols-2 gap-x-4 gap-y-6 mb-8 w-full">
            <!-- Sections -->
            <div>
              <h4 class="font-medium mb-3">Разделы</h4>
              <ul class="space-y-2 text-gray-600">
                <li>
                  <NuxtLink to="#">Парфюмерия</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">Тело и ванна</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">Волосы</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">Лицо</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">Все разделы</NuxtLink>
                </li>
              </ul>
            </div>

            <!-- Customers -->
            <div>
              <h4 class="font-medium mb-3">Покупателям</h4>
              <ul class="space-y-2 text-gray-600">
                <li>
                  <NuxtLink to="#">О магазине</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">Скидки и акции</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">Рекомендации</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">Бренды</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">Конфеденциальность</NuxtLink>
                </li>
              </ul>
            </div>

            <!-- User -->
            <div>
              <h4 class="font-medium mb-3">Пользователь</h4>
              <ul class="space-y-2 text-gray-600">
                <li>
                  <NuxtLink to="#">Вход</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">Регистрация</NuxtLink>
                </li>
              </ul>
            </div>

            <!-- Social Media -->
            <div>
              <h4 class="font-medium mb-3">Пользователь</h4>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-600"><i class="icon-facebook"></i></a>
                <a href="#" class="text-gray-600"><i class="icon-instagram"></i></a>
                <a href="#" class="text-gray-600"><i class="icon-telegram"></i></a>
              </div>
            </div>
          </div>

          <!-- Telegram Section Mobile -->
          <div class="mb-8 p-3 bg-white-500 rounded-2xl w-full">
            <h4 class="font-medium mb-4">Будьте в курсе всех последних новостей через Telegram</h4>
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
          <p class="text-sm text-gray-600  mb-4">Toshkent Parfum© 2023. Все права защищены.</p>
          <NuxtLink to="#" class="text-sm text-gray-600">Политика конфеденциальности</NuxtLink>
        </div>
        <img src="/svg/UicLogo.svg" alt="UicLogo" class="h-8 my-4 w-auto" />
      </div>
    </div>
    <!-- Desktop Footer Bottom -->
    <div class="hidden md:flex justify-between items-center w-full h-14 mt-20 bg-white-500 px-8 lg:px-32">
      <p class="text-sm text-gray-600 font-medium">
        &copy; Toshkent Parfum, 2023. Все права защищены.
      </p>
      <img src="/svg/UicLogo.svg" alt="UicLogo" />
      <h5 class="text-sm text-gray-600 cursor-pointer hover:text-red-500 font-medium">
        Политика конфеденциальности
      </h5>
    </div>
  </footer>
</template>
