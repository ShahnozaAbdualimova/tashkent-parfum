<template>
  <CheckoutWrapper title="Оплата">
    <div class="min-h-[600px]"></div>
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
  window.scrollTo({ top: 0, behavior: "smooth" });
})
</script>
