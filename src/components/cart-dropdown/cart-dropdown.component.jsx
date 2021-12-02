import React from "react";
import { connect } from "react-redux";
import './cart-dropdown.style.scss';
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item.component";

const CartDropDown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItems => (<CartItem  key={cartItems.id} item={cartItems} />))
            }
        </div>
        <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
);

const mapStatToProps = ({cart: {cartItems}}) => ({
    cartItems
});


export default connect(mapStatToProps)(CartDropDown);