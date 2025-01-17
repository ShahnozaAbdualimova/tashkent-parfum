import { useAsyncData } from 'nuxt/app';

export function useDataFetcher() {
  const url = 'https://toshkent-parfum.xn--h28h.uz/api/v1/common/story/';

  const { data, error} = useAsyncData('stories', async () => {
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
