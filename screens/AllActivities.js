import { StyleSheet, Text, View, FlatList,Button,SafeAreaView,Alert, } from 'react-native'
import Header from '../components/Header';
import ActivitiesItem from '../components/ActivitiesItem.js';
import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import colors from '../components/Color';
import ActivityList from '../components/ActivityList';
import { querySnapshot, collection, onSnapshot } from 'firebase/firestore';

export default function AllActivities({navigation}) {
  const activities = ActivityList();
//  const { activities, setActivities } = useActivities();


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


  return (
    <View style={styles.container}>
      <Header title={'All Activities'} navigation={navigation} showAddButton={true}/>
      <FlatList style={styles.listContainer}
        data={activities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ActivitiesItem activity={item} />
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