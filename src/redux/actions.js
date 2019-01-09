import {fetchBreakfast, fetchDinner, fetchLunch} from "./services";
import {normalize} from "normalizr";
import {mealSchema} from "./schemas";

export const FETCH_MEALS = 'FETCH_MEALS';
export const SET_RATING = 'SET_RATING';

const saveMeals = (entities, mealKey, mealValues) => ({
  type: FETCH_MEALS,
  payload: {
    entities,
    mealKey,
    mealValues
  }
});

export const setRating = (id, rating) => ({
  type: SET_RATING,
  payload: {
    id,
    rating
  }
});

const fetchMealCallback = (mealKey, dispatch) => (
  (res) => {
    const { data } = res;
    const { entities, result } = normalize(data, [mealSchema]);

    return dispatch(saveMeals(entities, mealKey, result));
  }
);

export const fetchMeals = () => (
  (dispatch) => {
    const breakfastPromise = fetchBreakfast().then(
      fetchMealCallback('breakfast', dispatch)
    );

    const lunchPromise = fetchLunch().then(
      fetchMealCallback('lunch', dispatch)
    );

    const dinnerPromise = fetchDinner().then(
      fetchMealCallback('dinner', dispatch)
    );

    return Promise.all([breakfastPromise, lunchPromise, dinnerPromise]);
  }
);