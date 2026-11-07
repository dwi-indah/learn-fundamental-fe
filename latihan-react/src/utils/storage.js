export function loadRecipes(key, fallbackData) {
  try {
    const rawData = localStorage.getItem(key);
    if (!rawData) return fallbackData;

    const parsed = JSON.parse(rawData);
    if (!Array.isArray(parsed)) return fallbackData;

    const validRecipes = parsed.filter(recipe => 
      recipe &&
      (typeof recipe.id === 'number' || typeof recipe.id === 'string') && 
      typeof recipe.name === 'string' &&
      typeof recipe.servings === 'number' &&
      typeof recipe.category === 'string'
    );

    return validRecipes.length > 0 ? validRecipes : fallbackData;
  } catch (error) {
    console.error(`Gagal membaca ${key} dari storage:`, error);
    return fallbackData;
  }
}

export function savedRecipes(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.warn(`Gagal menyimpan ${key}. Storage mungkin penuh atau akses diblokir:`, error);
  }
}