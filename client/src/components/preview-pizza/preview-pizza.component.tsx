import classes from "./preview-pizza.styles.module.css";

// redux
import { useSelector, TypedUseSelectorHook } from "react-redux";

// components
import PreviewIngredient from "../preview-ingredient/preview-ingredient.component";
import IngredientsList from "../ingredients-list/ingredients-list.component";

// interfaces
import { Form, OrderValues } from "../../interfaces/form-values.interface";

const useTypedSelector: TypedUseSelectorHook<Form> = useSelector;

const PreviewPizza = () => {
  const values: OrderValues = useTypedSelector(
    state => state.form.order?.values
  );

  return (
    <div className={classes.preview}>
      <PreviewIngredient
        key={`ingPreview000`}
        ingredient={values?.dough ? "thick" : "dough"}
      />
      {values &&
        Object.keys(values).map((ingredient: any, index: number) =>
          ingredient !== "dough" && (values as any)[ingredient] ? (
            <PreviewIngredient
              key={`ingPreview${index}`}
              ingredient={ingredient}
            />
          ) : null
        )}
      <IngredientsList values={values} />
    </div>
  );
};

export default PreviewPizza;
