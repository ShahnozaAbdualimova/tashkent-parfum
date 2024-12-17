<template>
  <div class="w-72 bg-white p-4">
    <!-- Filter Header -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-medium">Фильтр</h2>
      <button
        @click="clearFilters"
        class="text-gray-400 hover:text-gray-600 text-sm"
      >
        очистить
      </button>
    </div>

    <!-- Sections -->
    <div class="mb-6">
      <button
        class="flex justify-between items-center w-full mb-4"
        @click="toggleSections"
      >
        <span class="font-medium">Разделы</span>
        <!-- <ChevronUpIcon
          :class="{ 'transform rotate-180': !sectionsOpen }"
          class="w-5 h-5 transition-transform duration-200"
        /> -->
        <svg
          :class="{ 'transform rotate-180': !sectionsOpen }"
          class="w-5 h-5 transition-transform duration-200"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>

      <div v-show="sectionsOpen" class="space-y-3">
        <label class="flex items-center">
          <input
            type="checkbox"
            v-model="allSections"
            class="w-4 h-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
          />
          <span class="ml-2">Все разделы</span>
        </label>

        <div v-for="section in sections" :key="section.id" class="ml-0">
          <label class="flex items-center">
            <input
              type="checkbox"
              v-model="section.checked"
              :disabled="allSections"
              class="w-4 h-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
            />
            <span class="ml-2">{{ section.name }}</span>
          </label>
          <ChevronDownIcon
            v-if="section.hasSubmenu"
            class="w-4 h-4 ml-8 text-gray-400"
          />
        </div>

        <button
          @click="showMore = !showMore"
          class="text-pink-500 text-sm flex items-center mt-2"
        >
          <ChevronDownIcon
            :class="{ 'transform rotate-180': showMore }"
            class="w-4 h-4 mr-1"
          />
          Еще +12
        </button>
      </div>
    </div>

    <!-- Manufacturers -->
    <div class="mb-6">
      <button
        class="flex justify-between items-center w-full"
        @click="toggleManufacturers"
      >
        <span class="font-medium">Производители</span>
        <ChevronDownIcon
          :class="{ 'transform rotate-180': manufacturersOpen }"
          class="w-5 h-5 transition-transform duration-200"
        />
      </button>
    </div>

    <!-- Discounted Items -->
    <div class="flex justify-between items-center mb-6">
      <span class="font-medium">Скидочные товары</span>
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" v-model="discountedOnly" class="sr-only peer" />
        <div
          class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"
        ></div>
      </label>
    </div>

    <!-- Price Range -->
    <div class="mb-6">
      <span class="font-medium block mb-3">Диапазон цены (сум)</span>
      <div class="flex items-center space-x-2">
        <div class="flex-1">
          <span class="text-sm text-gray-500 mb-1 block">от</span>
          <input
            type="number"
            v-model="priceFrom"
            class="w-full p-2 border border-gray-200 rounded-lg"
          />
        </div>
        <div class="flex-1">
          <span class="text-sm text-gray-500 mb-1 block">до</span>
          <input
            type="number"
            v-model="priceTo"
            class="w-full p-2 border border-gray-200 rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import { ChevronUpIcon, ChevronDownIcon } from 'lucide-vue-next';

const sectionsOpen = ref(true);
const manufacturersOpen = ref(false);
const showMore = ref(false);
const allSections = ref(true);
const discountedOnly = ref(false);
const priceFrom = ref(0);
const priceTo = ref(0);

const sections = ref([
  { id: 1, name: 'Бестселлеры', checked: false, hasSubmenu: false },
  { id: 2, name: 'Парфюмерия', checked: false, hasSubmenu: true },
  { id: 3, name: 'Волосы', checked: false, hasSubmenu: false },
  { id: 4, name: 'Лицо', checked: false, hasSubmenu: false },
  { id: 5, name: 'Тело и ванна', checked: false, hasSubmenu: true },
  { id: 6, name: 'Макияж', checked: false, hasSubmenu: true },
  { id: 7, name: 'Мужчинам', checked: false, hasSubmenu: true },
  { id: 8, name: 'Женщинам', checked: false, hasSubmenu: false },
  { id: 9, name: 'Премиум', checked: false, hasSubmenu: false },
]);

const toggleSections = () => {
  sectionsOpen.value = !sectionsOpen.value;
};

const toggleManufacturers = () => {
  manufacturersOpen.value = !manufacturersOpen.value;
};

const clearFilters = () => {
  allSections.value = true;
  sections.value.forEach((section) => (section.checked = false));
  discountedOnly.value = false;
  priceFrom.value = 0;
  priceTo.value = 0;
};
</script>
