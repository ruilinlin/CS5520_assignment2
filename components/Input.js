import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SelectList } from 'react-native-dropdown-select-list';

import colors from '../components/Color';


/**
 * A versatile input component for React Native applications that can handle text, dropdown, and date inputs.
 *
 * @param {Object} props - Props for configuring the Input component.
 * @param {string} props.title - The label text to display above the input.
 * @param {Function} props.inputHandler - The function to call when the input value changes. It receives the new value as an argument.
 * @param {string|Date} props.value - The current value of the input. For date inputs, it should be a Date object.
 * @param {Array<{label: string, value: any}>} [props.items=null] - Optional. An array of objects for dropdown options. Each object should have a `label` (display text) and a `value` (the underlying value).
 * @param {boolean} [props.isDateInput=false] - Optional. If true, the input is treated as a date picker.
 *
 * @returns {React.ReactElement} The rendered input component.
 */

const Input = ({ title, inputHandler, value, items = null,isDateInput = false }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(value);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(value);
  const selectListItems = items?.map(item => ({ key: item.value, value: item.label }));

/**
 * Triggers the display of the date picker UI.
 * This function sets the `showDatePicker` state to `true`, making the date picker visible.
 */
  const showDatepicker = () => {
    setShowDatePicker(true);
  };

/**
 * Handles the selection of a new date from the date picker.
 * It updates the component's state with the selected date and calls the input handler with a formatted date string.
 *
 * @param {Date} selectedDate - The newly selected date.
 */

  const handleDateChange = (event,selectedDate) => {
    const currentDate = selectedDate || date;
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