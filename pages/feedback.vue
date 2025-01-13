
<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Обратная связь</h1>
    <p class="text-gray-600 mb-8">
      Наша дружная команда будет рада слышать вас
    </p>

    <div class="grid md:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label class="block text-sm mb-2">Имя</label>
            <input
              type="text"
              v-model="form.name"
              placeholder="Напишите свое имя"
              class="w-full p-2 border rounded"
            />
          </div>

          <div class="mb-4">
            <label class="block text-sm mb-2">Номер телефона</label>
            <div class="flex">
              <span class="p-2 bg-gray-100 border rounded-l">+998</span>
              <input
                type="tel"
                v-model="form.phone"
                placeholder="__ ___-__-__"
                class="w-full p-2 border rounded-r"
              />
            </div>
          </div>

          <div class="mb-4">
            <label class="block text-sm mb-2">Текст</label>
            <textarea
              v-model="form.message"
              placeholder="Напишите текст"
              rows="4"
              class="w-full p-2 border rounded"
            ></textarea>
          </div>
          <div class="flex justify-end ">
          <BaseButton
            :variant="'basketBtn'"
            class=" w-[210px]"
            :type="'button'"
            :disabled="false"
          >
            Отправить
          </BaseButton>
        </div>
        </form>
      </div>

      <!-- Company Info -->
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-2xl font-bold mb-6">Tashkent Parfume</h2>
        <p class="text-gray-600 mb-8">
          Наслаждайтесь шоппингом и покупайте любимые ароматы и новинки по
          приятным ценам.
        </p>

        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div
              class="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-500">Время работы</p>
              <p>09:00 - 19:00</p>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <div
              class="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-500">Электронная почта</p>
              <p>toshkentparfum@gmail.com</p>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <div
              class="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-500">Адресс</p>
              <p>Чиланзар 28/16</p>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <div
              class="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-500">Номер телефона</p>
              <p>+998 (71) 200-07-70</p>
            </div>
          </div>

          <div class="flex gap-4 mt-6">
            <a href="#" class="text-gray-600 hover:text-pink-500">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
            <a href="#" class="text-gray-600 hover:text-pink-500">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
            </a>
            <a href="#" class="text-gray-600 hover:text-pink-500">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                />
              </svg>
            </a>
            <a href="#" class="text-gray-600 hover:text-pink-500">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const form = reactive({
  name: '',
  phone: '',
  message: '',
});

const submitForm = () => {
  // Handle form submission
  console.log(form);
};
</script>

