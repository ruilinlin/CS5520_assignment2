import CheckBox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './Color';

export default function CustomCheckBox({text,style,isChecked,onValueChange}) {


  return (
    <View style={[styles.container,style]}>
      <Text style={styles.text}>{text}</Text>
      <CheckBox 
      style = {styles.checkbox}
      value={isChecked} // Use value to control checked state
      onValueChange={onValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 50,
    marginLeft:15,
    flexDirection: 'row',
  },
  text:{
    color:colors.text,
    marginRight:5,
  },
  checkbox: {
    marginLeft:5,
  },  
})