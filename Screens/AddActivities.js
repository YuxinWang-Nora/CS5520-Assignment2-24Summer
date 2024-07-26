import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import { writeToDB, deleteFromDB } from '../Firebase/firebaseHelper';
import commonStyles from '../Styles/CommonStyles';
import TimeInput from '../Components/TimeInput';
import CancelAndSaveButtons from '../Components/CancelAndSaveButtons';
import { Ionicons } from '@expo/vector-icons';
import Color from '../Styles/Color';

const AddActivities = ({ route }) => {
    const initialActivity = route.params ? route.params.data : null;
    const navigation = useNavigation();

    const [activityType, setActivityType] = useState(initialActivity ? initialActivity.type : '');
    const [duration, setDuration] = useState(initialActivity ? initialActivity.duration.toString() : '');
    const [date, setDate] = useState(initialActivity ? new Date(initialActivity.date) : new Date());
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
            <Text style={commonStyles.label}>Activity Type *</Text>
            <DropDownPicker
                open={open}
                value={activityType}
                items={items}
                setOpen={setOpen}
                setValue={setActivityType}
                setItems={setItems}
                placeholder="Select An Activity"
                style={commonStyles.dropDown}
            />

            <Text style={commonStyles.label}>Duration (min) *</Text>
            <TextInput
                style={commonStyles.input}
                keyboardType="numeric"
                value={duration}
                onChangeText={setDuration}
                placeholder="Enter duration in minutes"
            />

            <TimeInput date={date} dateSetter={setDate} />

            <CancelAndSaveButtons handleCancel={handleCancel} handleSave={handleSave} />
        </View>
    );
};

export default AddActivities;
