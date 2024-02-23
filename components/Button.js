import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import colors from '../components/Color';

const CustomButton = ({ title,onPress, disabled, style}) => {
  const textStyle = disabled ? styles.textDisabled : styles.text;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({pressed}) => [
        styles.buttonContainer,
        style,
//       disabled && style.disabled,
      ]}
    >
      <Text style={[textStyle,disabled && style.textDisabled]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: colors.text, 
  },
  textDisabled: {
    fontSize: 16,
    color: colors.unabletext, 
  },
});

export default CustomButton;