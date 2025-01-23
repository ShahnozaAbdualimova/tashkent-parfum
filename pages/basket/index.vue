<template>
  <div class="container w-full min-h-screen pb-40">
    <h1
      class="text-black-500  leading-[130%] text-[32px] font-semibold"
    >
      Корзина
    </h1>
    <div class="grid grid-cols-12 space-x-6 mt-6 items-start">
      <div class="bg-white rounded-xl w-full lg:col-span-8 col-span-12">
        <BasketItem
          v-for="el in arr"
          :key="el.id"
          :data="el"
          @updateAmount="updateAmount"
        />
      </div>
      <div class="lg:col-span-4 col-span-12 mt-4 lg:mt-0">
        <BasketInvoice
          :totalPrice="totalPrice"
          :totalItems="totalItems"
          :totalDiscount="totalDiscount"
          :totalArr="totalArr"
        />

        <button
          @click="basketSubmit"
          class="mt-4 w-full font-semibold py-3 px-[22px] rounded-xl bg-red-500 hover:bg-[#FA0738] text-white leading-[26px] active:scale-95 duration-200 ease-in-out"
        >
          Перейти к оформлению
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

const arr = ref([
  {
    id: 1,
    name: 'Today Parfum туалетная вода Absolute',
    img: '/images/cards/face.svg',
    stars: 4.5,
    review_amount: 2,
    price: 650000,
    amount: 1,
    discount: null,
  },
  {
    id: 2,
    name: 'Armand Basi парфюмерная  вода In RED',
    img: '/images/cards/parfumeria.svg',
    stars: 3.25,
    review_amount: 68,
    price: 940000,
    amount: 1,
    discount: 560000,
  },
  {
    id: 3,
    name: 'Dilis Parfum духи  Classic Collection',
    img: '/images/cards/hair.svg',
    stars: 2.5,
    review_amount: 38,
    price: 670000,
    amount: 2,
    discount: null,
  },
]);

const updateAmount = (id, amount) => {
  const item = arr.value.find((item) => item.id === id);
  if (item) {
    item.amount = amount;
  }
};

const totalPrice = computed(() => {
  return arr.value.reduce((sum, item) => sum + item.price * item.amount, 0);
});

const totalItems = computed(() => {
  return arr.value.reduce((sum, item) => sum + item.amount, 0);
});
const totalArr = computed(() => {
  return arr.value;
});

const totalDiscount = computed(() => {
  return arr.value.reduce((sum, item) => sum + item.discount * item.amount, 0);
});

const basketSubmit = () => {
  const data = {
    totalArr: totalArr.value,
    totalPrice: totalPrice.value,
    totalItems: totalItems.value,
    totalDiscount: totalDiscount.value,
  };
  localStorage.setItem('basketData', JSON.stringify(data));

  router.push('/checkout');
};
</script>
