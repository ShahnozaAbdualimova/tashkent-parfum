<template>
  <CheckoutWrapper title="Адрес доставки" prev-button="В корзину">
    <CheckoutAddressForm
      :location="locationInfo"
      @updateLocation="handleLocationUpdate"
    />

    <CheckoutMap
      :locationFromInput="locationFromInput"
      @getAddress="handleLocationFetched"
    />

    <div class="mt-6 pt-5 border-t border-white-500 flex justify-between">
      <button
        @click="router.back()"
        class="flex items-center gap-1.5 text-sm py-2.5 px-10 rounded-lg bg-gray-400 hover:bg-gray-300 text-black-500 active:scale-95 duration-200 ease-in-out"
      >
        <i class="icon-left rotate-180"></i>
        <span>В корзину</span>
      </button>
      <button
        @click="$emit('switchToContacts')"
        class="flex items-center gap-1.5 text-sm py-2.5 px-10 rounded-lg bg-red-500 hover:bg-[#FA0738] text-white active:scale-95 duration-200 ease-in-out"
      >
        <span>Продолжить</span>
        <i class="icon-left"></i>
      </button>
    </div>
  </CheckoutWrapper>
</template>

<script setup>
const router = useRouter();

const locationInfo = ref(null);
const locationFromInput = ref(null);
const handleLocationFetched = (data) => {
  locationInfo.value = data;
};
const handleLocationUpdate = (locationData) => {
  locationFromInput.value = locationData;
};
onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
</script>
