import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { commonStyles } from '../Styles/CommonStyles';


const TimeInput = ({ date, dateSetter }) => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    return (
        <View>
            <Text style={commonStyles.label}>Date</Text>
            <TextInput
                style={commonStyles.input}
                value={date.toDateString()}
                onPressIn={() => setShowDatePicker(true)}
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