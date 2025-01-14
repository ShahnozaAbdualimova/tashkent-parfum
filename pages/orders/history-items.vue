<template>
  <div class="container mx-auto items-center">
    <div class="flex gap-4 items-center">
      <NuxtLink to="/orders/history"
        ><i
          class="icon-left rotate-90 text-[24px] bg-gray-500 p-2 rounded-md"
        ></i
      ></NuxtLink>

      <h3 class="text-black-500 font-bold text-3xl">#346283</h3>
    </div>

    <div class="flex flex-row mt-6 gap-6">
      <div class="w-[780px] mb-14 bg-white rounded-lg p-5 shadow-md">
        <div v-for="order in orders" :key="order.id" class=" ">
          <div class="items-center flex">
            <div class="">
              <img
                :src="order.mainImage"
                :alt="'Order ' + order.id"
                class="w-[120px] rounded-lg object-cover"
              />
            </div>
            <div class="flex flex-col ml-5">
              <NuxtLink to="/orders/history-items"
                ><h3 class="text-lg font-bold mb-2 text-black-500">
                  #{{ order.id }}
                </h3></NuxtLink
              >

              <p class="text-sm text-gray-500 mb-1">
                Всего: {{ order.itemCount }} товаров
              </p>
              <p class="text-sm text-gray-500">Адрес: {{ order.address }}</p>
              <div
                class="mt-2 flex items-center gap-2 bg-green-100/10 rounded-lg p-1"
              >
                <i class="icon-check text-[20px] text-green-100"></i>
                <span class="text-sm">Доставлено</span>
              </div>
            </div>
            <div class="text-lg font-bold text-black-500 ml-8">
              {{ formatPrice(order.price) }} UZS
            </div>
          </div>
          <div class="border border-white-500 my-5"></div>
        </div>
      </div>

      <div class="w-[380px] mb-11">
        
        <div class="bg-white p-5 rounded-lg shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-black-500 text-2xl font-bold">#346283</h4>
            <div
              class="mt-2 flex items-center gap-2 bg-green-100/10 rounded-lg p-1"
            >
              <i class="icon-check text-[20px] text-green-100"></i>
              <span class="text-sm">Доставлено</span>
            </div>
          </div>

          
          <div class="space-y-2 ">
            <div class="flex justify-between">
              <p class="text-gray-200 font-normal text-base">Получатель:</p>
              <p class="font-normal text-base">Мухаммадамин Долмаханов</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-200 font-normal text-base">Телефон номер:</p>
              <p class="font-normal text-base">+998 33 805 59 95</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-200 font-normal text-base">Адрес:</p>
              <p class="font-normal text-base">Мирабадский р-н, ул. Ойбек 26</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-200 font-normal text-base">
                Количество товаров:
              </p>
              <p class="font-normal text-base">4</p>
            </div>
          </div>
        </div>

        
        <div class="mt-6 bg-white p-5 rounded-lg shadow-sm">
          <h3 class="font-bold text-2xl text-black-500">Всего товаров</h3>
          <div class="space-y-2 mt-11">
            <div class="flex justify-between">
              <p class="text-gray-100 font-normal text-xl">Итого:</p>
              <p class="font-bold text-2xl">3 610 000</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-200 font-normal text-base">Всего:</p>
              <p class="font-normal text-base">3 710 000 uzs</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-200 font-normal text-base">Скидка:</p>
              <p class="font-normal text-base">-100 000 uzs</p>
            </div>
          </div>
          <div class="space-y-3 mt-11">
            
            <div
              @click="isOpen = !isOpen"
              class="flex gap-3 items-center cursor-pointer"
            >
              <p class="font-normal text-base">Товары</p>
              <i
                class="icon-chevron-down text-[] text-black-500 transition-transform duration-300"
                :class="{ 'rotate-180': isOpen }"
              ></i>
            </div>

            
            <div
              v-show="isOpen"
              class="space-y-4 transition-all duration-300 mt-6"
            >
              <div
                v-for="(item, index) in products"
                :key="index"
                class="flex justify-between"
              >
                <div>
                  <p class="font-normal text-base text-gray-200">
                    {{ item.name }}
                  </p>
                  <p class="font-normal text-base text-black-500 mt-0">
                    {{ item.price }} uzs x{{ item.quantity }}
                  </p>
                </div>
                <div>
                  <p class="font-normal text-base text-black-500">
                    {{ formatPrice(item.price * item.quantity) }} uzs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const route = useRoute();
const orders = ref([
  {
    id: '121334',
    itemCount: 7,
    address: 'Мирабадский р-н., ул. Ойбек 26',
    price: 650000,
    mainImage: '/images/card.png',
  },
  {
    id: '235482',
    itemCount: 7,
    address: 'Чиланзарский р-н., ул. Шухрат 27',
    price: 2820000,
    mainImage: '/images/card.png',
  },
  {
    id: '872364',
    itemCount: 7,
    address: 'Мирабадский р-н., ул. Ойбек 26',
    price: 1300000,
    mainImage: '/images/card.png',
  },
]);

const formatPrice = (price) => {
  return new Intl.NumberFormat('uz-UZ').format(price);
};

const isOpen = ref(true);

const products = ref([
  {
    name: 'Today Parfum туалетная вода Absolute',
    price: 650000,
    quantity: 1,
  },
  {
    name: 'Armand Basi парфюмерная вода In...',
    price: 650000,
    quantity: 3,
  },
  {
    name: 'Ellis Parfum духи Classic Collection',
    price: 650000,
    quantity: 2,
  },
]);
</script>
