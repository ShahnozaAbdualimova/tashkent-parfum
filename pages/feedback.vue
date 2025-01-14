<template>
  <div class="">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-2xl sm:text-3xl font-bold mb-8 sm:mb-8">Обратная связь</h1>
      <p class="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
        Наша дружная команда будет рада слышать вас
      </p>

      <div class="grid md:grid-cols-2 gap-6">
        <!-- Contact Form -->
        <div class="bg-white p-6 rounded-xl">
          <form @submit.prevent="submitForm" class="flex flex-col items-end">
            <div class="flex gap-6">
              <div class="mb-4">
                <label class="block text-sm mb-2">Имя</label>
                <BaseInput placeholder="Напишите свое имя" class="w-[254px] rounded-lg" />
              </div>
              <div class="mb-4">
                <label class="block text-sm mb-2">Номер телефона</label>
                <div class="flex">
                  <CommonPhoneInput class="rounded-lg"/>
                </div>
              </div>
            </div>
            <div class="mb-4">
              <label class="block text-sm mb-2">Текст</label>
              <BaseInput
                placeholder="Напишите свое имя"
                class="w-[500px] pb-20 rounded-lg"
              />
            </div>
            <div class=" w-[210px]">
              <BaseButton
                :variant="'basketBtn'"
                class=""
                :type="'button'"
                :disabled="false"
              >
                Отправить
              </BaseButton>
            </div>
          </form>
        </div>

        <!-- Company Info -->
        <div class="bg-white p-6 rounded-xl">
          <h2 class="text-2xl font-bold mb-2">Tashkent Parfume</h2>
          <p class="text-gray-100 mb-5 text-base">
            Наслаждайтесь шоппингом и покупайте любимые ароматы и новинки по
            приятным ценам.
          </p>

          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <!-- clock -->
              <div
                class="flex border w-full border-gray-400 rounded-xl pt-2.5 pb-2 pl-2 gap-2 hover:border-red-500 duration-300 transition-all cursor-pointer group"
              >
                <i
                  class="icon-clock text-3xl text-gray-100 hover:text-red-500 duration-300"
                ></i>

                <div>
                  <p class="text-sm text-gray-500">Время работы</p>
                  <p class="text-sm font-medium">09:00 - 19:00</p>
                </div>
              </div>
              <!-- phone -->
              <div
                class="flex items-center border w-full border-gray-400 rounded-xl pt-2.5 pb-2 pl-2 gap-2 hover:border-red-500 duration-300 transition-all cursor-pointer group"
              >
                <i
                  class="icon-help text-2xl  text-gray-100 hover:text-red-500 duration-300"
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
            <div class="flex items-center gap-3">
              <div
                class="flex items-center border w-full border-gray-400 rounded-xl pt-2.5 pb-2 pl-2 gap-2 hover:border-red-500 duration-300 transition-all cursor-pointer group"
              >
                <i
                  class="icon-email text-3xl gap-2 text-gray-100 hover:text-red-500 duration-300"
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
                class="flex items-center border w-full border-gray-400 rounded-xl pt-2.5 pb-2 pl-2 gap-2 hover:border-red-500 duration-300 transition-all cursor-pointer group"
              >
                <i
                  class="icon-location text-3xl gap-2 text-gray-100 hover:text-red-500 duration-300"
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
                class="text-gray-100 hover:text-red-500 group hover:bg-red-700 transition-all duration-300 cursor-pointer bg-white-500 px-3 py-2 rounded-xl"
              >
                <i class="icon-twitter"></i>
              </a>
              <a
                href="#"
                class="text-gray-100 hover:text-red-500 group hover:bg-red-700 transition-all duration-300 cursor-pointer bg-white-500 px-3 py-2 rounded-xl"
              >
                <i class="icon-instagram"></i>
              </a>
              <a
                href="#"
                class="text-gray-100 hover:text-red-500 group hover:bg-red-700 transition-all duration-300 cursor-pointer bg-white-500 px-3 py-2 rounded-xl"
              >
                <i class="icon-instagram"></i>
              </a>
              <a
                href="#"
                class="text-gray-100 hover:text-red-500 group hover:bg-red-700 transition-all duration-300 cursor-pointer bg-white-500 px-3 py-2 rounded-xl"
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
      class="overflow-hidden mt-8"
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

<script setup>
const form = reactive({
  name: '',
  phone: '',
  message: '',
});

// Handle form submission
// const submitForm = () => {
//   console.log(form);
// };
</script>
