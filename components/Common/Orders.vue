<template>
  <div class="container mx-auto my-6">
    <h1 class="text-2xl font-bold">Мои заказы</h1>
    <div class="flex gap-6 mt-6 mb-36">
      <div class="w-[380px]">
        <div class="bg-white p-4 rounded-xl gap-2">
          <div
            class="flex items-center py-3 pl-3 rounded-lg gap-3 transition-colors duration-200"
            :class="activeTab === 'active' ? 'bg-red-100' : 'bg-white-500'"
            @click="activeTab = 'active'"
          >
            <div
              class="bg-gray-500 p-1 rounded items-center"
              :class="activeTab === 'active' ? 'bg-red-500' : 'bg-gray-500'"
              @click="activeTab = 'active'"
            >
              <i
                class="icon-active text-[24px] text-gray-200"
                :class="activeTab === 'active' ? 'text-white' : 'text-gray-200'"
                @click="activeTab = 'active'"
              ></i>
            </div>
            <p class="text-black-500">Активные заказы</p>
          </div>

          <div
            class="flex items-center py-3 pl-3 mt-2 rounded-lg gap-3 transition-colors duration-200"
            :class="activeTab === 'history' ? 'bg-red-100' : 'bg-white-500'"
            @click="activeTab = 'history'"
          >
            <div
              class="bg-gray-500 p-1 rounded items-center"
              :class="activeTab === 'active' ? 'bg-red-500' : 'bg-gray-500'"
              @click="activeTab = 'active'"
            >
              <i
                class="icon-history text-[24px] text-white"
                :class="activeTab === 'active' ? 'text-white' : 'text-gray-200'"
                @click="activeTab = 'active'"
              ></i>
            </div>
            <p class="text-black-500">История заказов</p>
          </div>
        </div>
      </div>

      <div v-if="filteredOrders.length" class="space-y-4 w-[780px]">
        <div
          v-for="order in filteredOrders"
          :key="order.id"
          class="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4"
        >
          <div class="text-4xl">{{ order.image }}</div>
          <div class="flex-1">
            <div class="flex justify-between items-start mb-2">
              <div>
                <span class="font-medium">{{ order.id }}</span>
                <div class="text-sm text-gray-500">
                  Всего: {{ order.items }} товаров
                </div>
                <div class="text-sm text-gray-500">
                  Адрес: {{ order.address }}
                </div>
              </div>
              <div class="text-right">
                <div class="font-medium">
                  {{ order.amount.toLocaleString() }} UZS
                </div>
                <span
                  :class="[
                    'text-sm',
                    order.status === 'delivered'
                      ? 'text-green-500'
                      : 'text-orange-500',
                  ]"
                >
                  {{
                    order.status === 'delivered'
                      ? 'Доставлено'
                      : 'В процессе доставки'
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p v-else class="text-gray-500 text-center">Заказы отсутствуют.</p>
    </div>
  </div>
</template>

<script setup lang="ts">


interface Order {
  id: string;
  items: number;
  address: string;
  status: 'delivered' | 'pending';
  amount: number;
  image: string;
}

const activeTab = ref<'active' | 'history'>('history');

const orders: Order[] = [
  {
    id: '#346283',
    items: 7,
    address: 'Мирабадский р-н., ул. Ойбек 26',
    status: 'delivered',
    amount: 650000,
    image: '📦',
  },
  {
    id: '#746183',
    items: 7,
    address: 'Чиланзарский р-н., ул. Шурчи 27',
    status: 'pending',
    amount: 2820000,
    image: '📦',
  },
  {
    id: '#758474',
    items: 6,
    address: 'Чиланзарский р-н., ул. Шурчи 27',
    status: 'pending',
    amount: 3870000,
    image: '📦',
  },
  {
    id: '#468431',
    items: 5,
    address: 'Мирабадский р-н., ул. Ойбек 26',
    status: 'delivered',
    amount: 1300000,
    image: '📦',
  },
];

const filteredOrders = computed(() => {
  return activeTab.value === 'active'
    ? orders.filter((order) => order.status === 'pending')
    : orders.filter((order) => order.status === 'delivered');
});
</script>

<style>
body {
  background-color: #f5f5f5;
}
</style>
