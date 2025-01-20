export function useGeolocation() {
  const isLoading = ref(false);
  const position = ref({ lat: null, lng: null });
  const error = ref(null);

  function getPosition() {
    if (!navigator.geolocation) {
      error.message = 'Your browser does not support geolocation';
      return;
    }

    isLoading.value = true;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        position.value = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        isLoading.value = false;
      },
      (err) => {
        error.message = err.message;
        isLoading.value = false;
      }
    );
  }

  return { isLoading, position, error, getPosition };
}
