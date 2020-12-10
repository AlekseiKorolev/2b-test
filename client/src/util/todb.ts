import { OrderValues } from "../interfaces/form-values.interface";

import { orderValues } from "./order-values";

export const todb = (data: OrderValues | undefined): OrderValues => {
  const values = { ...orderValues };
  for (let key of Object.keys(values)) {
    if ((data as any)[key]) {
      (values as any)[key] = (data as any)[key];
    } else {
      (values as any)[key] = false;
    }
  }

  return values;
};
