import { StyleSheet, Text, View, FlatList,Button,SafeAreaView,Alert, } from 'react-native'
import Header from '../components/Header';
import ActivitiesItem from '../components/ActivitiesItem.js';
import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import colors from '../components/Color';
import useActivityList from '../components/useActivityList';
import { querySnapshot, collection, onSnapshot } from 'firebase/firestore';

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