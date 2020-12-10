import { POST_ORDER, GET_ORDERS, LOGOUT } from "../types";

const initialState = {
  isOrdered: false,
  orders: []
};

const ordersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case POST_ORDER:
      return { ...state, isOrdered: true };
    case GET_ORDERS:
      return { ...state, orders: action.payload };
    case LOGOUT:
      return { ...state, orders: [] };
    default:
      return state;
  }
};

export default ordersReducer;
