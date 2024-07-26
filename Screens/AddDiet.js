import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { writeToDB } from '../Firebase/firebaseHelper';
import CancelAndSaveButtons from '../Components/CancelAndSaveButtons';
import TimeInput from '../Components/TimeInput';
import commonStyles from '../Styles/CommonStyles';

const AddDiet = () => {
    const [description, setDescription] = useState('');
    const [calories, setCalories] = useState('');
    const [date, setDate] = useState(new Date());
    const navigation = useNavigation();

    const handleSave = async () => {
        if (!description || !calories || isNaN(calories) || parseInt(calories) <= 0) {
            Alert.alert("Invalid Input", "Please enter a valid description and calorie count.");
            return;
        }

        const dietData = {
            description: description,
            calories: parseInt(calories),
            date: date.toISOString(),
            isSpecial: parseInt(calories) > 800
        };

        await writeToDB(dietData, 'Diet');
        navigation.goBack();
    };

    const handleCancel = () => {
        navigation.goBack();
    };

    return (
        <View style={commonStyles.addContainer}>
            <Text style={commonStyles.label}>Description *</Text>
            <TextInput
                style={commonStyles.input}
                value={description}
                onChangeText={setDescription}
                placeholder="Enter food description"
            />

            <Text style={commonStyles.label}>Calories *</Text>
            <TextInput
                style={commonStyles.input}
                keyboardType="numeric"
                value={calories}
                onChangeText={setCalories}
                placeholder="Enter calorie count"
            />

            <TimeInput date={date} dateSetter={setDate} />
            <CancelAndSaveButtons handleCancel={handleCancel} handleSave={handleSave} />
        </View>
    );
};


export default AddDiet;
