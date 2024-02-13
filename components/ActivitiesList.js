import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "./Color";
import { Ionicons } from '@expo/vector-icons';


const ActivitiesList= ({ activity }) => {

  const isSpecial = (activity.activity === "Running" || activity.activity === "Weights") && Number(activity.duration) > 60;
  return (
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
    padding: 5,
    flex:2,
    backgroundColor: colors.dropdownbackgroundColor, 
    marginRight:20,
    elevation: 5, // Elevation for Android  
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


export default ActivitiesList

