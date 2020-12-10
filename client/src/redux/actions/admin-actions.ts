import axios from "axios";
import {
  ADMIN_AUTH,
  CLEAR_ERROR,
  SET_ERROR,
  LOADING,
  LOGOUT,
  GET_ORDERS
} from "../types";
import store from "../store";

export const signin = () => (dispatch: any) => {
  const admin = store.getState().form.signin.values;
  dispatch({ type: LOADING });
  axios
    .post("/admin", admin)
    .then((res: any) => {
      dispatch({ type: ADMIN_AUTH });
      dispatch({ type: GET_ORDERS, payload: res.data });
      dispatch({ type: CLEAR_ERROR });
    })
    .catch(err => {
      dispatch({ type: SET_ERROR, payload: err?.response?.data?.message });
    });
};

export const logout = () => (dispatch: any) => {
  dispatch({ type: LOGOUT });
};
