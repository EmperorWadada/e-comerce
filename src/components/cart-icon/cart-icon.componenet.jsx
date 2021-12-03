import React from "react";
import { connect } from "react-redux";
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.style.scss';
import { toggleCartHidden } from "../../redux/cart/cat.action";
import { createItemCount } from "../../redux/cart/cart.selector";


const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count"> {itemCount} </span>
    </div>
)

const maptDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

// Before using selector
// const mapStatToProps = ({ cart: {cartItems} }) => ({
//     itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
// })

// After using selector
const mapStatToProps = (state) => ({
    itemCount: createItemCount(state)
})

export default connect(mapStatToProps, maptDispatchToProps)(CartIcon); 