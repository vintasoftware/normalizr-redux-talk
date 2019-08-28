import { fetchMeals as fetchMealsService } from "./services";
import _sortBy from "lodash/sortBy"
import { normalize } from "normalizr";
import { mealSchema } from "./schemas";

export const SAVE_MEALS = 'SAVE_MEALS';
export const SET_RATING = 'SET_RATING';

const saveMeals = (entities, categoryList) => ({
  type: SAVE_MEALS,
  payload: {
    entities,
    categoryList
  }
});

export const setRating = (id, rating) => ({
  type: SET_RATING,
  payload: {
    id,
    rating
  }
});

export const fetchMeals = () => (
  (dispatch) => {
    return fetchMealsService().then((res) => {
      const { data } = res;
      const { entities } = normalize(data, [mealSchema]);

      const categoryValuesList = Object.values(entities.categories);
      const sortedCategoryValuesList = _sortBy(categoryValuesList, 'order');
      const categoryList = sortedCategoryValuesList.map(c => c.id);

      return dispatch(saveMeals(entities, categoryList));
    });
  }
);