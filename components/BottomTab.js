import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from './Color';

export default function BottomTab({ navigation, activePage, activities}) {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.button, activePage === 'AllActivities' && styles.activeTab]}
        onPress={() => navigation.navigate('AllActivities')}
      >
        <Text style={[styles.buttonText, activePage === 'AllActivities' && styles.activeText]}>
          All Activities
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, activePage === 'SpecialActivities' && styles.activeTab]}
        onPress={() => navigation.navigate('SpecialActivities', { activities })}
      >
        <Text style={[styles.buttonText, activePage === 'SpecialActivities' && styles.activeText]}>
          Special Activities
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: colors.header,
    width: '100%',
    height: 70,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'space-around', 
    flexDirection: 'row',
  },
  button: {
    padding: 10,  
  },
  buttonText: {
    color: colors.bottomtext, 
  },
});
