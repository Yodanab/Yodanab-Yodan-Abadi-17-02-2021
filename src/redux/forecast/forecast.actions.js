import { callFetch } from "../../utils/actions.utils";
import { setAlert } from "../alert/alert.actions";

export const getForecast = (cityData) => (dispatch) => {
  const { Key, LocalizedName } = cityData;
  dispatch({ type: "GET_FORECAST_START" });
  callFetch(`forecasts/v1/daily/5day/${Key}`, { metric: true })
    .then((res) => {
      let nicerResponse = { Key, LocalizedName, ...res };
      dispatch({ type: "GET_FORECAST_SUCCESS", payload: nicerResponse });
    })
    .catch((err) => {
      dispatch(setAlert("Service is temporarily unavailable", "fail"));
      dispatch({ type: "GET_FORECAST_FAILED", payload: err });
    });
};
