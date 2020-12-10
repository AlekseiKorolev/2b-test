import classes from "./custom-input.styles.module.css";

const CustomInput = ({
  input,
  type,
  label,
  meta: { touched, error }
}: {
  input: any;
  label: string;
  type: string;
  meta: any;
}) => {
  return (
    <div className={classes.input}>
      <label>{label} :</label>
      <input
        {...input}
        type={type}
        className={touched && error ? classes.error : null}
      />
    </div>
  );
};

export default CustomInput;
