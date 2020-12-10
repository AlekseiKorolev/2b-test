import classes from "./preview-ingredient.styles.module.css";

import pizza from "../../images/pizza.png";

import { ingredientsPreview } from "../../util/ingredients-preview";

const number = Array(2).fill(0);

const PreviewIngredient = ({
  ingredient
}: {
  ingredient: keyof typeof ingredientsPreview;
}) => {
  return ingredient === "dough" || ingredient === "thick" ? (
    <div
      style={{
        ...ingredientsPreview[ingredient],
        backgroundImage: `url(${pizza})`
      }}
    />
  ) : (
    <div className={classes[ingredient]}>
      {number.map((_, i) => (
        <div
          key={`ingPrevNumber${i}`}
          style={{
            ...ingredientsPreview[ingredient],
            backgroundImage: `url(${pizza})`
          }}
        />
      ))}
    </div>
  );
};

export default PreviewIngredient;
