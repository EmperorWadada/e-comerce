import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import './cart-dropdown.style.scss';
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItem, selectCartItemHidden } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cat.action";

const CartDropDown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            { 
              cartItems.length ? 
              (cartItems.map(cartItems => (<CartItem  key={cartItems.id} item={cartItems} />)))
              : (<span className="empty-message">Your cart is empty</span>)
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
            
        }}> GO TO CHECKOUT </CustomButton>
    </div>
);

// Before using selector
// const mapStatToProps = ({cart: {cartItems}}) => ({
//     cartItems
// });

// After using selector 
const mapStatToProps =  createStructuredSelector({
    cartItems: selectCartItem,
    hidden: selectCartItemHidden
});


export default withRouter(connect(mapStatToProps)(CartDropDown));