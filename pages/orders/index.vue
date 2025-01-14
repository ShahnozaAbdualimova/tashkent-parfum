<template>
  <section class="container mx-auto my-6">
    <h1 class="text-2xl font-bold">Мои заказы</h1>
    <div class="flex gap-6 mt-6 mb-36">
      
      <div class="bg-white p-4 rounded-xl gap-2 w-[380px]">
        <ul class="">
          <li class="rounded-lg">
      <NuxtLink
        to="/orders/active"
        class="flex items-center w-full p-3 rounded-lg transition-colors duration-200"
        :class="[
          route.path === '/orders/active'
            ? 'bg-blue-300 text-white'
            : 'hover:bg-gray-50 text-blue-400'
        ]"
      >
        <span class="bg-gray-500 p-2 rounded flex items-center justify-center">
          <i class="icon-active text-2xl text-gray-200"></i>
        </span>
        <span class="ml-3 text-black-500">Активные заказы</span>
      </NuxtLink>
    </li>

    

          <li
            class="flex items-center py-3 pl-3 rounded-lg gap-3 transition-colors duration-200"
          >
            <NuxtLink
              to="/orders/history"
              :class="{
                'bg-blue-300 text-white': $route.path === '/orders/history',
                'bg-transparent text-blue-400':
                  $route.path !== '/orders/history',
              }"
              class="flex items-center w-full p-2 rounded-lg space-x-3 transition-colors"
            >
              <span
                class="bg-gray-500 p-2 rounded flex items-center justify-center"
              >
                <i class="icon-history text-[24px] text-gray-200"></i>
              </span>
              <p class="text-black-500">История заказов</p>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex-1">
        <Active v-if="activeTab === 'activeOrders'" />
        <History v-if="activeTab === 'orderHistory'" />
      </div>
      
    </div>
  </section>
</template>
<script setup>
const route = useRoute();

// import { useRouter } from 'vue-router';


</script>
