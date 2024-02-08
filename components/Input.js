import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";


export default function Input({inputHandler}) {
  const [text, setText] = useState("");

  function confirmHandler(){
    inputhandler(text);
    setText("");
  }

  function resetHandler(){
    setText("");
  }

  function changeTextHandler(changeText){
    setText(changeText)
  }

  return (
    <View style={styles.inputContainer}>
      <Text>Input</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})