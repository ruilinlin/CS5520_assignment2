import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from './Color';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

/**
 * A custom bottom navigation tab component for React Native applications, designed to facilitate navigation 
 * between different sections of the app, specifically "All Activities" and "Special Activities".
 *
 * It dynamically highlights the currently active tab and provides a user-friendly interface for switching 
 * between tabs. This component is highly customizable and integrates smoothly with the React Navigation library.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.navigation - The navigation object provided by React Navigation for navigating between screens.
 * @param {string} props.activePage - A string indicating the currently active page/tab to visually highlight it.
 * @param {Array} props.activities - Optional. Data to be passed to the "Special Activities" section, which can be used for display or filtering.
 *
 * @returns {React.ReactElement} A React element representing the bottom navigation bar.

 * />
 */

export default function BottomTab({ navigation, activePage, activities}) {
  const getTextAndIconColor = (page) => activePage === page ? colors.bottomtextinuse : colors.bottomtext;
  console.log(activePage); 
  return (
    <View style={styles.tabContainer}>
    <View style={styles.iconContainer}>
      <MaterialIcons name="attach-money" size={24} color={getTextAndIconColor('AllActivities')} />
      <TouchableOpacity
        style={[styles.button, activePage === 'AllActivities' && styles.activeTab]}
        onPress={() => navigation.navigate('AllActivities')}
      >
        <Text style={{ color: getTextAndIconColor('AllActivities') }}>
          All Activities
        </Text>
        
      </TouchableOpacity>
    </View>

    <View style={styles.iconContainer}>
      <AntDesign name="exclamation" size={24} color={getTextAndIconColor('SpecialActivities')} />
      <TouchableOpacity
        style={[styles.button, activePage === 'SpecialActivities' && styles.activeTab]}
        onPress={() => navigation.navigate('SpecialActivities', { activities })}
      >
        <Text style={{ color: getTextAndIconColor('SpecialActivities') }}>
          Special Activities
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: colors.header,
    width: '100%',
    height:90,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'space-around', 
    flexDirection: 'row',
  },
  iconContainer:{
    flexDirection:"column",
    alignItems: 'center', 
  },
  button: {
    padding: 10,  
  },
  buttonText: {
    color: colors.bottomtext, 
  },
  buttonTextInuse:{
    color: colors.bottomtextinuse,
  },
});
