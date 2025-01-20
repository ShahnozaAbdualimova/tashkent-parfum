<template>
  <div class="bg-white p-5 rounded-xl w-full">
    <div class="pb-5 border-b border-white-500">
      <div class="flex justify-between items-center">
        <p class=" text-gray-100 text-xl leading-[130%]">
          Оплачиваемая сумма:
        </p>
        <h3
          class="text-black-500 text-2xl font-semibold leading-[130%] flex-shrink-0"
        >
          {{ totalPrice?.toLocaleString('fr-FR') }}
          <span
            class="text-gray-100  text-xl leading-[130%] font-medium"
            >uzs</span
          >
        </h3>
      </div>

      <div class="flex items-center gap-3 pt-5">
        <BaseToggle v-model="isToggled" />
        <p class="font-regular text-gray-100 text-[16px] leading-[130%]">
          Использовать кэшбэк
        </p>
      </div>
    </div>

    <div
      class="flex items-center justify-between py-3 border-b border-white-500"
    >
      <p class="label">Всего:</p>
      <p class="price">{{(totalDiscount+totalPrice)?.toLocaleString('fr-FR')}} uzs</p>
    </div>

    <div
      class="flex items-center justify-between py-3 border-b border-white-500"
    >
      <p class="label">Скидка:</p>
      <p class="price">- {{totalDiscount?.toLocaleString('fr-FR')}} uzs</p>
    </div>

    <div
      v-if="isToggled"
      class="flex items-center justify-between py-3 border-b border-white-500"
    >
      <p class="label">Использованный кешбек:</p>
      <p class="price"> 0 uzs</p>
    </div>

    <div class="flex items-center justify-between pt-3 pb-5">
      <p class="label">НДС:</p>
      <p class="price">{{(totalPrice*0.12)?.toLocaleString('fr-FR')}} uzs (12%)</p>
    </div>

    <div class="flex items-center justify-between -mx-5 px-5 py-3 bg-red-50">
      <p class="label red">Кэшбек:</p>
      <p class="price red">+ {{(totalPrice*0.05)?.toLocaleString('fr-FR')}} uzs (5%)</p>
    </div>

    <div  v-if="isToggled" class="flex items-center justify-between py-3">
      <p class="label">Остаток кэшбека:</p>
      <p class="price">0 uzs</p>
    </div>

    <div
      @click="toggleDropdown"
      class="flex items-center gap-1 pt-3 pb-5  cursor-pointer"
    >
      <p class="text-black-500 leading-[140%]">
        Товары
        <span class="font-regular text-gray-100 text-[16px] leading-[140%]"
          >({{totalArr?.length}})</span
        >
      </p>
      <i
        class="icon-chevron-down text-black-500 transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
      ></i>
    </div>

    <transition
      name="expand"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div v-if="isOpen" ref="dropdownContent">
        <div v-for="(el,index) of totalArr" :key="index" class="py-5 border-b border-white-500">
          <div class="flex items-center justify-between">
            <p class="label max-w-48">{{el.name}}:</p>
            <p class="price">{{ (el.price * el.amount)?.toLocaleString('fr-FR') }} UZS</p>
          </div>
          <p class="pt-1 font-semibold text-black-500 text-xs leading-[130%]">{{el?.price?.toLocaleString('fr-FR')}} UZS x {{el.amount}}</p>
        </div>

      </div>
    </transition>
  </div>
</template>

<script setup>
const props = defineProps({
  totalPrice: {
    type: Number,
    required: true,
  },
  totalItems: {
    type: Number,
    required: true,
  },
  totalDiscount: {
    type: Number,
    required: true,
  },
  totalArr:{
    type:Array,
    required:true,
  }
});

const isToggled = ref(false);
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const beforeEnter = (el) => {
  el.style.height = '0';
  el.style.overflow = 'hidden';
};

const enter = (el) => {
  el.style.height = el.scrollHeight + 'px';
  el.style.transition = 'height 0.3s ease';
  el.addEventListener(
    'transitionend',
    () => {
      el.style.height = 'auto';
    },
    { once: true }
  );
};

const leave = (el) => {
  el.style.height = el.scrollHeight + 'px';
  el.style.transition = 'height 0.3s ease';
  void el.offsetHeight;
  el.style.height = '0';
};
</script>

<style>
.label {
  @apply font-medium text-gray-200   leading-[140%];
}
.price {
  @apply font-semibold text-black-500   leading-[140%];
}
.red {
  @apply text-red-500;
}

.expand-enter-active,
.expand-leave-active {
  transition: height 0.3s ease;
}
</style>
