import classes from "./signin-form.styles.module.css";

import { email, required } from "../../util/validators";

// redux
import { reduxForm, Field } from "redux-form";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { signin } from "../../redux/actions/admin-actions";

// components
import CustomInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";

// interfaces
import { UI } from "../../interfaces/ui.interfaces";
import { SignForm, SignErrors } from "../../interfaces/form-signin.interfaces";

const renderConsumerData = (props: any) => <CustomInput {...props} />;

const useTypedSelectorUI: TypedUseSelectorHook<UI> = useSelector;
const useTypedSelectorSignin: TypedUseSelectorHook<SignForm> = useSelector;

const SigninForm = () => {
  const errors: SignErrors = useTypedSelectorSignin(
    state => state.form.signin?.syncErrors
  );
  const { loading, error } = useTypedSelectorUI(state => state.ui);

  const dispatch = useDispatch();

  const handleSignin = () => {
    dispatch(signin());
  };

  return (
    <div className={classes.form}>
      <div className={classes.title}>Вход администратора:</div>
      <Field
        name={"email"}
        type={"email"}
        label={"Электронная почта"}
        component={renderConsumerData}
        validate={[required, email]}
      />
      <Field
        name={"password"}
        type={"password"}
        label={"Пароль"}
        component={renderConsumerData}
        validate={required}
      />

      <CustomButton
        loading={loading}
        disabled={loading || (errors && Object.keys(errors).length !== 0)}
        text="войти"
        handleOrder={handleSignin}
      />

      {error && <div className={classes.error}>{error}</div>}
    </div>
  );
};

export default reduxForm({ form: "signin" })(SigninForm);
