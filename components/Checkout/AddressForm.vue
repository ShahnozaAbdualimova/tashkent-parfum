<template>
  <div class="flex  items-center  gap-4 pt-5">
    <div class="w-1/2">
      <p class="text-gray-200  text-sm font-medium">Регион</p>
      <BaseSelect
        :items="items"
        placeholder="Выберите регион"
        labelKey="title"
        valueKey="id"
        v-model="selectedItem"
      />
    </div>


    <div class="w-1/2">
      <p class="text-gray-200 text-sm font-medium">Район/город</p>
      <BaseSelect
        :items="items2"
        placeholder="Выберите район/город"
        labelKey="title"
        valueKey="id"
        v-model="selectedItem2"
      />
    </div>

  </div>
  <div class="w-full pt-4">
    <p class="text-gray-200 text-sm font-medium pb-2">Адрес</p>
    <BaseInput
      placeholder="Введите адрес доставки "
    />
  </div>
</template>

<script setup>
const items = ref([
  { id: 1, title: 'Option' },
  { id: 2, title: 'Option' },
  { id: 3, title: 'Option' },
  { id: 4, title: 'Option' },
  { id: 5, title: 'Option' },
  { id: 6, title: 'Option' },
  { id: 7, title: 'Option' },
  { id: 8, title: 'Option' },
  { id: 9, title: 'Option' },
]);
const items2 = ref([
  { id: 1, title: 'Option' },
  { id: 2, title: 'Option' },
  { id: 3, title: 'Option' },
  { id: 4, title: 'Option' },
  { id: 5, title: 'Option' },
  { id: 6, title: 'Option' },
  { id: 7, title: 'Option' },
  { id: 8, title: 'Option' },
  { id: 9, title: 'Option' },
]);

const selectedItem = ref(null);
const selectedItem2 = ref(null);
</script>
