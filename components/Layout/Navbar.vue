<template>
  <div class="w-full border-t border-gray-300 bg-white py-2 sm:hidden md:hidden lg:block">
    <div class="container">
      <div class="flex items-center justify-between h-14">
        <div v-for="(link, index) in links" :key="link.title"
          class="relative group overflow-hidden cursor-pointer flex items-center whitespace-nowrap px-4">
          <div class="relative inline-block ">
            <!-- Default text -->
            <span
              class="block  text-sm font-semibold text-black-500 group-hover:translate-y-[-100%] group-hover:text-red-500 transition-transform duration-300">
              {{ link.title }}
            </span>
            <!-- Hover text -->
            <span
              class="absolute left-0 top-0 text-sm font-semibold text-red-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300">
              {{ link.title }}
            </span>
          </div>
          
          <!-- Divider -->
          <div v-if="index !== links.length - 1" 
            class="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-4 bg-gray-500">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const links = [
  { title: 'Топ 10 товаров', path: '/top-10' },
  { title: 'Скидки', path: '/discounts' },
  { title: 'Товары для лица', path: '/face' },
  { title: 'Банные бомбочки', path: '/bath-bombs' },
  { title: 'Продукты макияжа', path: '/makeup' },
  { title: 'Краски для волос', path: '/hair-dye' },
  { title: 'Мужские продукты', path: '/mens' },
  { title: 'Товары для ванны и уборной', path: '/bath-cleaning' }
]
</script>
