import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import PressableButton from '../Components/PressableButton';
import { writeToDB } from '../Firebase/firebaseHelper';
import commonStyles from '../Styles/CommonStyles';
import TimeInput from '../Components/TimeInput';

const AddActivities = () => {
    const [activityType, setActivityType] = useState(null);
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
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
        <View style={commonStyles.addContainer}>
            <Text style={commonStyles.label}>Activity Type</Text>
            <DropDownPicker
                open={open}
                value={activityType}
                items={items}
                setOpen={setOpen}
                setValue={setActivityType}
                setItems={setItems}
                placeholder="Select an activity"
                style={commonStyles.dropDown}
            />

            <Text style={commonStyles.label}>Duration (min)</Text>
            <TextInput
                style={commonStyles.input}
                keyboardType="numeric"
                value={duration}
                onChangeText={setDuration}
                placeholder="Enter duration in minutes"
            />

            <TimeInput date={date} dateSetter={setDate} />

            <View style={commonStyles.buttonContainer}>
                <PressableButton
                    title="Cancel"
                    onPress={handleCancel}
                    style={commonStyles.cancelButton} />
                <PressableButton title="Save" onPress={handleSave} />
            </View>
        </View>
    );
};

export default AddActivities;
