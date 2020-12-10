import classes from "./custom-button.styles.module.css";

// components
import Spin from "../../components/spin/spin.component";

const CustomButton = ({
  loading,
  disabled,
  text,
  handleOrder
}: {
  loading: boolean;
  disabled: boolean;
  text: string;
  handleOrder: () => any;
}) => {
  return (
    <div className={classes.buttonContainer}>
      <button
        className={classes.button}
        disabled={disabled}
        onClick={handleOrder}
      >
        {text}
      </button>
      {loading && <Spin />}
    </div>
  );
};

export default CustomButton;
