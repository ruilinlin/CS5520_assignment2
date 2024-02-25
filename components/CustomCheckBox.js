import CheckBox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CustomCheckBox({handleremove,text}) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
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
  },
  checkbox: {
    margin: 8,
  },  
})