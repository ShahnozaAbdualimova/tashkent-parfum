<template>
  <footer class="bg-white">
    <div class="bg-red-500 h-1 w-screen"></div>
    <div class="max-w-7xl mx-auto flex flex-col px-4 sm:px-6 lg:px-8 relative">
      <!-- Contact Section -->
      <div
        class="min-h-[80px] px-5 py-4 mt-8 w-full flex flex-col sm:flex-row items-center sm:items-start justify-between bg-white-500 rounded-2xl">
        <CommonLogo type="dark" class="mb-4 sm:mb-0" />
        <div
          class="flex flex-col sm:flex-row items-center sm:absolute sm:left-96 sm:transform sm:-translate-x-1/2 sm:py-4">
          <span class="hover:text-red-500 cursor-pointer text-base mb-2 sm:mb-0">
            <i class="icon-phone mr-2 text-gray-100 text-base"></i>
            <span class="black-500">+998 71 209 78 87</span>
          </span>
          <a href="mailto:toshkentparfum@gmail.com" class="pl-0 sm:pl-4 py-2 sm:py-0 hover:text-red-500 cursor-pointer">
            <i class="icon-email text-gray-100 text-base"></i>
            <span class="pl-2 sm:pl-4 black-500 text-base">toshkentparfum@gmail.com</span>
          </a>
        </div>
        <div class="py-2 flex space-x-4 mt-4 sm:mt-0">
          <img src="/svg/FooterAppStore.svg" alt="AppStore" />
          <img src="/svg/googleplay.svg" alt="GooglePlay" />
        </div>
      </div>

      <!-- Links Sections -->
      <div class="flex md:flex flex-wrap lg:flex-nowrap justify-between mt-12 sm:mt-20">
        <!-- Customer Links -->
        <div class="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0">
          <h4 class="text-lg font-semibold">Покупателям</h4>
          <ul class="mt-2 space-y-2">
            <li>
              <a href="#" class="text-gray-600 hover:text-red-500">О магазине</a>
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-red-500">Рекомендации</a>
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-red-500">Бренды</a>
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-red-500">Конфиденциальность</a>
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-red-500">Обратная связь</a>
            </li>
          </ul>
        </div>

        <!-- Sections Links -->
        <div class="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0">
          <h4 class="text-lg font-semibold">Разделы</h4>
          <ul class="mt-2 space-y-2">
            <li>
              <a href="#" class="text-gray-600 hover:text-red-500">Парфюмерия</a>
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-red-500">Тело и ванна</a>
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-red-500">Волосы</a>
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-red-500">Лицо</a>
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-red-500">Все разделы</a>
            </li>
          </ul>
        </div>

        <!-- User Links -->
        <div class="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0">
          <h4 class="text-lg font-semibold">Пользователь</h4>
          <ul class="mt-2 space-y-2">
            <li>
              <a href="#" class="text-gray-600 hover:text-red-500">Вход</a>
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-red-500">Регистрация</a>
            </li>
          </ul>
          <h4 class="mt-6 text-lg font-semibold">Наши соц. сети</h4>
          <div class="flex space-x-4 mt-2">
            <a href="#"><i class="icon-facebook text-xl text-gray-600 hover:text-red-500"></i></a>
            <a href="#"><i class="icon-instagram text-xl text-gray-600 hover:text-red-500"></i></a>
            <a href="#"><i class="icon-telegram text-xl text-gray-600 hover:text-red-500"></i></a>
          </div>
        </div>
        <div
          class="sm:w-1/2 lg:w-[580px] h-[156px] bg-white-500 rounded-2xl mt-8 lg:mt-0 p-5 flex flex-col sm:flex-row justify-between items-center sm:items-start">
          <div class="w-full sm:w-3/4">
            <h4 class="text-dark font-bold text-xl mb-4 pl-5">
              Будьте в курсе всех последних новостей через Telegram
            </h4>
            <a href="https://t.me/toshkent_parfume"
              class="w-full bg-[#2684FC] bg-opacity-[8%] rounded-[8px] flex items-center p-2 duration-300 border border-transparent group hover:border hover:border-blue-500">
              <h4 class="ml-2 text-dark font-semibold text-sm md:text-base duration-300 group-hover:text-blue-500">
                <i class='icon-telegram text-blue-500'></i> Связаться через Telegram
              </h4>
            </a>
          </div>
          <div class="w-full sm:w-1/4 flex justify-center sm:justify-end">
            <img src="/svg/sentimg.svg" alt="footerLogo"
              class="w-16 h-16 mt-6 lg:visible  max-sm:invisible md:invisible">
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col sm:flex-row justify-between items-center w-screen h-14 mt-12 sm:mt-20 bg-white-500 px-4 sm:px-8  lg:px-32">
      <p class="text-sm text-gray-600 font-medium mb-4 sm:mb-0 text-center sm:text-left">
        &copy; Toshkent Parfum, 2023. Все права защищены.
      </p>
      <img src="/svg/UicLogo.svg" alt="UicLogo" class="mb-4 sm:mb-0" />
      <h5 class="text-sm text-gray-600 cursor-pointer hover:text-red-500 font-medium text-center sm:text-right">
        Политика конфеденциальности
      </h5>
    </div>
  </footer>
</template>