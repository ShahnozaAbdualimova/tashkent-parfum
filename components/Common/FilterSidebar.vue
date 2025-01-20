<template>
  <div class="bg-white p-4 rounded-xl w-[400px]">
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-normal leading-6 text-gray-900">Фильтр</h2>
      <button
        @click="clearFilters"
        class="text-gray-500 hover:text-gray-700 transition-all duration-200 text-base font-normal"
      >
        очистить
      </button>
    </div>

    <div class="border-b border-gray-200">
      <button
        class="flex justify-between items-center w-full py-5"
        @click="toggleSections"
      >
        <h3 class="font-normal text-base text-gray-900">Разделы</h3>
        <i
          :class="{ 'transform rotate-180 text-red-500': sectionsOpen }"
          class="icon-chevron-down flex items-center justify-center w-5 h-5 transition-transform duration-200 text-gray-500"
        ></i>
      </button>

      <div v-show="sectionsOpen" class="flex flex-col">
        <BaseCheckBox v-model="allSections" class="mb-2"
          >Все разделы</BaseCheckBox
        >
        <div
          v-for="section in sections"
          :key="section.id"
          class="flex m-0 p-0 justify-between"
        >
          <BaseCheckBox
            :submenu="section.hasSubmenu"
            v-model="section.checked"
            >{{ section.name }}</BaseCheckBox
          >
        </div>

        <button
          @click="showMore = !showMore"
          class="text-sm font-normal flex text-red-500 gap-2 items-center mt-2 mb-5"
        >
          <i
            :class="{ 'transform rotate-180': !showMore }"
            class="icon-chevron-down flex items-center justify-center w-5 h-5 transition-transform duration-200 text-red-500"
          ></i>
          Еще +12
        </button>
      </div>
    </div>

    <div class="border-b border-gray-200">
      <button
        class="flex justify-between items-center w-full py-5"
        @click="toggleManufacturers"
      >
        <h3 class="font-normal text-base text-gray-900">Производители</h3>
        <i
          :class="{ 'transform rotate-180 text-red-500': manufacturersOpen }"
          class="icon-chevron-down flex items-center justify-center w-5 h-5 transition-transform duration-200 text-gray-500"
        ></i>
      </button>
      <div v-show="manufacturersOpen" class="space-y-3">
        <p class="text-gray-500">...</p>
      </div>
    </div>

    <div
      @click="discountedOnly = !discountedOnly"
      class="py-5 border-b border-gray-200 flex items-center justify-between cursor-pointer"
    >
      <h3 class="font-normal text-base text-gray-900">Скидочные товары</h3>
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" v-model="discountedOnly" class="sr-only peer" />
        <div
          class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"
        ></div>
      </label>
    </div>

    <div class="pt-5">
      <span class="font-normal text-base text-gray-900 block mb-1.5"
        >Диапазон цены (сум)</span
      >
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
import { ref, watch } from 'vue';

const sectionsOpen = ref(true);
const manufacturersOpen = ref(false);
const showMore = ref(true);
const allSections = ref(true);
const discountedOnly = ref(true);
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

watch(allSections, (newValue) => {
  if (newValue) {
    sections.value.forEach((section) => (section.checked = false));
  }
});

watch(
  sections,
  (newSections) => {
    if (newSections.every((section) => !section.checked)) {
      allSections.value = true;
    } else {
      allSections.value = false;
    }
  },
  { deep: true }
);
</script>
