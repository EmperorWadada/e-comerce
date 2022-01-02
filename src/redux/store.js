import { applyMiddleware, createStore } from "redux";
import persistStore from "redux-persist/es/persistStore";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./root-sagas";

// input the sagas function below into the sagaMiddleware to run
// import { fetchCollectionsStart } from "./shop/shop.saga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// import thunk from redux-thunk and put it in the middleware
const middleware = [sagaMiddleware];

// Use the sagaMiddleware to replace thunk //const middleware = [sagaMiddlware];

// if (process.env.NODE_ENV === 'production') {
    middleware.push(logger)
// }

// Before using persist store
// const store = createStore(rootReducer, applyMiddleware(...middleware));

//FIRST STEP:  After using persist store
export const store = createStore(rootReducer, applyMiddleware(...middleware));

// Run the sagaMiddleware
sagaMiddleware.run(rootSaga) // run the sagaStore 

export const persistor = persistStore(store)
export default {store, persistor};

// const Text = styled.dev`
// color: blue;
// background-color: yellow;
// border: ${({isActive}) => isActive ? "1px solid black": "3px dotted yellow"}
// `
//{/* <Text isActive={false}>i am a componen</Text> */}

// SECOND STEP: Go to root reducer to complete the configuration