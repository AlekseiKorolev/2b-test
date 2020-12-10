import { db } from "../util/admin";

export const adminSignin = (req: any, res: any) => {
  const admin = req.body;
  db.collection("users")
    .doc("admin")
    .get()
    .then((doc: any) => {
      if (!doc.exists) {
        return res.status(404).json({ message: "Запись не найден" });
      }
      const credentials = doc.data();
      if (
        credentials.email === admin.email &&
        credentials.password === admin.password
      ) {
        db.collection("orders")
          .get()
          .then((data: any) => {
            const orders: Array<any> = [];
            data.forEach((el: any) => {
              orders.push({
                ...el.data(),
              });
            });
            return res.json(orders);
          })
          .catch(err => {
            console.error(err);
            res.status(500).json({
              message: "Что то пошло не так",
            });
          });
      } else {
        return res
          .status(401)
          .json({ message: "Неверные пароль/электронная почта" });
      }
    })
    .catch(() => {
      res.status(500).json({
        message: "Что-то пошло не так. Попробуйте повторить попытку позднее",
      });
    });
};
