import React from "react";
import './checkout-item.style.scss'
import { connect } from "react-redux";
import { clearItemFromCart, addItems, removeItem } from "../../redux/cart/cat.action";

const CheckOutItem = ({cartItems, clearItem, addItem, removeItem}) => {
    const {name, quantity, imageUrl, price} = cartItems
    return(
    <div className="checkout-item">
        <div className="image-container">
        <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => removeItem(cartItems)}>&#10094;</div>
            <span className="value">{quantity}</span> 
            <div className="arrow" onClick={() => addItem(cartItems)}>&#10095;</div>
        </span>
        <div className="remove-button"
         onClick={() => clearItem(cartItems)}
        >&#10005;</div>
    </div>
);}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItems(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckOutItem);