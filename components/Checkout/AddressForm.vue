<template>
  <div class="flex items-center gap-4 pt-5">
    <div class="w-1/2">
      <p class="text-gray-200 text-sm font-medium">Регион</p>
      <BaseSelect
        :items="regionList"
        placeholder="Выберите регион"
        labelKey="title"
        valueKey="id"
        v-model="selectedRegion"
      />
    </div>

    <div class="w-1/2">
      <p class="text-gray-200 text-sm font-medium">Район/город</p>
      <BaseSelect
        :items="selectedRegion ? filteredDistricts : districtList"
        placeholder="Выберите район/город"
        labelKey="title"
        valueKey="id"
        v-model="selectedDistrict"
        :class="{ 'pointer-events-none opacity-50': !selectedRegion }"
      />
    </div>
  </div>
  <div class="w-full pt-4">
    <p class="text-gray-200 text-sm font-medium pb-2">Адрес</p>
    <BaseInput placeholder="Введите адрес доставки" />
  </div>
</template>

<script setup>
const { regionList, fetchRegionData } = useRegionData();
const { districtList, fetchDistrictData } = useDistrictData();
const selectedRegion = ref(null);
const selectedDistrict = ref(null);
const filteredDistricts = ref([]);

onMounted(() => {
  fetchRegionData();
  fetchDistrictData();
});

watch(selectedRegion, (newRegion) => {
  if (newRegion) {
    filteredDistricts.value = districtList.value.filter((district) => {
      const regionId = district.region.id;
      return regionId === newRegion.id;
    });
  } else {
    filteredDistricts.value = [];
  }
});
</script>
