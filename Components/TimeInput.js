import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { commonStyles } from '../Styles/CommonStyles';
import { ThemeContext } from '../Context/ThemeContext';

// This is a reusable component that displays a text input field for the date.
// It takes two props:
// date: the current date
// dateSetter: a function that will be called when the date is changed
// When the user presses the input field, a date picker will be displayed.
// The date picker will update the date when the user selects a date.
const TimeInput = ({ date, dateSetter }) => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const { isDarkTheme } = useContext(ThemeContext);
    return (
        <View>
            <Text style={isDarkTheme ? commonStyles.labelDark : commonStyles.label}>Date *</Text>
            <TextInput
                style={commonStyles.input}
                value={date ? date.toDateString() : ''}
                onPressIn={
                    () => {
                        setShowDatePicker(!showDatePicker);
                        if (!date) {
                            dateSetter(new Date());
                        }
                    }}
            />
            {showDatePicker && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display={Platform.OS === 'ios' ? 'inline' : 'default'}
                    onChange={(event, selectedDate) => {
                        const currentDate = selectedDate || date;
                        setShowDatePicker(false);
                        dateSetter(currentDate);
                    }}
                />
            )}
        </View>
    );
}

export default TimeInput;