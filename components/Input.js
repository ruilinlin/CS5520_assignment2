import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";


export default function Input({inputHandler, title}) {
  const [text, setText] = useState("");

  function confirmHandler(){
    inputHandler(text);
    setText("");
  }



  function changeTextHandler(changeText){
    setText(changeText)
  }

  return (
    <View style={styles.inputContainer}>
      <Text>{title}</Text>
      <TextInput
          style={styles.input}
          value={text}
          onChangeText={changeTextHandler}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: colors.inputboxcolor,
    width: "50%",
  },  

})