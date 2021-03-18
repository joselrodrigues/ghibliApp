import ghibliAPI from "@api/index";
import { Dispatch } from "@interfaces/index";
import { ALL_FILMS } from "@actions/constants";

/**
 * @name filmsAction
 * @description
 * Action responsible for get the list of studio
 * ghibli movies informations
 *
 * @autor José Rodrigues
 */
export const filmsAction = () => async (dispatch: Dispatch) => {
  const response = await ghibliAPI.get("/films");

  dispatch({ type: ALL_FILMS, payload: response });
};
