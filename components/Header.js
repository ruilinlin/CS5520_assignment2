import { StyleSheet, Text, View,SafeAreaView ,TouchableOpacity} from 'react-native'
import React from 'react'
import colors from './Color';

export default function Header({ title, navigation, showAddButton }) {
  return (
    <SafeAreaView style={styles.headerContainer}>
      {/* Placeholder View to take up space and maintain balance */}
      <View style={showAddButton ? styles.buttonPlaceholder : styles.buttonContainer} />

      <Text style={styles.headerText}>{title}</Text>

      {/* Conditionally render the 'Add' button if showAddButton is true */}
      {showAddButton ? (
        <TouchableOpacity 
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('AddAnActivity')}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      ) : (
        // Empty View to balance the layout when there is no button
        <View style={styles.buttonContainer} />
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
  },
  headerText: {
    color: colors.title,
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
  addButtonText: {
    color: colors.yellowButton,
    fontSize: 20,
  },
});
