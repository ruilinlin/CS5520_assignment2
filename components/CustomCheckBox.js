import CheckBox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './Color';

export default function CustomCheckBox({handleremove,text,style}) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={[styles.container,style]}>
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
    marginHorizontal: 16,
    marginVertical: 32,
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