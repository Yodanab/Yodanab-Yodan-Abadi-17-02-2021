const INITIAL_STATE = {
  loading: false,
  favorites: [],
  error: null,
};

const favoriteReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_CURRENT_FAV_WEATHER_START":
      return { ...state, loading: true };
    case "GET_CURRENT_FAV_WEATHER_SUCCESS":
      return {
        ...state,
        loading: false,
        favorites: payload,
      };
    case "GET_CURRENT_FAV_WEATHER_FAILED":
      return { ...state, loading: false, favorites: [], error: payload };

    default:
      return state;
  }
};
export default favoriteReducer;
