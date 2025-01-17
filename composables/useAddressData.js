export const useRegionData = () => {
  const regionList = ref([]);
  const error = ref('');

  const fetchRegionData = async () => {
    const url =
      'https://toshkent-parfum.xn--h28h.uz/api/v1/common/region/?size=15';

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data?.results?.length > 0) {
        regionList.value = data.results;
      } else {
        error.value = 'No regions found or incorrect data format';
        console.error(error.value);
      }
    } catch (err) {
      error.value = 'Error fetching region data: ' + err.message;
      console.error(error.value);
    }
  };

  return {
    regionList,
    error,
    fetchRegionData,
  };
};

export const useDistrictData = () => {
  const districtList = ref([]);

  const fetchDistrictData = async () => {
    const url =
      'https://toshkent-parfum.xn--h28h.uz/api/v1/common/district/?size=220';

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data?.results?.length > 0) {
        districtList.value = data.results;
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return {
    districtList,
    fetchDistrictData,
  };
};

export function useBranchesData() {
  const url =
    'https://toshkent-parfum.xn--h28h.uz/api/v1/delivery_bts/branches/';

  const { data, error } = useAsyncData('branches', async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  });

  return {
    data,
    error,
  };
}

export const useLocationInfo = () => {
  const getLocationInfo = async (latitude, longitude) => {
    try {
      const response = await $fetch(
        'https://toshkent-parfum.xn--h28h.uz/api/v1/location_service/get_location_info/',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ latitude, longitude }),
        }
      );
      return response;
    } catch (error) {
      console.error('Error fetching location info:', error);
      return null;
    }
  };

  return {
    getLocationInfo,
  };
};

export function useNominatimSearch() {
  const results = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const searchLocations = async (query) => {
    if (!query) {
      results.value = [];
      return;
    }

    loading.value = true;
    error.value = null;


    try {
      const response = await fetch(
        `https://maps-dev.commeta.io/nominatim/search?q=${query.toLowerCase()}&format=json&addressdetails=1&limit=5`
      );
      if (!response.ok) throw new Error('Failed to fetch locations');
      results.value = await response.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  return { results, loading, error, searchLocations };
}
