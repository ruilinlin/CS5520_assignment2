import { StyleSheet, Text, View,Alert } from 'react-native'
import React,{ useEffect, useState }  from 'react'
import { fetchActivitybyID } from '../firebase_files/firestoreHelper';
import { useNavigation } from '@react-navigation/native';
import colors from '../components/Color';
import { useRoute } from '@react-navigation/native';
import Header from '../components/Header';
import Input from '../components/Input';
import CustomButton from '../components/Button';
import {updatedActivities} from "../firebase_files/firestoreHelper"
import CustomCheckBox from '../components/CustomCheckBox';
import { deleteActivity } from '../firebase_files/firestoreHelper';
import {addActivity} from '../firebase_files/firestoreHelper';


/**
 * A screen component for adding or editing an activity in a React Native application, 
 * managing states for activity details and interfacing with Firebase for data persistence.
 *
 * This component allows users to input details about an activity, including its type, duration, date, 
 * and importance. It supports both adding new activities and editing existing ones, with special handling 
 * for marking activities as important based on specific criteria.
 *
 */
export default function AddOrEditActivity() {
  const route = useRoute();
  const navigation = useNavigation();
  const { activityId } = route.params ?? {};
  const isEditMode = Boolean(activityId);

  const [activity,setActivity] = useState("");
  const [duration,setDuration] = useState("");
  const [date,setDate] = useState("");  

  const [important,setImportant] =useState("");
  const [isSpecial,setIsSpecial] = useState(false); 
  const [isChecked, setIsChecked] = useState('');

  const activityItems = [
    { label: 'Walking', value: 'Walking' },
    { label: 'Running', value: 'Running' },
    { label: 'Swimming', value: 'Swimming' },
    { label: 'Weights', value: 'Weights' },
    { label: 'Yoga', value: 'Yoga' },
    { label: 'Cycling', value: 'Cycling' },
    { label: 'Hiking', value: 'Hiking' },
  ];

// useEffect hook to fetch activity details when in edit mode
  useEffect(() => {
    if (isEditMode && activityId) {
      const fetchActivity = async () => {
        try {
          const data = await fetchActivitybyID(activityId);
          if (data) {
            setActivity(data.activity);
            setDuration(data.duration.toString());
            setDate(data.date);
            setImportant(data.important);
            checkisSpecial(data);
          }
        } catch (error) {
          Alert.alert('Error fetching activity', error.message);
        }
      };
      fetchActivity();
    }
  }, [activityId, isEditMode]);

  function checkisSpecial(activity){
    const isSpecial = (activity.activity === "Running" || activity.activity === "Weights") && Number(activity.duration) > 60 && activity.important;
    setIsSpecial(isSpecial);
  }
// Function to handle change the special as non-special of an activity
  function removeSpecial(newValue){
    const updateImportant = !newValue;
    const updatedActivityData = {
      activity,
      duration: Number(duration),
      date,
      important : updateImportant,              
  };
    updatedActivities(activityId,updatedActivityData);
    setImportant(updateImportant);
  }

  function handleCancel() {
    console.log('Cancel Pressed');
    setActivity("");
    setDate("");
    setDuration("");
    navigation.goBack();
  }
// Function to handle save of an activity
  async function handleSave() {
  
    if (!activity || !duration || !date) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }    
    const durationNumber = Number(duration);
    if (isNaN(durationNumber) || durationNumber <= 0) {
      alert('Please enter a valid duration number.');
      return;
    }

    try {
      if(isEditMode){
        // Additional logic for handling special cases when in edit mode
        const isNowSpecial = (activity === "Running" || activity === "Weights") && Number(duration) > 60 && !isChecked;  
        
        Alert.alert(
          "Important",
          "Are you sure you want to save these changes?",
          [
            {
            text: "Yes",
            onPress:async() => {
              try{
                const updatedActivityData = {
                  activity,
                  duration: Number(duration),
                  date,
                  important: isNowSpecial,              
              };
                updatedActivities(activityId,updatedActivityData);
                console.log('Save Pressed', { activity, duration, date,important });
                setActivity("");
                setDuration("");
                setDate("");
                navigation.navigate("AllActivities",{isChecked:isChecked } )
            }catch(error){
              console.error(error);
            }
          }
        },
        {
          text: 'No',
          onPress: () => console.log('Save cancelled'), 
          style: 'cancel',
        },
        ]
      );
      }else{

        const isSpecial = (activity === "Running" || activity === "Weights") && durationNumber > 60&& !isChecked;
        const newActivityData = {
          activity,
          duration: Number(duration),
          date,
          important: isSpecial,              
        };
        const docId = addActivity(newActivityData);
        console.log("Activity saved with ID:", docId);
  
        // Reset form or navigate  after successful save
        setActivity("");
        setDuration("");
        setDate("");
        navigation.goBack();
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  }    
// Function to handle deletion of an activity
  async function handleDelete() {
    Alert.alert(
      "Delete",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Yes",
          onPress: async () => { 
            try {
              deleteActivity(activityId); 
              navigation.navigate("AllActivities"); 
            } catch (error) {
              console.error(error); 
            }
          }
        },
        {
          text: 'No',
          onPress: () => console.log('Deletion cancelled'),
          style: 'cancel',
        },
      ],
      { cancelable: false } // This makes the alert non-cancelable outside of its buttons (optional)
    );
  }
 // console.log({  duration, date });

  return (
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
      <Header title={isEditMode ? "Edit" : "Add An Activity"} navigation={navigation} showBackButton={true} showtrashButton={true} handleDelete={handleDelete}/>
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
    HeaderContainer:{
      flex: 1,
    },
  
    buttomContainer:{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-evenly', 
    },
    
    buttonContainer: {
//      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly', 
    },
    inputContainer:{
      flex: 4,
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
      text: colors.bottomtext, 
    },
    purpleButton:{
      backgroundColor:colors.purpleButton,
      marginLeft:20,
    },
    checkBoxContainer:{
      width: "85%",
    },
    text:{
      color:"white",
    },
  })