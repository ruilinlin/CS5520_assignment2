import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "./Color";

const ActivitiesList= ({ activity }) => {
  return (
    <View style={styles.outerBox}>
      <View style={styles.textbox}>
        <Text style={styles.infoText}>{activity.activity}</Text>
      </View>
        <View style={styles.firstinnerBox}>
        <Text style={styles.text}>Date: {activity.date}</Text>
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
    padding: 5,
    borderRadius: 10,
  },
  outerBox: {
    flex:1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: colors.header, 
    borderRadius: 10,
    margin: 10,
  },

  textbox:{
    flex:3,
  },

  firstinnerBox: {
    padding: 8,
    flex:2,
    backgroundColor: colors.dropdownbackgroundColor, 
    elevation: 5, // Elevation for Android  
  },

  secondinnerBox:{
    padding: 8,
    flex:2,
    backgroundColor: colors.dropdownbackgroundColor, 
    elevation: 5, // Elevation for Android  
  },
  
  infoText:{
    color: colors.dropdownbackgroundColor,
    paddingTop:10,
    fontWeight: "bold",

  }
});


export default ActivitiesList

