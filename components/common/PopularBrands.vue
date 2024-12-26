<template>
  <div class=" tickers w-full ">
    <div class=" ticker marquee overflow-hidden">
      <img :src="brand.logo" :alt="brand.name" class="shadow-md rounded-lg items-center gap-4 p-4 ml-3" />
      
    </div>
  </div>
</template>

<script setup>
defineProps({
  brand: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.ticker-inline {
  margin: 0 auto;
  overflow: hidden;
}



.tickers {
  position: relative;
  display: inline-block;
  white-space: nowrap;
  animation: marquee 8s linear infinite;
  
}


.ticker {
  display: flex;
  color: #969696;
  animation: marquee 8s linear infinite;
  white-space: nowrap;
  margin: 0 auto;
  
}

@keyframes marquee {
  0% {
    transform: translateX(-300%);
  }
  100% {
    transform: translateX(300%);
  }
}




</style>
