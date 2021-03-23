import { combineReducers } from "redux";
import { filmsReducer } from "@reducers/films.reducer";

/**
 *  @name REDUCERS
 */
export default combineReducers({
  films: filmsReducer,
});
