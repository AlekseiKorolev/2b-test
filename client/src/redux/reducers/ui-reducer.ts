import { LOADING, CLEAR_ERROR, SET_ERROR } from "../types";

const initialState = {
  loading: false,
  error: ""
};

const uiReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case CLEAR_ERROR:
      return { ...state, error: "", loading: false };
    case SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default uiReducer;
