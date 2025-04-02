import { getAreas } from '$lib/sanity';

/** @type {import('./$types').PageLoad} */
export async function load() {
  try {
    const areas = await getAreas();
    return {
      areas
    };
  } catch (error) {
    console.error('Error loading areas data:', error);
    return {
      areas: [],
      error: 'Не удалось загрузить данные о направлениях работы'
    };
  }
}