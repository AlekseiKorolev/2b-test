import classes from "./order-form.styles.module.css";

import { ingredientsIcons } from "../../util/ingredients-icons";
import { consumerData } from "../../util/consumer-data";
import { phone, required } from "../../util/validators";

// redux
import { reduxForm, Field } from "redux-form";

// components
import CustomCheckbox from "../custom-checkbox/custom-checkbox.component";
import CustomInput from "../custom-input/custom-input.component";

const renderIngredients = (props: any) => <CustomCheckbox {...props} />;
const renderConsumerData = (props: any) => <CustomInput {...props} />;

const OrderForm = () => {
  return (
    <div className={classes.form}>
      <div className={classes.ingredients}>
        <div className={classes.title}>Ингредиенты:</div>
        {Object.keys(ingredientsIcons).map((ingredient: any, index: number) => (
          <Field
            key={`consume${index}`}
            name={ingredient}
            type={ingredient}
            index={index}
            component={renderIngredients}
          />
        ))}
      </div>
      <div className={classes.consumerData}>
        <div className={classes.title}>Данные пользователя:</div>
        {Object.keys(consumerData).map((data: any, index: number) => (
          <Field
            key={`ingredient${index}`}
            name={data}
            type="text"
            index={index}
            label={(consumerData as any)[data]}
            component={renderConsumerData}
            validate={data === "phone" ? [required, phone] : required}
          />
        ))}
      </div>
    </div>
  );
};

export default reduxForm({ form: "order" })(OrderForm);
