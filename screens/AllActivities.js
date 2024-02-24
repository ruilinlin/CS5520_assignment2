import { StyleSheet, Text, View, FlatList,Button,SafeAreaView,Alert, } from 'react-native'
import Header from '../components/Header';
import ActivitiesList from '../components/ActivitiesList';
import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import colors from '../components/Color';
import { querySnapshot, collection, onSnapshot } from 'firebase/firestore';
import { database } from "./firebaseSetup";

export default function AllActivities({navigation}) {
  const [activities, setActivities] = useState();
//  const { activities, setActivities } = useActivities();


  useEffect(() => {
    // Reference to Firestore collection    
    const collectionRef = collection(database, "activities");
    onSnapshot(collectionRef,(Snapshot) => {
      if(Snapshot.empty){
        Alert.alert("the databse is empty");
        return;
      }
    let updateActivities = [];
    querySnapshot.array.forEach(doc => {
      updateActivities.push({...doc.data(),id: doc.id });
    });
    setActivities(updateActivities);
    });

    // if (route.params?.newActivity) {
    //   setActivities((currentActivities) => {

    //     const doesExist = currentActivities.some(activity =>
    //       activity.date === route.params.newActivity.date &&
    //       activity.duration === route.params.newActivity.duration &&
    //       activity.activity === route.params.newActivity.activity
    //     );
  
    //     if (!doesExist) {
    //       return [...currentActivities, route.params.newActivity];
    //     }
    //     return currentActivities;
    //   });
    // }
    
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  

  return (
    <View style={styles.container}>
      <Header title={'All Activities'} navigation={navigation} showAddButton={true}/>
      <FlatList style={styles.listContainer}
        data={activities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ActivitiesList activity={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.background,
    justifyContent: "center",
  },
  listContainer:{
    marginTop:30,
    marginBottom:30,
  }
})