import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from './Color';

const CustomButton = ({ title, onPress, disabled, style }) => {
  const buttonStyle = disabled ? styles.buttonDisabled : styles.button;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[buttonStyle, style]} // Combine button style with custom style
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 16, 
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.text, 
  },
  buttonDisabled: {
    backgroundColor: colors.text, 
  },
});

export default CustomButton;