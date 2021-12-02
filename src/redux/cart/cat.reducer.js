import {actionType} from './cart.actionType';
import { addItemToCart } from './cart.utils';

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
            }    
        default:
            return state;
    }

}

export default cartReducer