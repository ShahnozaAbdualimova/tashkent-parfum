<template>
    <footer class="bg-gray-100 text-gray-700">
      <div class="container mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <CommonLogo/>
         <div class="space-y-4 md:col-span-2">
          <!-- Logotip -->
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="40" viewBox="0 0 150 40">
              <text x="0" y="30" font-size="30" fill="#000" font-weight="bold">Toshkent Parfum</text>
            </svg>
          </div>
          <!-- Telefon -->
          <div class="flex items-center text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l11-11m0 0l11 11m-11-11v8.5m0 0l6.3 6.3M21 21h-6a4 4 0 01-4-4v-3.5a4 4 0 014-4h6a4 4 0 014 4V21a4 4 0 01-4 4z" />
            </svg>
            <a href="tel:+998712097887" class="hover:underline">+998 71 209 78 87</a>
          </div>
          <!-- Email -->
          <div class="flex items-center text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l6 4 6-4M5 21V9m14 12V9M21 8l-6 4-6-4M3 8l6 4m6-4l6 4" />
            </svg>
            <a href="mailto:tashkentparfume@gmail.com" class="hover:underline">tashkentparfume@gmail.com</a>
          </div>
          <!-- Mobil ilovalar -->
          <div class="flex space-x-4">
            <a href="#" class="block w-32">
              <img src="" alt="App Store" />
            </a>
            <a href="#" class="block w-32">
              <img src=" "alt="Google Play" />
            </a>
          </div>
        </div>
  
        <!-- Xaridorlar bo'limi -->
        <div>
          <h3 class="font-bold mb-3">Покупателям</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:underline">О магазине</a></li>
            <li><a href="#" class="hover:underline">Рекомендации</a></li>
            <li><a href="#" class="hover:underline">Бренды</a></li>
            <li><a href="#" class="hover:underline">Конфиденциальность</a></li>
            <li><a href="#" class="hover:underline">Обратная связь</a></li>
          </ul>
        </div>
  
        <!-- Bo'limlar -->
        <div>
          <h3 class="font-bold mb-3">Разделы</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:underline">Парфюмерия</a></li>
            <li><a href="#" class="hover:underline">Тело и ванна</a></li>
            <li><a href="#" class="hover:underline">Волосы</a></li>
            <li><a href="#" class="hover:underline">Лицо</a></li>
            <li><a href="#" class="hover:underline">Все разделы</a></li>
          </ul>
        </div>
  
        <!-- Foydalanuvchilar uchun -->
        <div>
          <h3 class="font-bold mb-3">Пользователь</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:underline">Вход</a></li>
            <li><a href="#" class="hover:underline">Регистрация</a></li>
          </ul>
          <div class="mt-4">
            <h3 class="font-bold mb-3">Наши соц. сети</h3>
            <div class="flex space-x-4">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6">
                  <circle cx="12" cy="12" r="10" fill="#3b5998" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6">
                  <circle cx="12" cy="12" r="10" fill="#E1306C" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6">
                  <circle cx="12" cy="12" r="10" fill="#FF0000" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Quyidagi o'q -->
      <div class="bg-gray-200 py-4 text-center text-sm">
        <p>© Toshkent Parfum 2023. Все права защищены.</p>
        <a href="#" class="hover:underline">Политика конфиденциальности</a>
      </div>
    </footer>
  </template>
  
  <style scoped>
  footer a:hover {
    color: #0056b3;
  }
  </style>
  