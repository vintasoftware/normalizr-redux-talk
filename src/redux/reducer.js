import {produce} from "immer";
import _merge from "lodash/merge";
import {FETCH_MEALS, SET_RATING} from "./actions";

const initialState = {
  ui: {
    breakfast: [],
    lunch: [],
    dinner: []
  },
  entities: {
    meals: {},
    ratings: {}
  }
};

const reducer = (state = initialState, action) => {
  let newState = state;
  const {type, payload} = action;

  switch (type) {
    case FETCH_MEALS:
      const {entities, mealKey, mealValues} = payload;

      newState = produce(state, (draft => {
        _merge(draft.entities, entities);
        draft.ui[mealKey] = mealValues;
      }));

      break;
    case SET_RATING:
      const {id, rating} = payload;

      newState = produce(state, (draft => {
        draft.entities.ratings[id].value = rating;
      }));

      break;
    default:
  }

  return newState;
};

export default reducer;