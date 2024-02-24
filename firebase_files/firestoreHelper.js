import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function addActivity(data) {
  try {
    const docRef = await addDoc(collection(database, "activities"), data);
    console.log("New activity added with ID: ", docRef.id);
    return docRef.id;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteActivity(id) {
  try {
    await deleteDoc(doc(database, "activities", id));
    console.log("Activity deleted with ID: ", id);
  } catch (err) {
    console.log(err);
  }
}

export async function fetchActivitybyID(id) {
  try {
    const docRef = doc(database, "activities", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const activity = { id: docSnap.id, ...docSnap.data() };
      return activity;
      console.log(activity);
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching activity data: ", error);
  } finally {
    setLoading(false);
  }
}