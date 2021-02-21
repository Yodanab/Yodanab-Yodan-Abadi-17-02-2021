import { callFetch } from "../../utils/actions.utils";
import { setAlert } from "../alert/alert.actions";

export const getFavoritesCurrent = (favoriteCities) => (dispatch) => {
  dispatch({ type: "GET_CURRENT_FAV_WEATHER_START" });
  const requests = favoriteCities.map(({ Key }) => {
    return callFetch(`currentconditions/v1/${Key}`);
  });
  Promise.all(requests)
    .then((data) => {
      let fav = data.map((item, i) => {
        return (item = {
          ...item[0],
          Key: favoriteCities[i].Key,
          LocalizedName: favoriteCities[i].LocalizedName,
        });
      });
      dispatch({ type: "GET_CURRENT_FAV_WEATHER_SUCCESS", payload: fav });
    })
    .catch((err) => {
      dispatch(setAlert("Service is temporarily unavailable", "fail"));
      dispatch({ type: "GET_CURRENT_FAV_WEATHER_FAILED", payload: err });
    });
};
