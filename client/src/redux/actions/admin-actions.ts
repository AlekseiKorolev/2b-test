import axios from "axios";
import { ADMIN_AUTH, CLEAR_ERROR, SET_ERROR, LOADING, LOGOUT } from "../types";
import store from "../store";
import { getOrders } from "./orders-actions";

export const signin = () => (dispatch: any) => {
  const admin = store.getState().form.signin.values;
  dispatch({ type: LOADING });
  axios
    .post("/admin", admin)
    .then(() => {
      dispatch({ type: ADMIN_AUTH });
      dispatch({ type: CLEAR_ERROR });
      dispatch(getOrders());
    })
    .catch(err => {
      dispatch({ type: SET_ERROR, payload: err.response.data.message });
    });
};

export const logout = () => (dispatch: any) => {
  dispatch({ type: LOGOUT });
};
