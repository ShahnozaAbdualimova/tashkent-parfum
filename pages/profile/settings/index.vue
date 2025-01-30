<template>
  <div class="flex items-center gap-6">
    <NuxtLink
      :to="item.link"
      v-for="item in settingsData"
      :key="item.id"
      class="flex gap-2 items-center p-5 bg-white rounded-xl cursor-pointer w-full group"
    >
      <i
        class="w-8 h-8 flex items-center justify-center text-2xl text-gray-100 group-hover:text-red-500 transition-300"
        :class="item.icon"
      ></i>
      <p
        class="text-xl text-black-500 font-semibold group-hover:text-red-500 transition-300"
      >
        Изменить пароль
      </p>
    </NuxtLink>
  </div>
</template>

<script setup>
const settingsData = reactive([
  {
    id: 1,
    title: 'Изменить пароль',
    icon: 'icon-lock',
    link: '/profile/settings/change-password',
  },
  {
    id: 2,
    title: 'Изменить номер телефона',
    icon: 'icon-help',
    link: '/profile/settings/change-number',
  },
]);
</script>
