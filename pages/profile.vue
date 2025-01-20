<template>
  <div class="container w-full mb-32">
    <BaseBreadCrumb />
    <h1
      class="text-black-500 leading-[130%] text-[32px] font-bold mt-5 mb-6"
    >
      Профиль
    </h1>
    <div class="flex gap-6 justify-between">
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
            <h3 class="font-semibold text-xl text-black-500">
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
      <div class="flex-1">
        <NuxtPage />
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
</script>
