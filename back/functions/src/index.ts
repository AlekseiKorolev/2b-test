import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";

import { adminSignin } from "./handlers/admin";
import { postOrder, getOrders } from "./handlers/orders";

const app = express();
app.use(cors());

// order routes
app.post("/order", postOrder);
app.get("/orders", getOrders);

// admin routes
app.post("/admin", adminSignin);

exports.api = functions.https.onRequest(app);
