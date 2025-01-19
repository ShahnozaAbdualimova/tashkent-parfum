<template>
  <div class="">
    <div class="container max-w-7xl mx-auto px-4 py-8">
      <h1 class="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">
        Обратная связь
      </h1>
      <p class="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">
        Наша дружная команда будет рада слышать вас
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Contact Form -->
        <div class="bg-white p-4 sm:p-6 rounded-xl">
          <form @submit.prevent="submitForm" class="flex flex-col">
            <div
              class="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-4"
            >
              <div class="w-full">
                <label class="block text-sm mb-2">Имя</label>
                <BaseInput
                  placeholder="Напишите свое имя"
                  class="w-full rounded-lg"
                />
              </div>
              <div class="w-full">
                <label class="block text-sm mb-2">Номер телефона</label>
                <div class="flex">
                  <CommonPhoneInput class="w-full rounded-lg" />
                </div>
              </div>
            </div>
            <div class="w-full mt-4">
              <label class="block text-sm mb-2">Текст</label>
              <textarea
                placeholder="Напишите свое имя"
                class="w-full pb-20 rounded-lg text-base font-normal bg-white-400 py-2.5 pl-3 outline-none text-black-500 placeholder-gray-100"
              ></textarea>
            </div>
            <div class="w-full mt-4 flex justify-end">
              <BaseButton
                :variant="'basketBtn'"
                class="w-full py-2 sm:w-[150px]"
                :type="'button'"
                :disabled="false"
              >
                Отправить
              </BaseButton>
            </div>
          </form>
        </div>

        <!-- Company Info -->
        <div class="bg-white p-4 sm:p-6 rounded-xl">
          <h2 class="text-lg sm:text-xl md:text-2xl font-bold mb-2">
            Tashkent Parfume
          </h2>
          <p class="text-gray-100 text-sm sm:text-base mb-4">
            Наслаждайтесь шоппингом и покупайте любимые ароматы и новинки по
            приятным ценам.
          </p>

          <div class="space-y-4">
            <div
              class="flex flex-col md:flex-col lg:flex-row sm:flex-row gap-4"
            >
              <!-- clock -->
              <div
                class="flex border items-center w-full border-gray-400 rounded-xl pt-2.5 pb-2 pl-2 gap-2 lg:hover:border-red-500 duration-300 transition-all cursor-pointer group"
              >
                <i
                  class="icon-clock text-3xl text-gray-100 lg:hover:text-red-500 duration-300"
                ></i>

                <div>
                  <p class="text-sm text-gray-500">Время работы</p>
                  <p class="text-sm font-medium">09:00 - 19:00</p>
                </div>
              </div>
              <!-- phone -->
              <div
                class="flex border items-center w-full border-gray-400 rounded-xl pt-2.5 pb-2 pl-2 gap-2 lg:hover:border-red-500 duration-300 transition-all cursor-pointer group"
              >
                <i
                  class="icon-help text-2xl text-gray-100 lg:hover:text-red-500 duration-300"
                ></i>

                <div>
                  <p class="text-sm text-gray-500">Номер телефона</p>
                  <a class="text-sm font-medium" href="tel:+998712000770"
                    >+998 (71) 200-07-70</a
                  >
                </div>
              </div>
            </div>
            <!-- email -->
            <div
              class="flex flex-col md:flex-col lg:flex-row sm:flex-row gap-4"
            >
              <div
                class="flex border items-center w-full border-gray-400 rounded-xl pt-2.5 pb-2 pl-2 gap-2 lg:hover:border-red-500 duration-300 transition-all cursor-pointer group"
              >
                <i
                  class="icon-email text-3xl gap-2 text-gray-100 lg:hover:text-red-500 duration-300"
                ></i>

                <div>
                  <p class="text-sm text-gray-500">Электронная почта</p>
                  <a
                    class="text-sm font-medium"
                    href="mailto:toshkentparfum@gmail.com"
                    >toshkentparfum@gmail.com</a
                  >
                </div>
              </div>
              <!-- address -->
              <div
                class="flex border items-center w-full border-gray-400 rounded-xl pt-2.5 pb-2 pl-2 gap-2 lg:hover:border-red-500 duration-300 transition-all cursor-pointer group"
              >
                <i
                  class="icon-location text-3xl gap-2 text-gray-100 lg:hover:text-red-500 duration-300"
                ></i>

                <div>
                  <p class="text-sm text-gray-500">Адресс</p>
                  <a
                    class="text-sm font-medium"
                    href="https://yandex.uz/maps/-/CHUPEW9Y"
                    >Адхама Рахмата, 15/1</a
                  >
                </div>
              </div>
            </div>

            <div class="flex gap-4 mt-6">
              <a
                href="#"
                class="text-gray-100 lg:hover:text-red-500 group lg:hover:bg-red-700 transition-all duration-300 cursor-pointer bg-white-500 px-3 py-2 rounded-xl"
              >
                <i class="icon-twitter"></i>
              </a>
              <a
                href="#"
                class="text-gray-100 lg:hover:text-red-500 group lg:hover:bg-red-700 transition-all duration-300 cursor-pointer bg-white-500 px-3 py-2 rounded-xl"
              >
                <i class="icon-instagram"></i>
              </a>
              <a
                href="#"
                class="text-gray-100 lg:hover:text-red-500 group lg:hover:bg-red-700 transition-all duration-300 cursor-pointer bg-white-500 px-3 py-2 rounded-xl"
              >
                <i class="icon-instagram"></i>
              </a>
              <a
                href="#"
                class="text-gray-100 lg:hover:text-red-500 group lg:hover:bg-red-700 transition-all duration-300 cursor-pointer bg-white-500 px-3 py-2 rounded-xl"
              >
                <i class="icon-telegram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      style="position: relative; overflow: hidden"
      class="overflow-hidden my-10 h-[250px] sm:h-[200px] md:h-[350px] lg:h-[424px]"
    >
      <iframe
        src="https://yandex.uz/map-widget/v1/?ll=69.267465%2C41.341187&mode=search&oid=168841077264&ol=biz&z=17.26"
        class="w-full"
        height="424"
        frameborder="1"
        allowfullscreen="true"
      ></iframe>
    </div>
  </div>
</template>

<script setup></script>
