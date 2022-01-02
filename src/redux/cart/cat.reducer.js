import {actionType} from './cart.actionType';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case actionType.ADD_ITEM:
            return {
                ...state,
            
                // cartItems: [...state.cartItems, action.payload]

                //  Use the util function to update cartItems
                cartItems: addItemToCart(state.cartItems, action.payload)
            } ;
        case actionType.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItems => cartItems.id !== action.payload.id)
            };
        case actionType.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case actionType.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }   
        default:
            return state;
    }

}

export default cartReducer