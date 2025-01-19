import { useAsyncData } from 'nuxt/app';

export function useProductFetcher() {
  const url = 'https://toshkent-parfum.xn--h28h.uz/api/v1/products/manufacture-with-products/';
  const { data, error} = useAsyncData('products', async () => {
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