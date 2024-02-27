import { StyleSheet, Text, View } from 'react-native'
import { querySnapshot, collection, onSnapshot } from 'firebase/firestore';
import { database } from "../firebase_files/firebaseSetup";
import React, { useState, useEffect } from 'react';

/**
 * A custom React hook that subscribes to a Firestore collection to fetch and listen for real-time updates
 * on the activities data. It returns an array of activities, each containing the data fetched from Firestore.
 *
 * Usage:
 * This hook is intended to be used within components that need to display or otherwise interact with
 * a list of activities stored in Firestore. It abstracts the details of subscribing to Firestore updates,
 * transforming document snapshots into usable data, and ensuring that the subscription is properly
 * cleaned up when the component using this hook unmounts.
 *
 * Returns:
 * - activities: An array of activity objects, each containing the data from Firestore along with the document ID.
 */
export default function useActivityList() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    const collectionRef = collection(database, "activities");
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const updatedActivities = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setActivities(updatedActivities);
      
    }, (error) => {
      console.error("Error fetching activities", error);
    });
// Cleanup on unmount
    return () => unsubscribe(); 
  }, []);

  return activities;
};