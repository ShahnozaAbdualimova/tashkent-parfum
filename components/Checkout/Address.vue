<template>
  <CheckoutWrapper>
    <CheckoutAddressForm
      :location="locationInfo"
      @updateLocation="handleLocationUpdate"
    />
    <CheckoutMap
      @getAddress="handleLocationFetched"
      :locationFromInput="locationFromInput"
    />
  </CheckoutWrapper>
</template>

<script setup>
const locationInfo = ref(null);
const locationFromInput = ref(null);
const handleLocationFetched = (data) => {
  locationInfo.value = data;
};
const handleLocationUpdate = (locationData) => {
  locationFromInput.value = locationData;
};
</script>
