import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

const middleware = [logger, thunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);

export default { store, persistor };
