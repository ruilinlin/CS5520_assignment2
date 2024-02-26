import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import Input from '../components/Input';
import CustomButton from '../components/Button';
import colors from '../components/Color';

export default function SartScreen({navigation}) {

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
    fontSize:16,
  },
  errorText: {
    color: colors.bottomtext,
    fontSize:16,
  }
});
