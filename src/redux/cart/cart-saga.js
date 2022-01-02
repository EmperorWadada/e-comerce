
import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import UserActionType from "../user-reducer/user.types";
import { clearCart } from "./cat.action";

export function* onClearCart() {
    yield put(clearCart())
}

export function* clearCartItems() {
    yield takeLatest(UserActionType.SIGN_OUT_SUCCESS, onClearCart)
}

export function* cartSagas() {
    yield all([call(clearCartItems)])
}