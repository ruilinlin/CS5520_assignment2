import { collection, addDoc, doc, deleteDoc, getDoc, updateDoc} from "firebase/firestore";
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
      console.log("Document data:", docSnap.data());
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching activity data: ", error);
  }
}

export async function updatedActivities(id){
  try {
    const docRef = doc(database, "activities", id);
    await updateDoc(docRef, updatedActivityData);
  } catch (err) {
    console.log(err);
  }
}