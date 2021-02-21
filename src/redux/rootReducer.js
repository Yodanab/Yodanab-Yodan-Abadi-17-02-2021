import { combineReducers } from "redux";
import foreCastReducer from "./forecast/forecast.reducer";
import autoCompleteReducer from "./auto-complete/autoComplete.reducer";
import favoriteReducer from "./favorite/favorite.reducer";
import myAlertReducer from "./alert/alert.reducer";
import userPrefReducer from "./user-preferences/user.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userPref"],
};

const rootReducer = combineReducers({
  foreCast: foreCastReducer,
  autoComplete: autoCompleteReducer,
  favorite: favoriteReducer,
  alert: myAlertReducer,
  userPref: userPrefReducer,
});

export default persistReducer(persistConfig, rootReducer);
