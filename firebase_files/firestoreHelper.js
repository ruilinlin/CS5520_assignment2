import { collection, addDoc, doc, deleteDoc, getDoc, updateDoc} from "firebase/firestore";
import { database } from "./firebaseSetup";

/**
 * Adds a new activity to the Firestore database.
 * 
 * @param {Object} data - The data for the new activity to be added.
 * @returns {Promise<string|undefined>} The ID of the added activity or undefined if an error occurred.
 */
export async function addActivity(data) {
  try {
    const docRef = await addDoc(collection(database, "activities"), data);
    console.log("New activity added with ID: ", docRef.id);
    return docRef.id;
  } catch (err) {
    console.log(err);
  }
}

/**
 * Deletes an activity from the Firestore database based on its ID.
 * 
 * @param {string} id - The ID of the activity to be deleted.
 */
export async function deleteActivity(id) {
  try {
    await deleteDoc(doc(database, "activities", id));
    console.log("Activity deleted with ID: ", id);
  } catch (err) {
    console.log(err);
  }
}

/**
 * Fetches an activity from the Firestore database by its ID.
 * 
 * @param {string} id - The ID of the activity to fetch.
 * @returns {Promise<Object|undefined>} The activity data including its ID or undefined if the activity does not exist or an error occurred.
 */
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

/**
 * Updates an existing activity in the Firestore database.
 * 
 * @param {string} id - The ID of the activity to update.
 * @param {Object} updatedActivityData - The new data for the activity.
 */
export async function updatedActivities(id,updatedActivityData){
  try {
    const docRef = doc(database, "activities", id);
    await updateDoc(docRef, updatedActivityData);
  } catch (err) {
    console.log(err);
  }
}