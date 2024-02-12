import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import colors from './Color';

export default function Header({ title}) {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <Text style ={styles.headerText}>{title}</Text>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerContainer:{
    backgroundColor: colors.header,
    width: '100%',
    height: 60,
    padding: 5,
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  headerText: {
    color: colors.title,
    fontSize: 20,
  },
});