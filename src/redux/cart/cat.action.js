import { actionType } from "./cart.actionType";

export const toggleCartHidden = () => ({
    type: actionType.TOGGLE_CART_HIDDEN,
});


export const addItems = items => ({
    type: actionType.ADD_ITEM,
    payload: items
})