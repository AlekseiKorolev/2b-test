import classes from "./custom-checkbox.styles.module.css";
import pizza from "../../images/pizza.jpg";

import { ingredientsIcons } from "../../util/ingredients-icons";

const CustomCheckbox = ({
  input,
  type
}: {
  input: any;
  type: keyof typeof ingredientsIcons;
  index: number;
}) => {
  return (
    <div className={classes.ingredient}>
      <label htmlFor={type} className={classes.switch}>
        <div>
          <input {...input} id={type} type="checkbox" />
          <span className={classes.slider}></span>
        </div>
      </label>
      <div
        className={classes.icon}
        style={{
          ...ingredientsIcons[type],
          backgroundImage: `url(${pizza})`
        }}
      />
    </div>
  );
};

export default CustomCheckbox;
