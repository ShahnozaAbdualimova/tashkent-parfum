<template>
  <!-- Profile Info -->
  <div class="h-[350px] bg-white rounded-xl p-5">
    <!-- Profile Info Header -->
    <div class="flex items-center justify-between">
      <h2 class="font-bold text-2xl text-black-500">Персональные данные</h2>
      <BaseButton
        variant="lightDanger"
        class="px-9 rounded-md gap-1"
        @click="console.log('click')"
      >
        Выйти
        <i
          class="icon-logout text-xl w-5 h-5 flex items-center justify-center"
        ></i>
      </BaseButton>
    </div>
  </div>
</template>

<script setup></script>
