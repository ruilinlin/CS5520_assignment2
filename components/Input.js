import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../components/Color';

const Input = ({ title, inputHandler, value, items = null,isDateInput = false }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(value ? new Date(value) : new Date());
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(value);

  const dynamicDropdownStyle = open ? { zIndex: 3000 } : { zIndex: 1 };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios' ? true : false); // On Android, the picker will close automatically
    setDate(currentDate);
    inputHandler(currentDate.toDateString()); // Pass the selected date in YYYY-MM-DD format
  };

  return (
  <View style={[styles.inputContainer, dynamicDropdownStyle]}>
      <Text style={styles.titleText}>{title}</Text>
      {isDateInput ? (
        <>
          <TouchableOpacity onPress={showDatepicker} style={styles.input}>
            <Text style={styles.dateText}>
              {date.toDateString()}
            </Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              display="default"
              onChange={handleDateChange}
              display="inline"
              style={{ backgroundColor: colors.background }}
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
  },
  dateText:{
    color: colors.text,
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
  datePicker:{
    backgroundColor:colors.background,
  },
});

export default Input;
