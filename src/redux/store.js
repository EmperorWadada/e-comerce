import { applyMiddleware, createStore } from "redux";
import persistStore from "redux-persist/es/persistStore";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

const middleware = [];

if (process.env.NODE_ENV === 'production') {
    middleware.push(logger)
}

// Before using persist store
// const store = createStore(rootReducer, applyMiddleware(...middleware));

//FIRST STEP:  After using persist store
export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store)
export default {store, persistor};


//SECOND STEP: Go to root reducer to complete the configuration