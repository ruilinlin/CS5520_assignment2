import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "./Color";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

/**
 * ActivitiesItem Component
 * 
 * Displays a single activity item in a list. Shows the activity's name, date, duration,
 * and an optional warning icon if the activity is marked as 'special'.
 * A 'special' activity is defined as one with the type "Running" or "Weights" that has a duration
 * of more than 60 minutes and is marked as important.
 * 
 * @param {Object} props Component props
 * @param {Object} props.activity The activity object to display, containing:
 *  - {string} id: Unique identifier for the activity
 *  - {string} activity: Name of the activity
 *  - {number|string} duration: Duration of the activity in minutes
 *  - {string} date: Display date of the activity
 *  - {boolean} important: Flag indicating if the activity is marked as important
 * 
 * @returns {React.Component} A React component representing a single activity item
 */

const ActivitiesItem= ({ activity}) => {
// Determines if the activity should be highlighted as special based on criteria
  const isSpecial = (activity.activity === "Running" || activity.activity === "Weights") && Number(activity.duration) > 60 && activity.important;
                 
  const navigation = useNavigation();
 // Handles navigation to the activity edit screen with the activity's ID as a parameter
  const handlePress=() => {
    navigation.navigate('AddOrEditActivity', { activityId: activity.id });
  }
  
  
  return (
    <TouchableOpacity onPress={handlePress}>
    <View style={styles.outerBox}>
      <View style={styles.textbox}>
        <Text style={styles.infoText}>{activity.activity}</Text>
        {isSpecial && (
        <Ionicons name="warning" size={25} style={styles.specialIcon} />
      )}
      </View>
        <View style={styles.firstinnerBox}>
        <Text style={styles.text}>{activity.date}</Text>
        </View>
        <View style={styles.secondinnerBox}>
        <Text style={styles.text}> {activity.duration} min</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 10,
    color: colors.inputbox,
    padding: 2,
    borderRadius: 10,
  },
  outerBox: {
    height:50,
    flex:1,
    flexDirection: 'row',
    padding: 5,
    backgroundColor: colors.header, 
    borderRadius: 10,
    margin: 10,
  },

  textbox:{    
    flexDirection:"row",
    flex:3,
    marginLeft:10,
  },

  firstinnerBox: {
    justifyContent:'center',    
//    padding: 5,
    flex:2,
    backgroundColor: colors.dropdownbackgroundColor, 
    marginRight:20,
//    elevation: 5, // Elevation for Android  
  },

  secondinnerBox:{
    justifyContent:'center',
    padding: 8,
    flex:2,
    backgroundColor: colors.dropdownbackgroundColor, 
    elevation: 5, // Elevation for Android  
  },
  
  infoText:{
    color: colors.dropdownbackgroundColor,
    paddingTop:10,
    fontWeight: "bold",
    marginRight:10,

  },
  specialIcon: {
    marginTop:5,
    marginRight: 5,
    color:colors.yellowButton,
  },
});


export default ActivitiesItem

