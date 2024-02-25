import { StyleSheet, Text, View } from 'react-native'
import { querySnapshot, collection, onSnapshot } from 'firebase/firestore';
import { database } from "../firebase_files/firebaseSetup";
import React, { useState, useEffect } from 'react';

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

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return activities;
};