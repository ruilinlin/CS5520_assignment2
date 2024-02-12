import { StyleSheet, Text, View, FlatList } from 'react-native'
import Header from '../components/Header';
import ActivitiesList from '../components/ActivitiesList';
import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';

export default function AllActivities({navigation, route }) {
  const [activities, setActivities] = useState([]);
  //const route = useRoute();

  useEffect(() => {
    console.log(route.params); 
    if (route.params?.newActivity) {
      setActivities((currentActivities) => [...currentActivities, route.params.newActivity]);
    }
  }, [route.params?.newActivity]);


  return (
    <View>
      <Header title={'All Activities'}/>
      <FlatList
        data={activities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ActivitiesList activity={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({})