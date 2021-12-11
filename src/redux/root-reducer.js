
import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import userReducer from "./user-reducer/user-reducer";
import cartReducer from "./cart/cat.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop-reducer";

// PersistReducer Configuration object

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

// Befor modification
// export default combineReducers({
//     user: userReducer,
//     cart: cartReducer
// });

// After modification

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer)

// NOTE: Go to index.js to complete the installation