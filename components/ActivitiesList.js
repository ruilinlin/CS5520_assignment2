import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "./Color";

const ActivitiesList= ({ activity }) => {
  return (
    <View style={styles.outerBox}>

        <Text style={styles.infoText}>{activity.activity}</Text>

        <View style={styles.innerBox}>
        <Text style={styles.text}>Date: {activity.date}</Text>
        </View>
        <View style={styles.innerBox}>
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
    flexDirection: 'row',
    padding: 10,
    backgroundColor: colors.header, 
    borderRadius: 10,
    margin: 10,
  },
  innerBox: {
    padding: 8,
    marginRight: 10,
    marginleft:4,
    backgroundColor: colors.dropdownbackgroundColor, 
    elevation: 5, // Elevation for Android  
  },
  infoText:{
    color: colors.dropdownbackgroundColor,
    paddingTop:10,
    marginRight:6,
    fontWeight: 10,

  }
});


export default ActivitiesList

