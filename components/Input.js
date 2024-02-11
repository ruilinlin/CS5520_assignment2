import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState, useEffect  } from "react";
import colors from '../components/Color';


export default function Input({ value,inputHandler, title}) {


  return (
    <View style={styles.inputContainer}>
      <Text style={styles.titleText}>{title}</Text>
      <TextInput
          style={styles.input}
          value={value}
          onChangeText={inputHandler}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: colors.inputbox,
    borderRadius: 5,
    backgroundColor: colors.inputboxcolor,
  },  
  titleText: {
    margin :5,
    color: colors.inputbox,
  }
})