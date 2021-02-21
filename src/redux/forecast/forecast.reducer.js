const INITIAL_STATE = {
  loading: false,
  forecast: null,
  error: null,
};
const foreCastReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_FORECAST_START":
      return { ...state, loading: true };
    case "GET_FORECAST_SUCCESS":
      return { ...state, loading: false, forecast: payload };
    case "GET_FORECAST_FAILED":
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default foreCastReducer;
