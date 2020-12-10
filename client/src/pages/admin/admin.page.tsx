import { useState } from "react";

import classes from "./admin.styles.module.css";

// redux
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { logout } from "../../redux/actions/admin-actions";

// components
import SigninForm from "../../components/signin-form/signin-form.component";
import OrdersList from "../../components/orders-list/orders-list.component";
import IngredientsList from "../../components/ingredients-list/ingredients-list.component";

// interfaces
import { OrderValues } from "../../interfaces/form-values.interface";
import { Orders } from "../../interfaces/orders.interfaces";
import { Adm } from "../../interfaces/admin.interfaces";
import { UI } from "../../interfaces/ui.interfaces";

const useTypedSelectorAdmin: TypedUseSelectorHook<Adm> = useSelector;
const useTypedSelectorUI: TypedUseSelectorHook<UI> = useSelector;
const useTypedSelectorOrders: TypedUseSelectorHook<Orders> = useSelector;

const Admin = () => {
  const [active, setActive] = useState(0);
  const authenticated = useTypedSelectorAdmin(
    state => state.admin.authenticated
  );
  const { loading } = useTypedSelectorUI(state => state.ui);
  const orders: Array<OrderValues> = useTypedSelectorOrders(
    state => state.orders.orders
  );
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setActive(parseInt(e.currentTarget.id));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={classes.container}>
      {authenticated && (
        <div className={classes.logout} onClick={handleLogout}>
          Выйти
        </div>
      )}

      {!authenticated || loading ? (
        <SigninForm />
      ) : orders && orders.length !== 0 ? (
        <div className={classes.orders}>
          <OrdersList
            orders={orders}
            active={active}
            handleClick={handleClick}
          />
          <IngredientsList values={orders[active]} />
        </div>
      ) : (
        <div>Нет сохранённых пицц</div>
      )}
    </div>
  );
};

export default Admin;
