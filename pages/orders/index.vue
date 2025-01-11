<template>
  <section class="container mx-auto my-6">
    <h1 class="text-2xl font-bold">Мои заказы</h1>
    <div class="flex gap-6 mt-6 mb-36">
      <div class="bg-white p-4 rounded-xl gap-2">
        <ul class="w-[380px]">
          <li
            class="flex items-center py-3 pl-3 rounded-lg gap-3 transition-colors duration-200"
          >
            <NuxtLink to="/orders/active">
              <span class="bg-gray-500 p-1 rounded items-center">
                <i class="icon-active text-[24px] text-gray-200"></i>
              </span>
              <p class="text-black-500">Активные заказы</p></NuxtLink
            >
          </li>

          <li
            class="flex items-center py-3 pl-3 rounded-lg gap-3 transition-colors duration-200"
          >
            <NuxtLink to="/orders/history">
              <span class="bg-gray-500 p-1 rounded items-center">
                <i class="icon-history text-[24px] text-gray-200"></i>
              </span>
              <p class="text-black-500">История заказов</p></NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup></script>
