<template>
  <section class="container mx-auto px-4 my-6">
    <h1 class="text-2xl font-bold">Мои заказы</h1>
    <div class="flex flex-col mt-6 mb-36">
      <nav class="lg:hidden">
        <ul class="flex gap-2 bg-white p-4 rounded-xl">
          <li v-for="(nav, i) in navItems" :key="'ON' + i" class="flex-1">
            <NuxtLink
              :to="nav.routePath"
              class="flex items-center justify-center p-4 rounded-xl transition-colors duration-200"
              :class="isActive(nav.routePath) ? 'bg-red-500/10' : ''"
            >
              <span
                :class="isActive(nav.routePath) ? 'bg-red-500' : 'bg-gray-500'"
                class="p-2  rounded flex items-center justify-center transition-colors duration-200"
              >
                <i
                  class="text-xl md:text-2xl transition-colors duration-200"
                  :class="[
                    nav.icon,
                    isActive(nav.routePath) ? 'text-white' : 'text-gray-200',
                  ]"
                />
              </span>
              <span class="ml-3 text-sm md:text-base text-black-500">{{
                nav.name
              }}</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="hidden lg:flex flex-row gap-6">
        <nav class="w-1/3">
          <ul class="bg-white p-4 rounded-xl gap-2">
            <li v-for="(nav, i) in navItems" :key="'ON' + i">
              <NuxtLink
                :to="nav.routePath"
                class="flex items-center w-full p-3 rounded-lg transition-colors duration-200"
                active-class="bg-red-500/10 "
              >
                <span
                  :class="
                    isActive(nav.routePath) ? 'bg-red-500' : 'bg-gray-500'
                  "
                  class="p-2 rounded  flex items-center justify-center transition-colors duration-200"
                >
                  <i
                    class="text-xl md:text-2xl transition-colors duration-200"
                    :class="[
                      nav.icon,
                      isActive(nav.routePath) ? 'text-white' : 'text-gray-200',
                    ]"
                  />
                </span>
                <span class="ml-3 text-sm md:text-base text-black-500">{{
                  nav.name
                }}</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <Transition name="fade" mode="out-in">
          <main class="w-2/3" :key="$route.path">
            <NuxtPage />
          </main>
        </Transition>
      </div>

      <Transition name="fade" mode="out-in">
        <main class="lg:hidden mt-4" :key="$route.path">
          <NuxtPage />
        </main>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();

interface NavItem {
  name: string;
  icon: string;
  routePath: string;
}

const navItems = [
  {
    name: 'Активные заказы',
    icon: 'icon-active',
    routePath: '/orders/active',
  },
  {
    name: 'История заказов',
    icon: 'icon-history',
    routePath: '/orders/history',
  },
];

onBeforeMount(() => {
  router.push('/orders/active');
});

const isActive = computed(() => (routePath: string) => {
  return route.path === routePath;
});
</script>
