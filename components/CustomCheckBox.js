import CheckBox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './Color';

export default function CustomCheckBox({handleremove,text}) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <CheckBox 
      style = {styles.checkbox}
      value={isChecked} // Use value to control checked state
      onValueChange={(newValue) => {
        setChecked(newValue); // Update internal checked state
        handleremove(); 
      }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"93%",
    marginHorizontal: 16,
    marginVertical: 32,
    flexDirection: 'row',
  },
  text:{
    color:colors.text,
    marginRight:20,
  },
  checkbox: {
    marginLeft:30,
    margin: 8,
  },  
})