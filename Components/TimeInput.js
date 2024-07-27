import React, { useState, useContext } from 'react';
import { View, Text, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { commonStyles } from '../Styles/CommonStyles';
import { ThemeContext } from '../Context/ThemeContext';


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
                editable={false}
            />
            {showDatePicker && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="inline"
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