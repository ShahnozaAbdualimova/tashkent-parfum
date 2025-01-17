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
        :locationDistrict="location?.info?.county"
        :class="{ 'pointer-events-none opacity-50': !selectedRegion}"
      />
    </div>
  </div>
  <div class="w-full pt-4">
    <p class="text-gray-200 text-sm font-medium pb-2">Адрес</p>
    <BaseInput
      placeholder="Введите адрес доставки"
      :model-value="location?.address"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  location: {
    type: Object,
    required: false,
    default: () => null,
  },
});
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
      return district.region.soato === newRegion.soato;
    });
    selectedDistrict.value = null;
  } else {
    filteredDistricts.value = [];
  }
});

watch(
  () => props.location,
  (newLocation) => {
    if (newLocation) {
      selectedRegion.value = regionList.value.find(
        (region) => region.soato === newLocation.region.soato
      );
    }
  }
);
</script>
