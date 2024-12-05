const initialState = {
  selectedShipping: null,
  shippingOptions: [
    { id: 1, name: "Standard Shipping", cost: 20 },
    { id: 2, name: "Express Shipping", cost: 50 },
    { id: 3, name: "Free Shipping", cost: 0 },
  ],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SHIPPING_METHOD":
      return {
        ...state,
        selectedShipping: action.payload,
        totalPrice: state.totalPrice + action.payload.cost,
      };
    default:
    return state;
  }
}

export default rootReducer;

