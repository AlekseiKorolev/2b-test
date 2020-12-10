import { db } from "../util/admin";

export const postOrder = (req: any, res: any) => {
  const values = { ...req.body };
  db.collection("orders")
    .add(values)
    .then(() => {
      return res.json({ message: "Заказ принят" });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        message: "Что то пошло не так, попробуйте разместить заказ позднее",
      });
    });
};
