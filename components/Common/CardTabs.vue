<template>
  <div class="flex flex-wrap gap-6 items-center">
    <button
      v-for="(card, index) in cards"
      :key="index"
      :class="[
        'tab-button flex items-center gap-1',
        { active: activeTab === index },
      ]"
      @click="selectTab(index)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="4"
        height="36"
        viewBox="0 0 4 36"
        fill="none"
      >
        <path
          d="M0 0C2.20914 0 4 1.79086 4 4V32C4 34.2091 2.20914 36 0 36V0Z"
          :fill="activeTab === index ? '#F62559' : '#EAEBED'"
        />
      </svg>
      <img :src="getCardImage(card)" alt="card img" class="min-w-[50px] min-h-[50px]" />
      <span class="pl-1">{{ card }}</span>
    </button>
  </div>
</template>

<script setup>
defineProps({
  cards: {
    type: Array,
    required: true,
  },
});

const activeTab = ref(0);

const selectTab = (index) => {
  activeTab.value = index;
};

const getCardImage = (cardNumber) => {
  if (!cardNumber) return '/svg/uzum.svg';

  const firstFour = cardNumber.slice(0, 4);
  const cardImages = {
    8600: '/svg/uzcard.svg',
    5440: '/svg/humo.svg',
    4400: '/svg/visa.svg',
    5400: '/svg/mastercard.svg',
  };

  return cardImages[firstFour] || '/svg/uzum.svg';
};
</script>

<style scoped>
.tab-button {
  @apply relative py-2  pr-6 h-[66px] min-w-[231px]  border border-gray-400 rounded-xl transition ease-in-out duration-300 text-center text-black-500  font-bold text-sm leading-[130%];
}
.tab-button.active {
  @apply border-2 border-red-500 shadow-[0px_8px_24px_0px_rgba(246,37,89,0.10)] bg-red-50;
}
</style>
