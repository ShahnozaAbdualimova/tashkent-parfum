<template>
  <div class="w-full mb-14 bg-white rounded-lg p-4 md:p-5 shadow-sm">
    <div v-for="order in orders" :key="order.id">
      <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
        <div class="w-full sm:w-auto">
          <img
            :src="order.mainImage"
            :alt="'Order ' + order.id"
            class="sm:w-[120px] h-[120px] rounded-lg object-cover"
          />
        </div>
        <div class="flex-row">
          <NuxtLink :to="`${order.id}`">
            <h3
              class="text-lg font-bold mb-2 text-black-500 hover:text-red-500 transition-colors"
            >
              #{{ order.id }}
            </h3>
          </NuxtLink>
          <p class="text-sm text-gray-100 mb-1">
            Всего:
            <span class="text-black-500">{{ order.itemCount }} товаров</span>
          </p>
          <p class="text-sm font-normal text-gray-100">
            Адрес: <span class="text-black-500">{{ order.address }}</span>
          </p>
          <div
            class="mt-2 flex items-center gap-2 bg-yellow-100/20 rounded-lg p-1 w-fit"
          >
            <i class="icon-history text-[20px] text-yellow-100"></i>
            <span class="text-sm">В процессе доставки</span>
          </div>
        </div>
        <div class="text-lg font-bold text-black-500 sm:ml-auto">
          {{ formatPrice(order.price) }} UZS
        </div>
      </div>
      <div class="border border-white-500 my-5"></div>
    </div>
  </div>
</template>

<script setup>
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
</script>
