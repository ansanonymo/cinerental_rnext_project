const initialCartState = {
  cartData: [],
};

const cartReducer = (cartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cartData: [...cartState.cartData, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...cartState,
        cartData: cartState.cartData.filter(
          (item) => item.id != action.payload.id
        ),
      };
    default:
      return cartState;
  }
};

export { cartReducer, initialCartState };
