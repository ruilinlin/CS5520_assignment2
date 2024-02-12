import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../components/Color';

const CustomButton = ({ title, onPress, disabled, style }) => {
  const textStyle = disabled ? styles.textDisabled : styles.text;
  const buttonContainer = styles.buttonContainer;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[buttonContainer , style]} // Combine button style with custom style
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
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