<template>
  <div class="container w-full mb-32">
    <BaseBreadCrumb />
    <h1
      class="text-black-500 leading-[130%] text-xl md:text-[32px] font-bold mt-5 mb-6"
    >
      Профиль
    </h1>
    <div class="flex md:flex-row flex-col gap-6 justify-between">
      <nav class="md:w-1/3 bg-white p-4 rounded-xl">
        <!-- Profile Header -->
        <div
          class="flex md:flex-row flex-col items-center gap-4 max-w-[225px] mx-auto sm:max-w-full"
        >
          <div
            class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[1.5px] border-gray-500"
          >
            <img
              src="/images/profile.png"
              alt="Profile Image"
              class="object-cover w-full h-full"
            />
          </div>
          <div>
            <h3
              class="font-semibold text-lg text-center sm:text-left sm:text-xl text-black-500"
            >
              Мухаммадамин Домлахонов
            </h3>
          </div>
        </div>
        <!-- Profile Divider -->
        <hr class="my-5 h-px border-none bg-white-500" />
        <!-- Profile Links -->
        <ul class="flex flex-col gap-2">
          <li v-for="item of navItems" class="flex">
            <NuxtLink
              :to="item.link"
              class="flex items-center w-full p-3 font-semibold border-[1.2px] border-transparent group rounded-lg gap-3 hover:bg-white-100 hover:border-red-500 transition-300"
              :class="
                isActive === item.active ? 'bg-red-500/10' : 'bg-white-500'
              "
              ><span
                class="w-8 h-8 rounded flex items-center justify-center bg-gray-500 group-hover:bg-red-200 transition-300"
                :class="isActive === item.active ? 'bg-red-500' : ''"
              >
                <i
                  :class="item.icon"
                  class="text-2xl text-white group-hover:text-red-500 transition-300"
                ></i>
              </span>
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="md:w-2/3">
        <Transition>
          <NuxtPage />
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const isActive = computed(() => route.path.split('/').reverse()[0]);

const navItems = reactive([
  {
    title: 'Персональные данные',
    link: '/profile',
    icon: ' icon-user',
    active: 'profile',
  },
  {
    title: 'Мои карты',
    link: '/profile/my-card',
    icon: 'icon-card',
    active: 'my-card',
  },
  {
    title: 'Настройки',
    link: '/profile/settings',
    icon: 'icon-settings',
    active: 'settings',
  },
  {
    title: 'Инструкции',
    link: '/profile/instructions',
    icon: 'icon-instructions',
    active: 'instructions',
  },
  {
    title: 'Правила пользования',
    link: '/profile/rules',
    icon: ' icon-important',
    active: 'rules',
  },
  {
    title: 'Кешбек',
    link: '/profile/cashback',
    icon: ' icon-cashback',
    active: 'cashback',
  },
  {
    title: 'Помощь',
    link: '/profile/help',
    icon: 'icon-help',
    active: 'help',
  },
]);

import { useRoute } from 'vue-router';
</script>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.7s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
