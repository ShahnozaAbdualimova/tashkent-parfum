<template>
  <div class="container mb-40">
    <h2
      class="text-black-500 font-proxima leading-[130%] text-[32px] font-semibold"
    >
      Оформление заказа
    </h2>
    <div class="grid grid-cols-12 space-x-6 mt-6 items-start">
      <div class="w-full lg:col-span-8 col-span-12">
        <BaseStepper :steps :active-step></BaseStepper>

        <div class="bg-white rounded-xl mt-5">
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

const steps = ref([
  {
    id: 1,
    label: 'Адрес доставки',
    icon: 'icon-location',
  },
  {
    id: 2,
    label: 'Контактные данные',
    icon: 'icon-contact',
  },
  {
    id: 3,
    label: 'Оплата',
    icon: ' icon-wallet',
  },
]);
const activeStep = computed(() => {
  const statusMap = {
    address: 1,
    contacts: 2,
    payment: 3,
  };
  return statusMap[checkoutStatus.value];
});
</script>
