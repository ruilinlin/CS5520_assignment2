import { StyleSheet, Text, View, Alert} from 'react-native';
import React, { useState } from 'react';
import Input from '../components/Input';
import CustomButton from '../components/Button';
import colors from '../components/Color';
import Header from '../components/Header';
import AllActivities from "../screens/AllActivities";
import { useNavigation } from '@react-navigation/native';
import { addActivity } from '../firebase_files/firestoreHelper';


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
    navigation.goBack();
  }

  async function handleSave(duration) {
    console.log('Save Pressed', { activity, duration, date });
    if (!activity || !duration || !date) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }    
    const durationNumber = Number(duration);
    if (isNaN(durationNumber) || durationNumber <= 0) {
      alert('Please enter a valid duration number.');
      return;
    }

    const isSpecial = (activity === "Running" || activity === "Weights") && durationNumber > 60;
//    navigation.navigate('AllActivities', { newActivity: { activity, duration, date } });
  
    const newActivityData = {
      activity,
      duration: durationNumber,
      date,
      important: isSpecial,
    };
    try {
      const docId = addActivity(newActivityData);
      console.log("Activity saved with ID:", docId);

      // Reset form or navigate  after successful save
      setActivity("");
      setDuration("");
      setDate("");
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  }    

  

  return (
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
        <Header title={"Add An Activity"} navigation={navigation} showBackButton={true} />
      </View>
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
        <CustomButton title='Cancel' onPress={handleCancel} disabled={false} style={styles.redButton} textStyle={styles.text}/>
        <CustomButton title='Save' onPress={() => handleSave(duration)} disabled={false}  style={styles.purpleButton} textStyle={styles.text}/>
      </View>
    </View>
  );
  }  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.background,
    alignItems: "center",
//    justifyContent: "center", 
  },
  HeaderContainer:{
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
  },
  inputContainer:{
    flex: 4,
   margintop:70,
    width: "90%",
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
  redButton:{
    backgroundColor:colors.redButton,
    marginRight:20,
  },
  purpleButton:{
    backgroundColor:colors.purpleButton,
    marginLeft:20,
  },
  text:{
    color:"white",
  },
})