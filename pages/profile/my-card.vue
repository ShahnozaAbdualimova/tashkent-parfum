<template>
  <!-- Profile Info -->
  <div class="h-[350px] bg-white rounded-xl p-5">
    <!-- Profile Info Header -->
    <div class="flex items-center justify-between">
      <h2 class="font-bold text-2xl text-black-500">Мои карты</h2>
      <BaseButton variant="lightDanger" class="px-9 rounded-md gap-1 font-semibold" @click="console.log('click')">
        <i class="icon-plus text-xl w-5 h-5 flex items-center justify-center"></i>
        Добавить
      </BaseButton>
    </div>
    <hr class="mt-2.5 h-px border-none bg-white-500" />
    <div class="grid grid-cols-2 gap-6 mt-5">
      <div class="bg-white p-4 rounded-2xl flex  justify-between border border-white-400 items-center overflow-hidden"
        v-for="card in cards" :key="card.id">
        <div class="flex items-center gap-4">
          <img :src="card.cardImg" alt="card-img" />
          <h4 class="text-black-500  text-base font-semibold">{{ card.cardNumber }}</h4>
        </div>
        <i
          class="icon-trash text-3xl flex items-center justify-center cursor-pointer hover:text-red-500 duration-300"></i>
      </div>
    </div>
  </div>
</template>
<script setup>
const cards = ref([
  {
    id: 1,
    cardNumber: '8600 81** **** 1234 ',
    cardImg: '/svg/humo.svg',
  },
  {
    id: 2,
    cardNumber: '4400 81** **** 1234 ',
    cardImg: '/svg/visa.svg',
  },
  {
    id: 3,
    cardNumber: '8600 81** **** 1234 ',
    cardImg: '/svg/uzcard.svg',
  },
  {
    id: 4,
    cardNumber: '5400 81** **** 1234 ',
    cardImg: '/svg/uzcard-logo.svg',
  },
]);
</script>  