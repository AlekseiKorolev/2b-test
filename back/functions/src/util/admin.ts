import * as functions from "firebase-functions";
import * as firebase from "firebase-admin";

//import { config } from "../config/key";

const admin = firebase.initializeApp(
  functions.config()
    .firebase /*{
  credential: firebase.credential.cert(config),
}*/
);

const db = admin.firestore();

export { admin, db };
