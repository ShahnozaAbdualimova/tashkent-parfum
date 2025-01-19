<template>
  <div class="h-screen container mb-[200px]">
    <BaseBreadCrumb />
    <h1
      class="text-black-500 leading-[130%] text-[32px] font-semibold mt-5 mb-6"
    >
      Профиль
    </h1>
    <!-- Main Profile Wrapper -->
    <div class="w-full flex">
      <!-- Main Profile Navbar -->
      <nav class="w-96 bg-white p-4 rounded-xl">
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
            <h2 class="font-semibold text-xl text-black-500">
              Мухаммадамин Домлахонов
            </h2>
          </div>
        </div>
        <!-- Profile Divider -->
        <hr class="my-5 h-px border-none bg-white-500" />
        <!-- Profile Links -->
        <ul class="flex flex-col gap-2">
          <li v-for="item of navItems" class="flex">
            <NuxtLink
              :to="item.link"
              class="flex items-center w-full p-3 border-[1.2px] border-transparent group rounded-lg gap-3 bg-white-500 hover:bg-white-100 hover:border-red-500 transition-300"
              ><span
                class="w-8 h-8 rounded flex items-center justify-center bg-gray-500 group-hover:bg-red-200 transition-300"
              >
                <i
                  :class="item.icon"
                  class="text-2xl text-white group-hover:text-red-500 transition-300"
                ></i>
              </span>
              {{ item.title }}</NuxtLink
            >
          </li>
        </ul>
      </nav>
      <!-- Main Profile Content -->
      <div>
        <NuxtPage />
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const navItems = reactive([
  {
    title: 'Персональные данные',
    link: '/profile',
    icon: ' icon-user',
  },
  {
    title: 'Мои карты',
    link: '/my-card',
    icon: 'icon-card',
  },
  {
    title: 'Настройки',
    link: '/profile',
    icon: 'icon-settings',
  },
  {
    title: 'Инструкции',
    link: '/profile',
    icon: 'icon-instructions',
  },
  {
    title: 'Правила пользования',
    link: '/profile',
    icon: ' icon-important',
  },
  {
    title: 'Кешбек',
    link: '/profile',
    icon: ' icon-cashback',
  },
  {
    title: 'Помощь',
    link: '/profile',
    icon: 'icon-help',
  },
]);
</script>
