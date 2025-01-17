export function useCategoriesFetcher() {
  const url = 'https://toshkent-parfum.xn--h28h.uz/api/v1/products/categories-list/?page=8&size=8';

  const { data, error} = useAsyncData('categories', async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  });

  return {
    data,
    error
  };
}
