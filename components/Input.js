import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../components/Color';

const Input = ({ title, inputHandler, value, items = null, isDateInput = false }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(value);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(value ? new Date(value) : new Date());

  // Handle date change for DateTimePicker
  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
    inputHandler(currentDate.toISOString());
  };

  // Dynamically adjust zIndex for DropDownPicker
  const dynamicDropdownStyle = open ? { zIndex: 3000 } : { zIndex: 1 };

  return (
    <View style={[styles.inputContainer, dynamicDropdownStyle]}>
      <Text style={styles.titleText}>{title}</Text>
      {isDateInput ? (
        <>
          <TextInput
            style={styles.input}
//            value={date.toLocaleDateString()}
            onFocus={() => setShowDatePicker(true)}
          />
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </>
      ) : items ? (
        <DropDownPicker
          open={open}
          value={selectedItem}
          items={items}
          setOpen={setOpen}
          setValue={setSelectedItem}
          onChangeValue={(value) => {
            inputHandler(value);
            setSelectedItem(value);
          }}
          containerStyle={styles.dropdownContainer}
          style={styles.dropdown}
          dropDownStyle={dynamicDropdownStyle}
          zIndexInverse={1000}
        />
      ) : (
        <TextInput
          style={styles.input}
          onChangeText={(text) => inputHandler(text)}
          value={typeof value === 'string' ? value : selectedItem}
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
  },
  dropdownContainer: {
    width: '100%',
  },
  dropdown: {
    backgroundColor: colors.inputboxcolor,
  },
  dropdownItem: {
    justifyContent: 'flex-start',
  },
});

export default Input;
