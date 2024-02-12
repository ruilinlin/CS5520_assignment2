import React, { useState } from 'react';
import { View, Button, Platform, TextInput, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateInput = ({ inputHandler }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    // Format the date and pass it to the parent component's handler
    inputHandler(currentDate.toLocaleDateString());
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={date.toLocaleDateString()}
        onFocus={() => setShow(true)} // Show the picker when the input is focused
        placeholder="Select a date"
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="inline" // Use "default" for standard picker
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default DateInput;
