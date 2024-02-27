import { StyleSheet, Text, View,SafeAreaView ,TouchableOpacity} from 'react-native'
import React from 'react'
import colors from './Color';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import CustomButton from "../components/Button"

export default function Header({ title, navigation, showAddButton, showBackButton ,showtrashButton,handleDelete}) {

  const IconButton = ({ onPress, iconName, iconSize, iconColor, iconComponent: IconComponent }) => (
    <CustomButton onPress={onPress} style={styles.iconButton}>
      <IconComponent name={iconName} size={iconSize} color={iconColor} />
    </CustomButton>
  );

  return (
    <SafeAreaView style={styles.headerContainer}>
      {/* Render Back Button or Placeholder on the left */}
      {showBackButton ? (
        <IconButton
        onPress={() => navigation.goBack()}
        iconName="keyboard-arrow-left"
        iconSize={30}
        iconColor="white"
        iconComponent={MaterialIcons}
      />

      ) : (
        <View style={styles.placeholder} /> // Empty placeholder to keep the title centered when no back button
      )}

      {/* Title */}
      <Text style={styles.headerText}>{title}</Text>

      {/* Render Add Button or Placeholder on the right */}
      {showAddButton ? (
       <IconButton
       onPress={() => navigation.navigate('AddOrEditActivity')}
       iconName="add"
       iconSize={24}
       iconColor="white"
       iconComponent={Ionicons}
     />
      ) : (
        <View style={styles.placeholder} /> 
      )}

      {showtrashButton ? (
        <IconButton
        onPress={handleDelete}
        iconName="trash"
        iconSize={22}
        iconColor="white"
        iconComponent={FontAwesome}
      />
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
    marginRight:15,
    marginLeft:5,
  },
  placeholder: {
    width: 24, 
  },
});
