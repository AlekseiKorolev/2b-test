import { ADMIN_AUTH, LOGOUT } from "../types";

const initialState = {
  authenticated: false
};

const adminReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADMIN_AUTH:
      return { ...state, authenticated: true };
    case LOGOUT:
      return { ...state, authenticated: false };
    default:
      return state;
  }
};

export default adminReducer;
