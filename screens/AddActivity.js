import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'

export default function AddActivity({navigation}) {
  const [activity, setactivities] = useState([]);
  function AddActivity(){
    const newActivity = {};
    setactivities((currentactivity) => [...currentactivity,newActivity]);
  }
  return (
    <View>
      <Header title={"All Activities"}/>
      <Text>AddActivity</Text>
    </View>
  )
}

const styles = StyleSheet.create({})