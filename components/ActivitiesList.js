import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const ActivitiesList= ({ activity }) => {
  return (
    <View style={styles.outerBox}>
      <View style={styles.innerBox}>
        <Text style={styles.infoText}>Activity: {activity.activity}</Text>
        <Text style={styles.infoText}>Duration: {activity.duration} minutes</Text>
        <Text style={styles.infoText}>Date: {activity.date}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 30,
    color: "#929",
    padding: 5,
    borderRadius: 10,
  },
  textContainer: {
    borderRadius: 10,
    backgroundColor: "#aaa",
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  outerBox: {
    padding: 10,
    backgroundColor: '#f0f0f0', // Light grey background for the outer box
    borderRadius: 10, // Rounded corners for the outer box
    margin: 10,
  },
  innerBox: {
    padding: 10,
    backgroundColor: '#ffffff', // White background for the inner box
    borderRadius: 8, // Slightly less rounded corners for the inner box
    shadowColor: '#000', // Shadow for the inner box to create depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Elevation for Android  
  },
  infoText:{
    padding: 10,
  }
});


export default ActivitiesList

