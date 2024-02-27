import { StyleSheet, Text, View,SafeAreaView ,TouchableOpacity} from 'react-native'
import React from 'react'
import colors from './Color';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import CustomButton from "../components/Button"

export default function Header({ title, navigation, showAddButton, showBackButton ,showtrashButton,handleDelete}) {

  const IconButton = ({ onPress, iconName, iconSize, iconColor, iconComponent: IconComponent }) => (
    <CustomButton onPress={onPress} style={styles.iconContainer}>
      <IconComponent name={iconName} size={iconSize} color={iconColor} />
    </CustomButton>
  );
  
  return (
    <SafeAreaView style={styles.headerContainer}>
      {/* Render Back Button or Placeholder on the left */}
      {showBackButton ? (
        <CustomButton onPress={() => navigation.goBack()} style={styles.iconContainer}>
          <MaterialIcons name="keyboard-arrow-left" size={30} color="white" />
        </CustomButton>
      ) : (
        <View style={styles.placeholder} /> // Empty placeholder to keep the title centered when no back button
      )}

      {/* Title */}
      <Text style={styles.headerText}>{title}</Text>

      {/* Render Add Button or Placeholder on the right */}
      {showAddButton ? (
        <CustomButton
          onPress={() => navigation.navigate('AddOrEditActivity')}
          style={styles.iconContainer}>
          <Ionicons name="add" size={24} color="white" />
        </CustomButton>
      ) : (
        <View style={styles.placeholder} /> 
      )}

      {showtrashButton ? (
        <CustomButton
          onPress={() => handleDelete()}
          style={styles.iconContainer}>
          <FontAwesome name="trash" size={22} color="white" />
        </CustomButton>
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
  iconContainer:{
    marginRight:1,
    marginLeft:5,
    width:30,
  },
  placeholder: {
    width: 24, 
  },
});
