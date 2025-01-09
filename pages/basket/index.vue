<template>
  <div class="container w-full min-h-screen">
    <h1 class="text-black-500 font-proxima leading-[130%] text-[32px] font-semibold">
      Корзина
    </h1>
    <div class="flex gap-6 items-center mt-6">
      <div class="bg-white rounded-xl">
        <BasketItem
          v-for="el in arr"
          :key="el.id"
          :data="el"
          @updateAmount="updateAmount"
        />
      </div>
    </div>
  </div>
</template>

<script setup>


const arr = ref([
  {
    id: 1,
    name: 'Today Parfum туалетная вода Absolute',
    img: '/images/cards/face.svg',
    stars: 4.5,
    review_amount: 2,
    price: 650000,
    amount: 1,
    old_price: null
  },
  {
    id: 2,
    name: 'Armand Basi парфюмерная  вода In RED',
    img: '/images/cards/parfumeria.svg',
    stars: 3.25,
    review_amount: 68,
    price: 940000,
    amount: 3,
    old_price: 1500000
  },
  {
    id: 3,
    name: 'Dilis Parfum духи  Classic Collection',
    img: '/images/cards/hair.svg',
    stars: 2.5,
    review_amount: 38,
    price: 670000,
    amount: 2,
    old_price: null
  },
]);


const updateAmount = (id, amount) => {
  const item = arr.value.find((item) => item.id === id);
  if (item) {
    item.amount = amount;
  }
};
</script>
