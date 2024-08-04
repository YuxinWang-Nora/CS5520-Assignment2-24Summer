import React, { useState, useLayoutEffect, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import { writeToDB, deleteFromDB, updateDB } from '../Firebase/firebaseHelper';
import { ThemeContext } from "../Context/ThemeContext";
import commonStyles from '../Styles/CommonStyles';
import TimeInput from '../Components/TimeInput';
import CancelAndSaveButtons from '../Components/CancelAndSaveButtons';
import SpecialCheckbox from '../Components/SpecialCheckbox';
import { Ionicons } from '@expo/vector-icons';
import Color from '../Styles/Color';

const AddActivities = ({ route }) => {
    const initialActivity = route.params ? route.params.data : null;
    const navigation = useNavigation();
    const { isDarkTheme } = useContext(ThemeContext);

    const [activityType, setActivityType] = useState(initialActivity ? initialActivity.type : '');
    const [duration, setDuration] = useState(initialActivity && initialActivity.duration ? initialActivity.duration.toString() : '');
    const [date, setDate] = useState(initialActivity && initialActivity.date ? new Date(initialActivity.date) : null);
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
    const [isSpecialChecked, setIsSpecialChecked] = useState(false);

    const handleSave = () => {
        if (!activityType || !duration || isNaN(duration) || parseInt(duration) <= 0 || !date) {
            Alert.alert("Invalid Input", "Please check your input values.");
            return;
        }

        const activityData = {
            type: activityType,
            duration: parseInt(duration),
            date: date.toISOString(),
            isSpecial: (activityType === 'Running' || activityType === 'Weights') && parseInt(duration) > 60
        };

        if (initialActivity) {
            Alert.alert("Important", "Are you sure you want to save these changes?", [
                { text: 'No', style: 'cancel' },
                {
                    text: 'Yes',
                    onPress: () => {
                        if (initialActivity.isSpecial && isSpecialChecked) {
                            activityData.isSpecial = false;
                        }
                        updateDB(initialActivity.id, 'Activities', activityData);
                        navigation.goBack();
                    },
                },
            ]);
        } else {
            writeToDB(activityData, 'Activities');
            navigation.goBack();
        }
    };

    const handleCancel = () => {
        navigation.goBack();
    };

    const handelDelete = async () => {
        Alert.alert("Delete", "Are you sure you want to delete this item?", [
            { text: 'No', style: 'cancel' },
            { text: 'Yes', onPress: () => { deleteFromDB(initialActivity.id, 'Activities'); navigation.goBack(); } },
        ]);
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: initialActivity ? 'Edit' : 'Add An Activity',
            headerRight: () => initialActivity ? (
                <Ionicons name='trash' size={24} color={Color.icon} onPress={handelDelete} />) : null,
        });
    }, [navigation, initialActivity]);

    return (
        <View style={isDarkTheme ? commonStyles.darkScreen : commonStyles.defaultScreen}>
            <View style={commonStyles.addContainer}>
                <Text style={isDarkTheme ? commonStyles.labelDark : commonStyles.label}>Activity Type *</Text>
                <DropDownPicker
                    open={open}
                    value={activityType}
                    items={items}
                    setOpen={setOpen}
                    setValue={setActivityType}
                    setItems={setItems}
                    placeholder="Select An Activity"
                    style={isDarkTheme ? commonStyles.dropDownDark : commonStyles.dropDown}
                />

                <Text style={isDarkTheme ? commonStyles.labelDark : commonStyles.label}>Duration (min) *</Text>
                <TextInput
                    style={commonStyles.input}
                    keyboardType="numeric"
                    value={duration}
                    onChangeText={setDuration}
                    placeholder="Enter duration in minutes"
                />

                <TimeInput date={date} dateSetter={setDate} />
                {initialActivity && initialActivity.isSpecial && (
                    <SpecialCheckbox isSpecialChecked={isSpecialChecked} setIsSpecialChecked={setIsSpecialChecked} />
                )}

                <CancelAndSaveButtons handleCancel={handleCancel} handleSave={handleSave} />
            </View>
        </View>
    );
};

export default AddActivities;
