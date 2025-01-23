<template>
  <div class="bg-white w-[280px] px-5 rounded-2xl">
    <div class="flex justify-between items-center py-4">
      <h2 class="text-xl font-normal leading-6 text-gray-900">Фильтр</h2>
      <button
        @click="clearFilters"
<<<<<<< HEAD
        class="text-gray-100 hover:text-gray-600 text-base font-normal"
=======
        class="text-gray-500 hover:text-gray-700 transition-all duration-200 text-base font-normal"
>>>>>>> 1e3eeb1323e8abe152da16ae2b2699ca7c620b33
      >
        очистить
      </button>
    </div>

<<<<<<< HEAD
    <div class="border-t border-gray-100">
      <button
        class="flex justify-between items-center w-full py-4"
=======
    <div class="border-b border-gray-200">
      <button
        class="flex justify-between items-center w-full py-5"
>>>>>>> 1e3eeb1323e8abe152da16ae2b2699ca7c620b33
        @click="toggleSections"
      >
        <h3 class="font-normal text-base text-gray-900">Разделы</h3>
        <i
          :class="{ 'transform rotate-180 text-red-500': sectionsOpen }"
          class="icon-chevron-down flex items-center justify-center w-5 h-5 transition-transform duration-200 text-gray-500"
        ></i>
      </button>

<<<<<<< HEAD
      <div v-show="sectionsOpen" class="space-y-3 pb-4">
        <label class="flex items-center">
          <input
            type="checkbox"
            v-model="allSections"
            class="form-checkbox h-4 w-4 text-pink-500 rounded border-gray-300"
          />
          <span class="ml-3 text-sm font-normal text-black-500"
            >Все разделы</span
          >
        </label>

        <div
          v-for="section in sections"
          :key="section.id"
          class="flex items-center justify-between"
        >
          <label class="flex items-center flex-1">
            <input
              type="checkbox"
              v-model="section.checked"
              class="form-checkbox h-4 w-4 text-pink-500 rounded border-gray-300"
            />
            <span class="ml-3 text-sm font-normal text-black-500">{{
              section.name
            }}</span>
          </label>
=======
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
>>>>>>> 1e3eeb1323e8abe152da16ae2b2699ca7c620b33
        </div>

        <button
          @click="showMore = !showMore"
<<<<<<< HEAD
          class="text-pink-500 text-sm flex items-center gap-1 mt-2"
=======
          class="text-sm font-normal flex text-red-500 gap-2 items-center mt-2 mb-5"
>>>>>>> 1e3eeb1323e8abe152da16ae2b2699ca7c620b33
        >
          <i
            :class="{ 'transform rotate-180': !showMore }"
            class="icon-chevron-down flex items-center justify-center w-5 h-5 transition-transform duration-200 text-red-500"
          ></i>
<<<<<<< HEAD

=======
>>>>>>> 1e3eeb1323e8abe152da16ae2b2699ca7c620b33
          Еще +12
        </button>
      </div>
    </div>

<<<<<<< HEAD
    <div class="border-t border-gray-100">
      <button
        class="flex justify-between items-center w-full py-4"
=======
    <div class="border-b border-gray-200">
      <button
        class="flex justify-between items-center w-full py-5"
>>>>>>> 1e3eeb1323e8abe152da16ae2b2699ca7c620b33
        @click="toggleManufacturers"
      >
        <h3 class="font-normal text-base text-gray-900">Производители</h3>
        <i
          :class="{ 'transform rotate-180 text-red-500': manufacturersOpen }"
          class="icon-chevron-down flex items-center justify-center w-5 h-5 transition-transform duration-200 text-gray-500"
        ></i>
      </button>
    </div>

    <div class="border-t border-gray-100">
      <div class="flex items-center justify-between py-4">
        <h3 class="font-normal text-base text-gray-900">Скидочные товары</h3>
        <label class="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            v-model="discountedOnly"
            class="sr-only peer"
          />
          <div
            class="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-pink-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"
          ></div>
        </label>
      </div>
    </div>

<<<<<<< HEAD
    <div class="border-t border-gray-100 py-4">
      <span class="text-base text-gray-900 block mb-3"
        >Диапазон цены <span class="text-gray-100">(сум)</span></span
      >
      <div class="flex gap-2">
        <div class="flex-1">
          <div class="">
            <span class="text-sm font-normal text-gray-200 mb-1 block">от</span>
            <input
              type="number"
              v-model="priceFrom"
              class="w-full p-2 text-sm bg-white-400 rounded-lg"
            />
          </div>
        </div>
        <div class="flex-1">
          <span class="text-sm font-normal text-gray-200 mb-1 block">до</span>
          <input
            type="number"
            v-model="priceTo"
            class="w-full p-2 text-sm bg-white-400 rounded-lg"
=======
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
>>>>>>> 1e3eeb1323e8abe152da16ae2b2699ca7c620b33
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

<style>
.form-checkbox {
  appearance: none;
  padding: 0;
  color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  background-color: #fff;
  cursor: pointer;
}

.form-checkbox:checked {
  background-color: #ec4899;
  border-color: #ec4899;
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}
</style>
