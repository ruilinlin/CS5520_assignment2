import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Input from '../components/Input';
import CustomButton from '../components/Button';
import colors from '../components/Color';
import Header from '../components/Header';
import AllActivities from "../screens/AllActivities";
import { useNavigation } from '@react-navigation/native';

export default function AddAnActivity() {
  const [activity,setActivity] = useState("");
  const [duration,setDuration] = useState("");
  const [date,setDate] = useState("");  

  const navigation = useNavigation();

  const activityItems = [
    { label: 'Walking', value: 'Walking' },
    { label: 'Running', value: 'Running' },
    { label: 'Swimming', value: 'Swimming' },
    { label: 'Weights', value: 'Weights' },
    { label: 'Yoga', value: 'Yoga' },
    { label: 'Cycling', value: 'Cycling' },
    { label: 'Hiking', value: 'Hiking' },
  ];

  function handleCancel() {
    console.log('Cancel Pressed');
    setActivity("");
    setDate("");
    setDuration("");
  }

  function handleSave() {
    console.log('Save Pressed', { activity, duration, date });
    if (!activity || !duration || !date) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }    
    navigation.navigate('AllActivities', { newActivity: { activity, duration, date } });
  }
  

  return (
    <View style={styles.container}>
      <Header title={"Add An Activity"}/>
        <View style ={styles.inputContainer}>
        <Input 
          value={activity}
          inputHandler={setActivity}
          title="Activity *"
          items={activityItems}

        />

        <Input 
          value={duration}
          inputHandler={setDuration}
          title="Duration {min} *"
        />

        <Input 
          value={date}
          inputHandler={setDate}
          title="Date *"
          isDateInput={true} 
        />

      </View>
      <View style = {styles.buttonContainer}>
        <CustomButton title='Cancle' onPress={handleCancel} disabled={false}/>
        <CustomButton title='Save' onPress={handleSave} disabled={false}/>
      </View>
    </View>
  );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.background,
//    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
  },
  inputContainer:{
    margin:3,
    width: "99%",
  },
  errorText: {
    color: colors.inputbox,
    fontSize: 10,
  },
  dropdownContainer: {
    height: 30,
    width: '100%',
    marginBottom: 20,
  },
  dropdown: {
    backgroundColor: colors.dropdownbackgroundColor,
  }, 
})