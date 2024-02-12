import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import ActivitiesList from '../components/ActivitiesList';

export default function AllActivities() {
  const [activity, setactivities] = useState([]);
  function AddActivity(){
    const newActivity = {};
    setactivities((currentactivity) => [...currentactivity,newActivity]);
  }
  return (
    <View>
      <Header title={'All Activities'}/>
      <ActivitiesList />

    </View>
  )
}

const styles = StyleSheet.create({})