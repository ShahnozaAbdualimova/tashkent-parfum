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
        :locationCity="location?.info?.city"
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
  <div class="w-full pt-4 relative">
    <p class="text-gray-200 text-sm font-medium pb-2">Адрес</p>
    <BaseInput
      placeholder="Введите адрес доставки"
      :model-value="location?.address"
      v-model="searchQuery"
    />

    <Transition name="dropdown">
      <ul
        v-if="results.length"
        class="font-proxima text-black-500 text-sm font-medium absolute top-[82px] max-h-64 overflow-y-auto mt-2 z-[20] rounded-lg flex flex-col w-full left-0 drop-show h-auto bg-white shadow-[0_4px_36px_rgba(56,56,56,0.16)]"
      >
        <li
          v-for="(location, index) in results"
          :key="location?.place_id"
          @click="selectLocation(location)"
          class="w-full h-auto py-2 px-3 border-b flex flex-col border-gray-400 last:border-none cursor-pointer hover:bg-gray-400 transition-all 0.3s ease-in-out"
          :class="[
            index === 0 ? 'rounded-t-lg' : '',
            index === results.length - 1 ? 'rounded-b-lg' : '',
          ]"
        >
          {{ location?.display_name }}
        </li>
      </ul>
    </Transition>
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

const searchQuery = ref('');
const { results, loading, error, searchLocations } = useNominatimSearch();

watch(searchQuery, (newValue) => {
  searchLocations(newValue);
});

watch(
  () => props.location,
  (newLocation) => {
    if (newLocation?.address) {
      searchQuery.value = newLocation.address;
    }
  },
  { immediate: true }
);

const emit = defineEmits(['update-location']);

const selectLocation = (selectedLocation) => {
  searchQuery.value = selectedLocation.display_name;
  results.value = [];

  emit('update-location', {
    lat: selectedLocation.lat,
    lng: selectedLocation.lon,
  });
};
</script>
<style>
.dropdown-enter-active {
  transition: all 0.2s ease;
}

.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
