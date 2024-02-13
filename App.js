import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SartScreen from "./screens/SartScreen";
import AllActivities from "./screens/AllActivities";
import AddAnActivity from "./screens/AddAnActivity";
import SpecialActivites from "./screens/SpecialActivites";

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
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="AllActivities"
          component={AllActivities}
         options={{ headerShown: false }} 
        />
        <Stack.Screen
 //        options={{ newActivity}}
          name="AddAnActivity"
          component={AddAnActivity}
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
         name="SpecialActivities" 
         component={SpecialActivites}
         options={{ headerShown: false }}  
         />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

