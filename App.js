import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import {ActivitiesProvider} from './components/ActivitiesContext';


import SartScreen from "./screens/SartScreen";
import AllActivities from "./screens/AllActivities";
import AddAnActivity from "./screens/AddAnActivity";
import SpecialActivites from "./screens/SpecialActivites";
import EditActivity from "./screens/EditActivity";

import colors from './components/Color';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Create a bottom tab navigator
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'AllActivities') {
            iconName = focused ? 'attach-money' : 'attach-money';
            return <MaterialIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'SpecialActivities') {
            iconName = focused ? 'exclamation' : 'exclamation';
            return <AntDesign name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: colors.bottomtextinuse,
        tabBarInactiveTintColor: colors.bottomtext,
        tabBarStyle: {
          backgroundColor : colors.header, 
        },
        tabBarLabelStyle: {
          fontSize: 12, 
        },
      })}
    >
      <Tab.Screen name="AllActivities" component={AllActivities} options={{ headerShown: false }} />
      <Tab.Screen name="SpecialActivities" component={SpecialActivites} options={{ headerShown: false }} />

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ActivitiesProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StartScreen"
          component={SartScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Home"
          component={MyTabs} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddAnActivity"
          component={AddAnActivity}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="EditActivity"
          component={EditActivity}
          options={{ headerShown: false }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
    </ActivitiesProvider>
  );
}
const styles = StyleSheet.create({});

