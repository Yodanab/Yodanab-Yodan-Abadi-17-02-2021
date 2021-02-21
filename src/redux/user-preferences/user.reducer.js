const INITIAL_STATE = {
  favoriteCities: [],
  theme: "light",
};

const userPrefReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_FAVORITE":
      return { ...state, favoriteCities: [...state.favoriteCities, payload] };
    case "REMOVE_FROM_FAVORITE":
      let filterFav = state.favoriteCities.filter(
        (city) => city.Key !== payload
      );
      return { ...state, favoriteCities: filterFav };
    case "TOGGLE_THEME":
      return { ...state, theme: payload };

    default:
      return state;
  }
};

export default userPrefReducer;
