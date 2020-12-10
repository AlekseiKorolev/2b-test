import classes from "./ingredients-list.styles.module.css";

import { ingredients } from "../../util/ingredients";
import { consumerData } from "../../util/consumer-data";

// interfaces
import { OrderValues } from "../../interfaces/form-values.interface";

const IngredientsList = ({ values }: { values: OrderValues }) => {
  return (
    <div className={classes.listContainer}>
      <div className={classes.title}>
        Пицца {values?.title || "* без названия *"}
      </div>
      <ul className={classes.list}>
        <li>{ingredients[values?.dough ? "think" : "dough"]}</li>
        {values &&
          Object.keys(values).map((ingredient, index: number) =>
            ingredient !== "dough" &&
            (values as any)[ingredient] &&
            !(ingredient in consumerData) ? (
              <li key={`ingList${index}`}>
                {(ingredients as any)[ingredient]}
              </li>
            ) : null
          )}
      </ul>
    </div>
  );
};

export default IngredientsList;
