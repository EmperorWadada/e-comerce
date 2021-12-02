export const addItemToCart = (cartItems, addCartItem) => {
    const cartItemExist = cartItems.find(cartItem => cartItem.id === addCartItem.id);

    if(cartItemExist) {
      return  cartItems.map(cartItem => 
            cartItem.id === addCartItem.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        );
    }

    return [...cartItems, {...addCartItem, quantity: 1}]
}