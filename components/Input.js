import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SelectList } from 'react-native-dropdown-select-list';

import colors from '../components/Color';

const Input = ({ title, inputHandler, value, items = null,isDateInput = false }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(value);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(value);
  const selectListItems = items?.map(item => ({ key: item.value, value: item.label }));
//  console.log(date);
//  const dynamicDropdownStyle = open ? { zIndex: 3000 } : { zIndex: 1 };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
//    console.log(currentDate);
    setShowDatePicker(false); 
    setDate(currentDate);
    inputHandler(currentDate.toDateString());
  };

  return (
  <View style={styles.inputContainer}>
      <Text style={styles.titleText}>{title}</Text>
      {isDateInput ? (
        <>
          <TouchableOpacity onPress={showDatepicker} style={styles.input}>
            <Text style={styles.dateText}>
              {value}
            </Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date || new Date}
              mode="date"
              onChange={handleDateChange}
              display="inline"
              style={
                { backgroundColor: colors.background} 
                }
                
            />
          )}
        </>
      ) : items ? (
        <SelectList 
          setSelected={(val) => setSelectedItem(val)} 
          data={items} 
          onSelect={() => inputHandler(selectedItem)}
          boxStyles={styles.input} 
 //         inputStyles={styles.input} 
          placeholder={value}  
          dropdownStyles={styles.dropdown} 
          dropdownItemStyles={styles.dropdownItem} 
          dropdownTextStyles={styles.dropdownText} 
        />
      ): (
        <TextInput
        style={styles.input}
        onChangeText={(text) => inputHandler(text)}
        value={value}
        />
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  titleText: {
    margin: 5,
    color: colors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.inputbox,
    borderRadius: 5,
    backgroundColor: colors.inputboxcolor,
    padding: 10,
    minHeight: 40,
  },
  dateText:{
    color: colors.text,
  },
  dropdownContainer: {
    marginTop: 5,
    marginBottom: 15,
    zIndex: 1000, 
  },
  dropdown: {
    backgroundColor: colors.dropdownbackgroundColor,
  },
  dropdownItem: {
    justifyContent: 'flex-start',
  },
  datePicker:{
    backgroundColor:colors.background,
  },
  dropdownText:{
    color:colors.text,
  }
});

export default Input;