import { StyleSheet, Text, View,Alert } from 'react-native'
import React,{ useEffect, useState }  from 'react'
import { getDoc, doc } from 'firebase/firestore';
import { fetchActivitybyID } from '../firebase_files/firestoreHelper';
import { useNavigation } from '@react-navigation/native';
import colors from '../components/Color';
import { useRoute } from '@react-navigation/native';
import Header from '../components/Header';
import Input from '../components/Input';
import CustomButton from '../components/Button';
import updatedActivities from "../firebase_files/firestoreHelper"

export default function EditActivity() {
  const route = useRoute();
  const activityId = route.params?.activityId; 
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
//    navigation.navigate('AllActivities', { newActivity: { activity, duration, date } });
  
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
            };
              updatedActivities(activityId);
              setActivity("");
              setDuration("");
              setDate("");
              navigation.goBack();
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
  }    
   


  useEffect(() => {
    console.log(route.params);
   
    const fetchActivity = async () => {
      try {
        const data = await fetchActivitybyID(activityId);
        console.log(data);
        if (data) {
          setActivity(data.activity);
          setDuration(data.duration.toString());
          setDate(data.date);
        }
      } catch (error) {
        Alert.alert('Error fetching activity', error.message);
      }
    };

    fetchActivity();
  }, [activityId]);

  return (
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
        <Header title={"Edit"} navigation={navigation} showBackButton={true} />
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
        <CustomButton title='Cancel' onPress={handleCancel} disabled={false} style={styles.redButton}/>
        <CustomButton title='Save' onPress={() => handleSave()} disabled={false}/>
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
    color:colors.specialColorButton
  },
})