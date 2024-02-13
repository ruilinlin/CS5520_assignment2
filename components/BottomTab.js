import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from './Color';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

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
