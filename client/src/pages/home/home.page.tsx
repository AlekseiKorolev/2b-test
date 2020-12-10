import classes from "./home.styles.module.css";

// redux
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { postOrder } from "../../redux/actions/orders-actions";

// components
import OrderForm from "../../components/order-form/order-form.component";
import PreviewPizza from "../../components/preview-pizza/preview-pizza.component";
import CustomButton from "../../components/custom-button/custom-button.component";

// interfaces
import {
  Form,
  OrderValues,
  OrderErrors
} from "../../interfaces/form-values.interface";
import { Orders } from "../../interfaces/orders.interfaces";
import { UI } from "../../interfaces/ui.interfaces";

const useTypedSelectorForm: TypedUseSelectorHook<Form> = useSelector;
const useTypedSelectorOrders: TypedUseSelectorHook<Orders> = useSelector;
const useTypedSelectorUI: TypedUseSelectorHook<UI> = useSelector;

const Home = () => {
  const values: OrderValues = useTypedSelectorForm(
    state => state.form.order?.values
  );
  const errors: OrderErrors = useTypedSelectorForm(
    state => state.form.order?.syncErrors
  );
  const isOrdered = useTypedSelectorOrders(state => state.orders.isOrdered);
  const { loading, error } = useTypedSelectorUI(state => state.ui);

  const dispatch = useDispatch();

  const handleOrder = () => {
    dispatch(postOrder());
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>Собери свою пиццу</div>
      <div className={classes.subContainer}>
        <PreviewPizza />
        <OrderForm />
      </div>

      {!isOrdered ? (
        <CustomButton
          loading={loading}
          disabled={
            loading || !values || (errors && Object.keys(errors).length !== 0)
          }
          text="заказать"
          handleOrder={handleOrder}
        />
      ) : (
        <div className={classes.subtitle}>Ваш заказ принят</div>
      )}

      {error && <div className={classes.error}>{error}</div>}
    </div>
  );
};

export default Home;
