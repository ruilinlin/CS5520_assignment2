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
    padding: 8,
    width:120,
    height:30,
    borderRadius:5,
    alignItems:"center",
  },
  text: {
    fontSize: 14,
  },
  textDisabled: {
    fontSize: 14,
    color: colors.unabletext, 
  },
});

export default CustomButton;