<template>
  <div class="relative">
    <div id="map" class="h-[336px] mt-8 z-10"></div>
    <button
      @click="getPosition"
      :disabled="isLoading"
      class="p-1 bg-red-500 text-white rounded-lg absolute right-3 top-2/3 z-50"
    >
      <img src="/svg/location.svg" alt="location">
    </button>
  </div>
</template>

<script setup>
import L from 'leaflet';

const { isLoading, position, error, getPosition } = useGeolocation();

const map = ref(null);
const marker = ref(null);

onMounted(() => {
  map.value = L.map('map', {
    zoomControl: false,
    attributionControl: false,
  }).setView([41.3112652, 69.2674975], 12);

  L.tileLayer(
    `https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=JFnGBtHuJqKGqV4hmDWT9Li3gQ6zTCTks28FetIKx2dJ9WB7jmwtCokZBudRvEfv`
  ).addTo(map.value);

  const svgIcon = L.divIcon({
    className: 'custom-svg-icon',
    html: `<img src="/svg/marker.svg" alt="location">`,
    iconSize: [110, 100],
    iconAnchor: [55, 50],
  });

  marker.value = L.marker([41.3112652, 69.2674975], {
    icon: svgIcon,
    draggable: true,
  }).addTo(map.value);

  marker.value.on('dragend', (event) => {
    const { lat, lng } = event.target.getLatLng();
    console.log('New position:', lat, lng);
  });


  const zoomControl = L.control.zoom({
    position: 'bottomright',
  }).addTo(map.value);


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


watch(position, (newPosition) => {
  if (newPosition.lat && newPosition.lng) {
    console.log('Updating position to', newPosition);

    map.value.setView([newPosition.lat, newPosition.lng], 16);

    marker.value.setLatLng([newPosition.lat, newPosition.lng]);
  }
});
</script>


