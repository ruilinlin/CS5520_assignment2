import { StyleSheet, Text, View, Alert} from 'react-native';
import React, { useState } from 'react';
import Input from '../components/Input';
import CustomButton from '../components/Button';
import colors from '../components/Color';

export default function InputForm( {
  activity,
  setActivity,
  duration,
  setDuration,
  date,
  setDate,
  handleCancel,
  handleSave,
  isSpecial = false,
  isChecked,
  setIsChecked,
//  activityItems,
  removeSpecial = null, 
} ) {
  const activityItems = [
    { label: 'Walking', value: 'Walking' },
    { label: 'Running', value: 'Running' },
    { label: 'Swimming', value: 'Swimming' },
    { label: 'Weights', value: 'Weights' },
    { label: 'Yoga', value: 'Yoga' },
    { label: 'Cycling', value: 'Cycling' },
    { label: 'Hiking', value: 'Hiking' },
  ];

  return (
    <View style={styles.container}>     
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
      
      <View style = {styles.buttomContainer}>
      {isSpecial && (
    <CustomCheckBox 
      style={styles.checkBoxContainer}
      text="This item is marked as special. Select the checkbox if you would like to approve it."
      isChecked={isChecked}
      onValueChange={(newValue) => {
        setIsChecked(newValue);
        removeSpecial(newValue);
      }}
    />
  )}
      <View style = {styles.buttonContainer}>
        <CustomButton title='Cancel' onPress={handleCancel} disabled={false} style={styles.redButton} textStyle={styles.text}/>
        <CustomButton title='Save' onPress={() => handleSave()} disabled={false}  style={styles.purpleButton} textStyle={styles.text}/>
      </View>
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

  buttomContainer:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly', 
  },
  
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
  },
  inputContainer:{
    flex: 5,
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
    marginRight:30,
    text: colors.bottomtext, 
  },
  purpleButton:{
    backgroundColor:colors.purpleButton,
    marginLeft:30,
  },
  checkBoxContainer:{
    width: "85%",
  },
  text:{
    color:"white",
  },
})