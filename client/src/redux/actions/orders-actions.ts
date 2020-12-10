import axios from "axios";
import { POST_ORDER, LOADING, CLEAR_ERROR, SET_ERROR } from "../types";
import store from "../store";
import { todb } from "../../util/todb";

export const postOrder = () => (dispatch: any) => {
  dispatch({ type: LOADING });
  const values = todb(store.getState().form.order.values);
  axios
    .post("order", values)
    .then(() => {
      dispatch({ type: POST_ORDER });
      dispatch({ type: CLEAR_ERROR });
    })
    .catch(err => {
      dispatch({ type: SET_ERROR, payload: err?.response?.data?.message });
    });
};
