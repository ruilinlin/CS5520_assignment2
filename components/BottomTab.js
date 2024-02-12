import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import colors from './Color';

export default function BottomTab( navigation) {
  return (
    <View style={styles.TabContainer}>
      <Text>BottomTab</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  TabContainer:{
    backgroundColor: colors.header,
    width: '100%',
    height: 70,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'space-between', 
    flexDirection: 'row',
  }
})