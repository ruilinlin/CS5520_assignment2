import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import Input from '../components/Input';
import CustomButton from '../components/Button';
import colors from '../components/Color';


// StartScreen component: This is the initial screen where users input their email and phone number.
// It validates the inputs and navigates to the Home screen if the validation is succ
export default function SartScreen({navigation}) {
 // State management for storing and validating user inputs
  const[NumberError, setNumberError] = useState('');
  const[EmailError, setEmailError] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
 // validateEmail: Validates the email format using regex.
  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
// validatePhoneNumber: Validates the phone number format (expects 10 digits).  
  function validatePhoneNumber(number) {
    return /^\d{10}$/.test(number);
  }
  // Starthandler: Validates the user inputs and navigates to the Home screen if valid.
  function Starthandler() {
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
      navigation.navigate('Home', {
        screen: 'AllActivities',
      });
    }
  }
  
  function resetHandler() {
    console.log('Reset button pressed');
    setEmail('');
    setPhoneNumber('');
    setEmailError('');
    setNumberError('');
  }
  
  return (
    <View style={styles.container}>
    <View style ={styles.inputContainer}>
        <Input 
          value={email}
          inputHandler={setEmail}
          title="Email Address"
          //errorMessage={EmailError}
        />
          {EmailError ? <Text style={styles.errorText}>{EmailError}</Text> : null}
        <Input 
          value={phoneNumber}
          inputHandler={setPhoneNumber}
          title="Phone Number"
          //errorMessage={NumberError}
        />
          {NumberError ? <Text style={styles.errorText}>{NumberError}</Text> : null}
      </View>
      <View style = {styles.buttonContainer}>
        <CustomButton title='Reset' onPress={resetHandler} textStyle={styles.text}/>
        <CustomButton title='Start' onPress={Starthandler} disabled={!email && !phoneNumber} style={{textDisabled: styles.errorText}} textStyle={styles.errorText}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.background,
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
  },
  inputContainer:{
    margin:3,
    width: "99%",
  },
  text:{
    color:colors.redtext,
    fontSize:13,
  },
  errorText: {
    color: colors.bottomtext,
    fontSize:13,
  }
});
