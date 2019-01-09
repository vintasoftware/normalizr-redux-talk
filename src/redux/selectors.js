
// General Selectors
export const selectBreakfastMeals =
  state => state.getIn(['ui', 'breakfast']);

export const selectLunchMeals =
  state => state.getIn(['ui', 'lunch']);

export const selectDinnerMeals =
  state => state.getIn(['ui', 'dinner']);

// By id selectors
export const getMealById =
  (state, id) => state.getIn(['entities', 'meals', id.toString()]);

export const getRatingById =
  (state, id) => state.getIn(['entities', 'ratings', id.toString()]);