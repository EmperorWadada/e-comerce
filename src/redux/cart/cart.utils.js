
export const addItemToCart = (cartItems, addCartItem) => {
    const cartItemExist = cartItems.find(cartItem => cartItem.id === addCartItem.id);

    if(cartItemExist) {
      return  cartItems.map(cartItem => 
            cartItem.id === addCartItem.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        );
    }

    return [...cartItems, {...addCartItem, quantity: 1}]
}


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
 const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

 if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItems => cartItems.id !== cartItemToRemove.id)
 }

return cartItems.map(cartItems =>
    cartItems.id === cartItemToRemove.id ? {...cartItems, quantity: cartItems.quantity -1} : cartItems
    )
}