<template>
  <div class="container mb-40">
    <h2
      class="text-black-500 font-proxima leading-[130%] text-[32px] font-semibold"
    >
      Оформление заказа
    </h2>
    <div class="grid grid-cols-12 space-x-6 mt-6 items-start">
      <div class="bg-white rounded-xl w-full lg:col-span-8 col-span-12">
        <ClientOnly>
          <Transition name="fade" mode="out-in">
            <CheckoutAddress
              v-if="checkoutStatus === 'address'"
              @switchToContacts="showContacts"
            />
            <CheckoutContacts
              v-else-if="checkoutStatus === 'contacts'"
              @switchToAddress="showAddress"
              @switchToPayment="showPayment"
            />
            <CheckoutPayment v-else @switchToContacts="showContacts" />
          </Transition>
        </ClientOnly>
      </div>
      <div class="lg:col-span-4 col-span-12 mt-4 lg:mt-0">
        <BasketInvoice
          :totalPrice="basketData.totalPrice"
          :totalItems="basketData.totalItems"
          :totalDiscount="basketData.totalDiscount"
          :totalArr="basketData.totalArr"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const basketData = ref({});
const checkoutStatus = ref('address');

onMounted(() => {
  const data = localStorage.getItem('basketData');
  if (data) {
    basketData.value = JSON.parse(data);
  }
});

const showContacts = () => {
  checkoutStatus.value = 'contacts';
};
const showAddress = () => {
  checkoutStatus.value = 'address';
};
const showPayment = () => {
  checkoutStatus.value = 'payment';
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
