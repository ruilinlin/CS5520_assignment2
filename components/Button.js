import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import colors from '../components/Color';

const CustomButton = ({ title,onPress, disabled, style,textStyle }) => {
//  const textStyle = disabled ? styles.textDisabled : styles.text;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({pressed}) => [
        {opacity: pressed ? 0.3 : 1,},
        styles.buttonContainer,
        style,
//       disabled && style.disabled,
      ]}
    >
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    width:120,
    height:40,
    borderRadius:5,
    alignItems:"center",
  },
  text: {
    fontSize: 16,
  },
  textDisabled: {
    fontSize: 16,
    color: colors.unabletext, 
  },
});

export default CustomButton;