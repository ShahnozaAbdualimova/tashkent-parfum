<template>
  <CheckoutWrapper>
    <CheckoutAddressForm :location="locationInfo"/>
    <CheckoutMap @getAddress="handleLocationFetched" />
  </CheckoutWrapper>
</template>

<script setup>
const locationInfo = ref(null);
const handleLocationFetched = (data) => {
  locationInfo.value = data;
};
</script>
