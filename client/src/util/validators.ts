export const required = (value: string): string | undefined =>
  value || typeof value === "number" ? undefined : "Поле не должно быть пустым";

export const phone = (value: string): string | undefined =>
  value && !/^(0|[1-9][0-9]{10})$/i.test(value)
    ? "Телефонный номер должен быть 10-ти значным"
    : undefined;

export const email = (value: string) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Неверный формат"
    : undefined;
