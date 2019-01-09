import {List, fromJS} from "immutable";
import {FETCH_MEALS, SET_RATING} from "./actions";

const initialState = fromJS({
  ui: {
    breakfast: [],
    lunch: [],
    dinner: []
  },
  entities: {
    meals: {},
    ratings: {}
  }
});

const reducer = (state = initialState, action) => {
  let newState = state;
  const {type, payload} = action;

  switch (type) {
    case FETCH_MEALS:
      const entitiesMap = fromJS(payload.entities);

      newState = state
        .setIn(['ui', payload.mealKey], List(payload.mealValues)) // Set UI id list
        .mergeDeepIn(['entities'], entitiesMap); // Set all entities

      break;
    case SET_RATING:
      newState = state
        .setIn(
          ['entities', 'ratings', payload.id.toString(), 'value'],
          payload.rating
        );
      break;
    default:
  }

  return newState;
};

export default reducer;