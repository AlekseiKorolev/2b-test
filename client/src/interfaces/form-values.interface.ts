export interface Form {
  form: {
    order: {
      values: OrderValues;
      syncErrors: OrderErrors;
    };
  };
}

export interface OrderValues {
  dough?: boolean;
  tomatoes?: boolean;
  pepper?: boolean;
  olives?: boolean;
  basil?: boolean;
  mushrooms?: boolean;
  cheese?: boolean;
  salami?: boolean;
  jamon?: boolean;
  title?: string;
  name?: string;
  address?: string;
  phone?: string;
}

export interface OrderErrors {
  phone: string;
  title: string;
  address: string;
  name: string;
}
