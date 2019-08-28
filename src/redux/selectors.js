// General Selectors
export const selectCategoryList = state => state.ui.categoryList;

// By id selectors
export const getMealById = (state, id) => state.entities.meals[id];

export const getRatingById = (state, id) => state.entities.ratings[id];

export const getCategoryById = (state, id) => state.entities.categories[id];

// Processing selectors
export const getMealsByCategory = (state, id) => {
  const allMeals = Object.values(state.entities.meals);

  return allMeals
    .filter(meal => meal.categories.includes(id))
    .map(meal => meal.id);
};