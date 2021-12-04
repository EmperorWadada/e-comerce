import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItem, selectCartTotal } from "../../../redux/cart/cart.selector";
import './checkout.style.scss'

import CheckOutItem from "../../checkout-item/checkout-item.component";


const CheckOutPage = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
              <span>Product</span>
            </div>
            <div className="header-block">
              <span>Description</span>
            </div>
            <div className="header-block">
              <span>Quantity</span>
            </div>
            <div className="header-block">
              <span>Price</span>
            </div>
            <div className="header-block">
              <span>Remove</span>
            </div>
        </div>
            {
                cartItems.map(cartItems => <CheckOutItem key={cartItems.id} cartItems={cartItems}/>)
            }
            <div className="total">
              <span>TOTAL: ${total}</span>
            </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckOutPage);