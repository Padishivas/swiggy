import { ADD_TO_CART } from '../components/actions';

const initialState = {
  cartItems: [
    {id:1,
    name:"shiva",
    price:10},
    {id:2,
        name:"ram",
        price:20}
  ],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;