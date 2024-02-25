import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CheckBox(setChecked,text) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Text>text</Text>
      <CheckBox 
      style = {styles.checkbox}
      onchange = {setChecked} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  checkbox: {
    margin: 8,
  },  
})