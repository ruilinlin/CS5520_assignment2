import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../components/Input';

export default function SartScreen(navigation) {
  const[numberError, setNumberError] = useState('');
  const[EmailError, setEmailError] = useState('');

  
  function receiveInput(data){
    setEmailError('');
    setNumberError('');
    let hasError = false;

    //validate Email()
    if(!email || ){
      setEmailError('Please enter a valid email address.');
      hasError = true;      
    }

    //validate phonenumber(10 digits, no letters)
    const numberVal = parseInt(Number,10);
    if(isNaN(numberVal) ){
      setNumberError('Please enter a valid phone number.');
      hasError = true;
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Email Address</Text>
      <Input inputHandler={receiveInput}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    justifyContent: "center",
  },
  topView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  scrollViewContent: {
    alignItems: "center",
  },
  bottomView: { flex: 4, backgroundColor: "#dcd" },
});
