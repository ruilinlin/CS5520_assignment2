import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SartScreen from "./screens/SartScreen";
import AddActivity from "./screens/AddActivity"
import AddAnActivity from "./screens/AddAnActivity";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StartScreen"
          component={SartScreen}
        />
        <Stack.Screen
          name="AddActivity"
          component={AddActivity}
        />
        <Stack.Screen
          name="AddAnActivity"
          component={AddAnActivity}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

