import { ALL_FILMS } from "@actions/constants";
import { Action } from "@interfaces/index";

/**
 * Initial Value
 */
const initialValue: object[] = [];

/**
 * @name REDUCER
 *
 * @author José Rodrigues
 */
export const filmsReducer = (state = initialValue, action: Action) => {
  switch (action.type) {
    case ALL_FILMS:
      return action.payload;
    default:
      return state;
  }
};
