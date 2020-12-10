import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// reducers
import { reducer as formReducer } from "redux-form";
import uiReducer from "./reducers/ui-reducer";
import ordersReducer from "./reducers/orders-reducer";
import adminReducer from "./reducers/admin-reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const reducers = combineReducers({
  form: formReducer,
  ui: uiReducer,
  orders: ordersReducer,
  admin: adminReducer
});

const store = createStore(
  reducers,
  compose(applyMiddleware(...middleware), composeEnhancers())
);

export default store;
