import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function writeToDB(data) {
  try {
    const docRef = await addDoc(collection(database, "activities"), data);
    console.log("New activity added with ID: ", docRef.id);
    return docRef.id;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteFromDB(id) {
  try {
    await deleteDoc(doc(database, "activities", id));
    console.log("Activity deleted with ID: ", id);
  } catch (err) {
    console.log(err);
  }
}