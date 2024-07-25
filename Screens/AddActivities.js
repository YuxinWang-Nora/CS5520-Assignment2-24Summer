import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import PressableButton from '../Components/PressableButton';
import { writeToDB } from '../Firebase/firebaseHelper';
import commonStyles from '../Styles/CommonStyles';

const AddActivities = () => {
    const [activityType, setActivityType] = useState(null);
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [items, setItems] = useState([
        { label: 'Walking', value: 'Walking' },
        { label: 'Running', value: 'Running' },
        { label: 'Swimming', value: 'Swimming' },
        { label: 'Weights', value: 'Weights' },
        { label: 'Yoga', value: 'Yoga' },
        { label: 'Cycling', value: 'Cycling' },
        { label: 'Hiking', value: 'Hiking' },
    ]);

    const navigation = useNavigation();
    const handleSave = async () => {
        if (!activityType || !duration || isNaN(duration) || parseInt(duration) <= 0) {
            Alert.alert("Invalid Input", "Please enter valid activity type and duration.");
            return;
        }

        const activityData = {
            type: activityType,
            duration: parseInt(duration),
            date: date.toISOString(),
            isSpecial: (activityType === 'Running' || activityType === 'Weights') && parseInt(duration) > 60
        };

        await writeToDB(activityData, 'Activities');
        navigation.goBack();
    };

    const handleCancel = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Activity Type</Text>
            <DropDownPicker
                open={open}
                value={activityType}
                items={items}
                setOpen={setOpen}
                setValue={setActivityType}
                setItems={setItems}
                placeholder="Select an activity"
                style={styles.dropDown}
            />

            <Text style={styles.label}>Duration (min)</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={duration}
                onChangeText={setDuration}
                placeholder="Enter duration in minutes"
            />

            <Text style={styles.label}>Date</Text>
            <TextInput
                style={styles.input}
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
                        setDate(currentDate);
                    }}
                />
            )}

            <View style={styles.buttonContainer}>
                <PressableButton
                    title="Cancel"
                    onPress={handleCancel}
                    style={commonStyles.cancelButton} />
                <PressableButton title="Save" onPress={handleSave} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'top',
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
    input: {
        fontSize: 16,
        borderWidth: 1,
        padding: 10,
        marginBottom: 15,
        borderRadius: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    dropDown: {
        marginBottom: 15,
        backgroundColor: '#fafafa',
    },
});

export default AddActivities;
