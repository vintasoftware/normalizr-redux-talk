
// General Selectors
export const selectBreakfastMeals = state => state.ui.breakfast;

export const selectLunchMeals = state => state.ui.lunch;

export const selectDinnerMeals = state => state.ui.dinner;

// By id selectors
export const getMealById = (state, id) => state.entities.meals[id];

export const getRatingById = (state, id) => state.entities.ratings[id];