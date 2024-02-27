import { StyleSheet, Text, View, FlatList,Button,SafeAreaView,Alert, } from 'react-native'
import Header from '../components/Header';
import ActivitiesItem from '../components/ActivitiesItem.js';
import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import colors from '../components/Color';
import useActivityList from '../components/useActivityList';
import { querySnapshot, collection, onSnapshot } from 'firebase/firestore';

/**
 * AllActivities Component
 * 
 * Displays a list of all activity items fetched from a Firebase Firestore collection.
 * Each activity item is displayed using the ActivitiesItem component. This component also includes
 * a Header component with an add button that navigates to a screen to add a new activity.
 * 
 * Props:
 * - navigation: The navigation prop provided by React Navigation. It's used to navigate
 *   between screens, particularly to add a new activity.
 * 
 * Uses a custom hook, useActivityList, to subscribe to updates in the Firestore collection
 * and update the list of activities in real-time.
 * 
 * @returns {React.Component} A view containing a list of activities and a header with an add button.
 */

export default function AllActivities({navigation}) {
  const activities = useActivityList();


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