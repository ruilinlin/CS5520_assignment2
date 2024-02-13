import { StyleSheet, Text, View,SafeAreaView ,TouchableOpacity} from 'react-native'
import React from 'react'
import colors from './Color';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ title, navigation, showAddButton, showBackButton }) {
  return (
    <SafeAreaView style={styles.headerContainer}>
      {/* Render Back Button or Placeholder on the left */}
      {showBackButton ? (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
          <MaterialIcons name="keyboard-arrow-left" size={30} color="white" />
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} /> // Empty placeholder to keep the title centered when no back button
      )}

      {/* Title */}
      <Text style={styles.headerText}>{title}</Text>

      {/* Render Add Button or Placeholder on the right */}
      {showAddButton ? (
        <TouchableOpacity 
          onPress={() => navigation.navigate('AddAnActivity')}
          style={styles.iconContainer}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} /> 
      )}
    </SafeAreaView>
  );
};




const styles = StyleSheet.create({
  headerContainer:{
    backgroundColor: colors.header,
    width: '100%',
    height: 100,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'space-between', 
    flexDirection: 'row',
  },
  buttonContainer:{
    paddingHorizontal: 5, 
    marginRight:5,
  },
  headerText: {
    color: colors.title,
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
  addButtonText: {
    color: colors.yellowButton,
    fontSize: 16,

  },
  placeholder: {
    width: 24, 
  },
});
