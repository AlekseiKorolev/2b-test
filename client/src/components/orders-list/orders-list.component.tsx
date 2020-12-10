import classes from "./orders-list.styles.module.css";

// interfaces
import { OrderValues } from "../../interfaces/form-values.interface";

const OrdersList = ({
  orders,
  active,
  handleClick
}: {
  orders: Array<OrderValues>;
  active: number;
  handleClick: (e: React.MouseEvent<HTMLLIElement>) => void;
}) => {
  return (
    <ul className={classes.list}>
      {orders.map((order: any, index: number) => (
        <li
          id={index.toString()}
          key={`oredersList${index}`}
          className={active === index ? classes.active : classes.same}
          onClick={handleClick}
        >
          {order.name}, {order.phone}, {order.address} - {order.title}
        </li>
      ))}
    </ul>
  );
};

export default OrdersList;
