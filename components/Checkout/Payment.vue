<template>
  <CheckoutWrapper title="Оплата">
    <div class="py-3">
      <CommonTab v-model="activeTab" :tabs="tabs" />
      <Transition name="fade" mode="out-in">
      <div
        v-if="activeTab === 'card'"
        class="pt-4"

      >
        <CommonCardTabs :cards="cards" @tabSelected="handleTabSelected" />
        <Transition name="fade" mode="out-in">
        <button
          @click="addCard"
          v-if="!showInput"
          class="mt-4 active:scale-95 hover:bg-red-100 duration-200 ease-in-out text-red-500 bg-red-950 py-2 px-4 rounded-lg font-proxima font-semibold leading-[24px] flex items-center gap-1"
        >
          <i class="icon-plus text-2xl" />
          <span class="text-sm">Добавить карту</span>
        </button>
        <div v-else class="flex items-center gap-6 mt-5">
          <div class="w-[258px]">
          <p class="text-gray-200 text-sm font-medium pb-2">Номер карты</p>
            <BaseInput
              class="w-full"
              placeholder="____-____-____-____"
              v-maska="{ mask: '####  ####  ####  ####' }"
            />
          </div>
          <div class=" flex items-center gap-2">
            <div class="w-[77px]">
            <p class="text-gray-200 text-sm font-medium pb-2">Срок</p>
            <BaseInput

              placeholder="__/__"
              v-maska="{ mask: '##/##' }"
            />
            </div>
            <button
              @click="addCard"
              class="icon-cancel text-gray-200 text-2xl hover:text-red-500 duration-200 ease-in-out"
            ></button>
          </div>



          </div>

        </Transition>
      </div>
      <div v-else class="flex items-center gap-6 justify-center py-3">
        <CommonPaymentTabs :cards="payments" @tabSelected="handleTabSelected" />
      </div>
      </Transition>
    </div>

    <div class="pt-5 border-t border-white-500 flex justify-between">
      <button
        @click="$emit('switchToContacts')"
        class="flex items-center gap-1.5 text-sm py-2.5 px-10 rounded-lg bg-gray-400 hover:bg-gray-300 text-black-500 active:scale-95 duration-200 ease-in-out"
      >
        <i class="icon-left rotate-180"></i>
        <span>Назад</span>
      </button>
      <button
        class="flex items-center gap-1.5 text-sm py-2.5 px-10 rounded-lg bg-red-500 hover:bg-[#FA0738] text-white active:scale-95 duration-200 ease-in-out"
      >
        <span>Продолжить</span>
        <i class="icon-left"></i>
      </button>
    </div>
  </CheckoutWrapper>
</template>

<script setup>
onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const activeTab = ref('card');

const tabs = [
  { label: 'Банковской картой', value: 'card' },
  { label: 'Платежные услуги', value: 'services' },
];

const cards = [
  '5440 8111 **** 1234',
  '8600 81** **** 1234',
  '5440 81** **** 1234',
]
const payments = [
  'cash',
  'uzum',
  'payme',
  'click',
  'paynet',
]

const handleTabSelected = index => {
  console.log('Selected tab index:', index)
}
const showInput = ref(false);
const addCard = () => {
  showInput.value = !showInput.value;
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
