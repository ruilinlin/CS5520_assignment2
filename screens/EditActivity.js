import { StyleSheet, Text, View } from 'react-native'
import React,{ useEffect, useState }  from 'react'
import { fetchActivitybyID } from '../firebase_files/firestoreHelper';
import { useNavigation } from '@react-navigation/native';

export default function EditActivity(route) {
  const{ activityId } = route.params.activityId;
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

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const data = await fetchActivitybyID(activityId);
        if (data) {
          setActivity(data.activity);
          setDuration(data.duration.toString()); // Ensure duration is a string for the Input component
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
        <CustomButton title='Cancel' onPress={handleCancel} disabled={false} style={styles.redButton}/>
        <CustomButton title='Save' onPress={() => handleSave(duration)} disabled={false}/>
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