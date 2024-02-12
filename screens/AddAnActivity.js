import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input';
import CustomButton from '../components/Button';
import colors from '../components/Color';
import Header from '../components/Header';
import AllActivities from "../screens/AllActivities"
import { useNavigation } from '@react-navigation/native';

export default function AddAnActivity() {
  const [activity,setacivity] = useState(null);
  const [duration,setduration] = useState("");
  const [date,setdate] = useState("");  

  const { addActivity } = useActivities();
  const navigation = useNavigation();

  const activityItems = [
    { label: 'Walking', value: 'walking' },
    { label: 'Running', value: 'running' },
    { label: 'Swimming', value: 'swimming' },
    { label: 'Weights', value: 'weights' },
    { label: 'Yoga', value: 'yoga' },
    { label: 'Cycling', value: 'cycling' },
    { label: 'Hiking', value: 'hiking' },
  ];

  function handleCancel() {
    console.log('Cancel Pressed');
    setacivity("");
    setdate("");
    setduration("");
  }

  function handleSave() {
    console.log('Save Pressed', { activity, duration, date });
    if (!activity || !duration || !date) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }    
    addActivity({ activity, duration, date });
    navigation.navigate('AllActivities'); // Or use navigation.navigate('NameOfTheAllActivitiesScreen');
  };
  }

  return (
    <View style={styles.container}>
      <Header title={"Add An Activity"}/>
    <View style ={styles.inputContainer}>
        <Input 
          value={activity}
          inputHandler={setacivity}
          title="Activity *"
          items={activityItems}

        />

        <Input 
          value={duration}
          inputHandler={setduration}
          title="Duration {min} *"
        />

        <Input 
          value={date}
          inputHandler={setdate}
          title="Date *"
          isDateInput={true} 
        />

      </View>
      <View style = {styles.buttonContainer}>
        <CustomButton title='Cancle' onPress={handleCancel} disabled={false}/>
        <CustomButton title='Save' onPress={handleSave} disabled={false}/>
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