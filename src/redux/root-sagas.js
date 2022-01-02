import {all, call} from 'redux-saga/effects';

import { fetchCollectionsStart } from './shop/shop.sagas';
import { userSagas } from './user-reducer/user-sagas';
import { cartSagas } from './cart/cart-saga';

export default function* rootSaga() {
    yield all([call(fetchCollectionsStart), call(userSagas), call(cartSagas)])
}

// you can now run the rootSage in redux store