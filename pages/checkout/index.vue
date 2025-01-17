<template>
  <div class="container w-full min-h-screen pb-40">
    <h2
      class="text-black-500  leading-[130%] text-[32px] font-semibold"
    >
      Оформление заказа
    </h2>
    <div class="grid grid-cols-12 space-x-6 mt-6 items-start">
      <div class="bg-white rounded-xl w-full lg:col-span-8 col-span-12">
        <CheckoutWrapper/>
      </div>
      <div class="lg:col-span-4 col-span-12 mt-4 lg:mt-0">
        <BasketInvoice :totalPrice="basketData.totalPrice" :totalItems="basketData.totalItems" :totalDiscount="basketData.totalDiscount" :totalArr="basketData.totalArr"/>
      </div>
    </div>
  </div>
</template>

<script setup>
const basketData = ref({});
onMounted(() => {
  const data = localStorage.getItem('basketData');
  if (data) {
    basketData.value = JSON.parse(data);

  }
});

</script>
