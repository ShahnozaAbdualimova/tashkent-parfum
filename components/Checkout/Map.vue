<template>
  <div id="map" class="h-[336px] mt-8 z-10 relative">
    <button
      @click.stop="getPosition"
      :disabled="isLoading"
      class="p-1 bg-red-500 text-white rounded-lg absolute right-2.5 bottom-2.5 z-[1000]"
    >
      <img src="/svg/location.svg" alt="location" />
    </button>
  </div>
</template>

<script setup>
import L from 'leaflet';

const props = defineProps({
  locationFromInput: {
    type: Object,
    required: false,
    default: () => null,
  },
});

const { isLoading, position, error, getPosition } = useGeolocation();
const { data } = useBranchesData();
const emit = defineEmits();
const map = ref(null);
const marker = ref(null);
const branches = computed(() => data?.value || []);

const { getLocationInfo } = useLocationInfo();
const locationData = ref(null);

const emitLocationData = (data) => {
  emit('getAddress', data);
};

onMounted(() => {
  map.value = L.map('map', {
    zoomControl: false,
    attributionControl: false,
  }).setView([41.3112652, 69.2674975], 11);

  L.tileLayer(
    `https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=JFnGBtHuJqKGqV4hmDWT9Li3gQ6zTCTks28FetIKx2dJ9WB7jmwtCokZBudRvEfv`
  ).addTo(map.value);

  const userIcon = L.divIcon({
    className: 'custom-svg-icon',
    html: `<img src="/svg/marker.svg" alt="location">`,
    iconSize: [110, 100],
    iconAnchor: [55, 50],
  });

  marker.value = L.marker([0, 0], { icon: userIcon, draggable: true }).addTo(
    map.value
  );

  marker.value.on('dragend', async (event) => {
    const { lat, lng } = event.target.getLatLng();
    map.value.setView([lat, lng], map.value.getZoom());
    locationData.value = await getLocationInfo(lat, lng);
    emitLocationData(locationData.value);
  });

  map.value.on('click', async (event) => {
    const { lat, lng } = event.latlng;
    marker.value.setLatLng([lat, lng]);
    map.value.setView([lat, lng], map.value.getZoom());
    locationData.value = await getLocationInfo(lat, lng);
    emitLocationData(locationData.value);
  });

  nextTick(() => {
    if (map.value) {
      window.dispatchEvent(new Event('resize'));
    }
  });
  setTimeout(() => {
    if (map.value) {
      map.value.invalidateSize();
    }
  }, 200);
});

watch(branches, (newBranches) => {
  if (map.value && newBranches.length > 0) {
    const branchIcon = L.divIcon({
      className: 'custom-svg-icon',
      html: `<img src="/svg/bts.svg" alt="bts" class="w-[40px] h-[40px]">`,
      iconSize: [40, 40],
      iconAnchor: [20, 10],
    });

    newBranches.forEach((branch) => {
      L.marker([branch.latitude, branch.longitude], {
        icon: branchIcon,
      })
        .addTo(map.value)
        .bindPopup(`<b>${branch.name}</b><br>${branch.address}`);
    });
  }
});

watch(position, async (newPosition) => {
  if (newPosition.lat && newPosition.lng) {
    map.value.setView([newPosition.lat, newPosition.lng], 18);
    marker.value.setLatLng([newPosition.lat, newPosition.lng]);
    locationData.value = await getLocationInfo(
      newPosition.lat,
      newPosition.lng
    );
    emitLocationData(locationData.value);
  }
});

watch(
  () => props.locationFromInput,
  async (newLocation) => {
    if (newLocation?.lat && newLocation?.lng) {
      const lat = parseFloat(newLocation.lat);
      const lng = parseFloat(newLocation.lng);

      marker.value.setLatLng([lat, lng]);
      map.value.setView([lat, lng], 18);

      locationData.value = await getLocationInfo(lat, lng);
      emitLocationData(locationData.value);
    }
  },
  { immediate: true }
);
</script>
