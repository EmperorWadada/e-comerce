import { actionType } from "./cart.actionType";

export const toggleCartHidden = () => ({
    type: actionType.TOGGLE_CART_HIDDEN,
});


export const addItems = items => ({
    type: actionType.ADD_ITEM,
    payload: items
});

export const removeItem = item => ({
    type: actionType.REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: actionType.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const clearCart = () => ({
    type: actionType.CLEAR_CART
})