<template>
  <div class="p-5">
    <h3
      class="text-black-500 font-proxima text-2xl font-semibold pb-4 border-b border-white-500"
    >
      Адрес доставки
    </h3>
    <div class="min-h-[600px]"><CheckoutMap/></div>
    <div class="pt-5 border-t border-white-500 flex justify-between">
      <button
        @click="router.back()"
        class="flex items-center gap-1.5 text-sm py-2.5 px-10 rounded-lg bg-gray-400 hover:bg-gray-300 text-black-500 active:scale-95 duration-200 ease-in-out"
      >
        <i class="icon-left rotate-180"></i>
        <span>В корзину</span>
      </button>
      <button
        class="flex items-center gap-1.5 text-sm py-2.5 px-10 rounded-lg bg-red-500 hover:bg-[#FA0738] text-white active:scale-95 duration-200 ease-in-out"
      >
        <span>Продолжить</span>
        <i class="icon-left"></i>
      </button>
    </div>
  </div>
</template>
<script setup>
const router = useRouter();
</script>
