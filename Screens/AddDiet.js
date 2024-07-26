import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { writeToDB } from '../Firebase/firebaseHelper';
import { Ionicons } from '@expo/vector-icons';
import CancelAndSaveButtons from '../Components/CancelAndSaveButtons';
import TimeInput from '../Components/TimeInput';
import commonStyles from '../Styles/CommonStyles';
import { deleteFromDB } from '../Firebase/firebaseHelper';
import Color from '../Styles/Color';

const AddDiet = ({ route }) => {
    const initialDiet = route.params ? route.params.data : null;
    const navigation = useNavigation();

    const [description, setDescription] = useState(initialDiet ? initialDiet.description : '');
    const [calories, setCalories] = useState(initialDiet ? initialDiet.calories.toString() : '');
    const [date, setDate] = useState(initialDiet ? new Date(initialDiet.date) : new Date());

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

    const handleDelete = async () => {
        Alert.alert("Delete", "Are you sure you want to delete this item?", [
            { text: "No", style: "cancel" },
            {
                text: "Yes",
                onPress: async () => {
                    await deleteFromDB(initialDiet.id, 'Diet');
                    navigation.goBack();
                }
            }
        ]);
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: initialDiet ? 'Edit' : 'Add A Diet Entry',
            headerRight: () => initialDiet ? (
                <Ionicons name="trash" size={23} color={Color.icon}
                    onPress={handleDelete} />
            ) : undefined,
        });
    }, [navigation, initialDiet]);

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
