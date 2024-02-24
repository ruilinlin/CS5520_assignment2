import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function EditActivity(route, navigation) {
  const{ activityId } = route.params;
  
  return (
    <View>
      <Text>EditActivity</Text>
    </View>
  )
}

const styles = StyleSheet.create({})