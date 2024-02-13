import { StyleSheet, Text, View, FlatList,Button,SafeAreaView } from 'react-native'
import Header from '../components/Header';
import ActivitiesList from '../components/ActivitiesList';
import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import colors from '../components/Color';
import BottomTab from '../components/BottomTab';
import {useActivities} from '../components/ActivitiesContext';

export default function AllActivities({navigation, route }) {
//  const [activities, setActivities] = useState([]);
  const { activities, setActivities } = useActivities();

  useEffect(() => {
    if (route.params?.newActivity) {
      setActivities((currentActivities) => {
        // Check if the new activity already exists based on multiple attributes
        const doesExist = currentActivities.some(activity =>
          activity.date === route.params.newActivity.date &&
          activity.duration === route.params.newActivity.duration &&
          activity.activity === route.params.newActivity.activity
        );
  
        // If it does not exist, add it to the list
        if (!doesExist) {
          return [...currentActivities, route.params.newActivity];
        }
        return currentActivities;
      });
    }
  }, [route.params?.newActivity]);
  

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