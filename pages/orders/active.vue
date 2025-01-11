<template>
  <div class="container mx-auto  items-center">
    <div class="max-w-[780px] mb-14 bg-white rounded-lg p-5 shadow-md">
    <div
      v-for="order in orders"
      :key="order.id"
      class=" "
    >
      <div class="items-center flex">
        <div class="">
          <img
            :src="order.mainImage"
            :alt="'Order ' + order.id"
            class="w-[120px] rounded-lg object-cover"
          />
        </div>
        <div class="flex flex-col ml-5">
          <h3 class="text-lg font-bold mb-2 text-black-500">#{{ order.id }}</h3>
          <p class="text-sm text-gray-500 mb-1">
            Всего: {{ order.itemCount }} товаров
          </p>
          <p class="text-sm text-gray-500">Адрес: {{ order.address }}</p>
          <div
            class="mt-2 flex items-center gap-2 bg-yellow-100/20 rounded-lg p-1"
          >
            <i class="icon-history text-[20px] text-yellow-100"></i>
            <span class="text-sm">В процессе доставки</span>
          </div>
        </div>
        <div class="text-lg font-bold text-black-500 ml-8">
          {{ formatPrice(order.price) }} UZS
        </div>
      </div>
      <div class="border border-white-500 my-5"></div>
    </div>
  </div>
  </div>
  
</template>

<script setup>
import { ref } from 'vue';

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
</script>
