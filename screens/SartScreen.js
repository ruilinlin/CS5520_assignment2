import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import Input from '../components/Input';
import CustomButton from '../components/Button';
import colors from '../components/Color';

export default function SartScreen(navigation) {
  const firstbox = "Email Address"
  const secondbox = "Phone Number"
  const[NumberError, setNumberError] = useState('');
  const[EmailError, setEmailError] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  
  function validatePhoneNumber(number) {
    return /^\d{10}$/.test(number);
  }
  
  function handleConfirm() {
    let isValid = true;
    setEmailError('');
    setNumberError('');
  
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      setNumberError('Please enter a valid phone number.');
      isValid = false;
    }
  
    if (isValid) {
      // navigation.navigate('NextScreenName');
    }
  }
  
  function resetHandler() {
    setEmail('');
    setPhoneNumber('');
    setEmailError('');
    setPhoneNumberError('');
  }
  
  return (
    <View style={styles.container}>

      <Input 
        inputHandler={setEmail}
        title="Email Address"
        errorMessage={EmailError}
      />

      <Input 
        inputHandler={setPhoneNumber}
        title="Phone Number"
        errorMessage={NumberError}
      />

      <CustomButton title='Reset' onPress={resetHandler} disabled={false}/>
      <CustomButton title='Start' onPress={handleConfirm} disabled={!email && !phoneNumber}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.background,
    // alignItems: "center",
    justifyContent: "center",
  },
});
