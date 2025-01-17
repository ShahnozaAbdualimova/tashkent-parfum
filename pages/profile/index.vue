<template>
  <div class="h-screen container">
    <BaseBreadCrumb />
    <h1
      class="text-black-500 leading-[130%] text-[32px] font-semibold mt-5 mb-6"
    >
      Профиль
    </h1>
    <!-- Main Profile Wrapper -->
    <div class="w-full">
      <!-- Main Profile Navbar -->
      <nav class="w-96 bg-white p-4 rounded-xl h-[600px]">
        <!-- Profile Header -->
        <div class="flex items-center gap-4">
          <div
            class="w-20 h-20 rounded-full overflow-hidden border-[1.5px] border-gray-500"
          >
            <img
              src="/images/profile.png"
              alt=""
              class="object-cover w-full h-full"
            />
          </div>
          <div>
            <h2 class="font-normal text-xl text-black-500">
              Мухаммадамин Домлахонов
            </h2>
          </div>
        </div>
        <!-- Profile Divider -->
        <hr class="my-5 h-px border-none bg-white-500" />
        <!-- Profile Links -->
        <ul class="flex flex-col">
          <li v-for="item of navItems">
            <NuxtLink to="/profile" class="p-3">{{ item.title }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <!-- Main Profile Content -->
      <div></div>
    </div>
  </div>
</template>

<script setup>
const navItems = reactive([
  {
    title: 'Персональные данные',
    link: '/profile',
  },
  {
    title: 'Мои карты',
    link: '/profile',
  },
  {
    title: 'Настройки',
    link: '/profile',
  },
  {
    title: 'Инструкции',
    link: '/profile',
  },
  {
    title: 'Правила пользования',
    link: '/profile',
  },
  {
    title: 'Кешбек',
    link: '/profile',
  },
  {
    title: 'Помощь',
    link: '/profile',
  },
]);
</script>
