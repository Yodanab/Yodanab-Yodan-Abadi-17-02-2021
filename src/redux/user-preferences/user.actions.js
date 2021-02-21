export const addToFavorite = (city) => ({
  type: "ADD_TO_FAVORITE",
  payload: city,
});

export const removeFromFavorite = (key) => ({
  type: "REMOVE_FROM_FAVORITE",
  payload: key,
});

export const toggleTheme = (themeStyle) => ({
  type: "TOGGLE_THEME",
  payload: themeStyle,
});
