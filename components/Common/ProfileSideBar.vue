<template>
  <div class="w-[380px]">
    <h2 class="font-normal text-3xl text-black-500">Мои заказы</h2>

    <div class="bg-white mt-6 p-4 rounded-xl gap-2">
      <div
        
        class="flex items-center py-3 pl-3 bg-red-100 rounded-lg gap-3"
      >
        <i class="icon-active text-[24px] text-white focus:bg-red-500"></i>
        <p>Активные заказы</p>
      </div>

      <div class="flex bg-white-500 items-center py-3 pl-3 rounded-lg gap-3 mt">
        <div class="bg-gray-500 p-2 rounded items-center">
          <i class="icon-history text-[24px] text-gray-200"></i>
        </div>
        <p>История заказов</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>
