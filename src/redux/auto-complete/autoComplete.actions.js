import { callFetch } from "../../utils/actions.utils";
import { setAlert } from "../alert/alert.actions";

export const getSuggestions = (userInput) => (dispatch) => {
  dispatch({ type: "GET_SUGGESTIONS_START" });
  callFetch("locations/v1/cities/autocomplete", { q: userInput })
    .then((res) => dispatch({ type: "GET_SUGGESTIONS_SUCCESS", payload: res }))
    .catch((err) => {
      dispatch({ type: "GET_SUGGESTIONS_FAILED", payload: err });
      dispatch(setAlert("Service is temporarily unavailable", "fail"));
    });
};
