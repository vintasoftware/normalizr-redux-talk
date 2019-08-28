import { produce } from "immer";
import _merge from "lodash/merge";
import { SAVE_MEALS, SET_RATING } from "./actions";

const initialState = {
  ui: {
    categoryList: [],
  },
  entities: {
    meals: {},
    ratings: {},
    categories: {},
  }
};

const reducer = (state = initialState, action) => {
  let newState = state;
  const { type, payload } = action;

  switch (type) {
    case SAVE_MEALS:
      const { entities, categoryList } = payload;

      newState = produce(state, (draft => {
        _merge(draft.entities, entities);
        draft.ui.categoryList = categoryList;
      }));

      break;
    case SET_RATING:
      const { id, rating } = payload;

      newState = produce(state, (draft => {
        draft.entities.ratings[id].value = rating;
      }));

      break;
    default:
  }

  return newState;
};

export default reducer;