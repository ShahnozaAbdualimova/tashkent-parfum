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
