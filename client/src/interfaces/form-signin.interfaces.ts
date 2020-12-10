export interface SignForm {
  form: {
    signin: {
      values: Signin;
      syncErrors: SignErrors;
    };
  };
}

interface Signin {
  email?: boolean;
  password?: boolean;
}

export interface SignErrors {
  email?: string;
  password?: string;
}
