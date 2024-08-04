import React, { useState, useLayoutEffect, useContext } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { writeToDB } from '../Firebase/firebaseHelper';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from "../Context/ThemeContext";
import CancelAndSaveButtons from '../Components/CancelAndSaveButtons';
import TimeInput from '../Components/TimeInput';
import SpecialCheckbox from '../Components/SpecialCheckbox';
import commonStyles from '../Styles/CommonStyles';
import { deleteFromDB, updateDB } from '../Firebase/firebaseHelper';
import Color from '../Styles/Color';

const AddDiet = ({ route }) => {
    const initialDiet = route.params ? route.params.data : null;
    const navigation = useNavigation();
    const { isDarkTheme } = useContext(ThemeContext);

    const [description, setDescription] = useState(initialDiet ? initialDiet.description : '');
    const [calories, setCalories] = useState(initialDiet && initialDiet.calories ? initialDiet.calories.toString() : '');
    const [date, setDate] = useState(initialDiet && initialDiet.date ? new Date(initialDiet.date) : null);

    const [isSpecialChecked, setIsSpecialChecked] = useState(false);

    const handleSave = () => {
        if (!description || !calories || isNaN(calories) || parseInt(calories) <= 0 || !date) {
            Alert.alert("Invalid Input", "Please check you input values.");
            return;
        }

        const dietData = {
            description: description,
            calories: parseInt(calories),
            date: date.toISOString(),
            isSpecial: parseInt(calories) > 800
        };

        if (initialDiet) {
            Alert.alert("Important", "Are you sure you want to save these changes?", [
                { text: "No", style: "cancel" },
                {
                    text: "Yes",
                    onPress: () => {
                        if (initialDiet.isSpecial && isSpecialChecked) {
                            dietData.isSpecial = false;
                        }
                        updateDB(initialDiet.id, 'Diet', dietData);
                        navigation.goBack();
                    }
                }
            ]);
        } else {
            writeToDB(dietData, 'Diet');
            navigation.goBack();
        }
    };

    const handleCancel = () => {
        navigation.goBack();
    };

    const handleDelete = async () => {
        Alert.alert("Delete", "Are you sure you want to delete this item?", [
            { text: "No", style: "cancel" },
            {
                text: "Yes",
                onPress: () => {
                    deleteFromDB(initialDiet.id, 'Diet');
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
            ) : null,
        });
    }, [navigation, initialDiet]);

    return (
        <View style={isDarkTheme ? commonStyles.darkScreen : commonStyles.defaultScreen}>
            <View style={commonStyles.addContainer}>
                <Text style={isDarkTheme ? commonStyles.labelDark : commonStyles.label}>
                    Description *
                </Text>
                <TextInput
                    style={commonStyles.input}
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Enter food description"
                />

                <Text style={isDarkTheme ? commonStyles.labelDark : commonStyles.label}>
                    Calories
                    *</Text>
                <TextInput
                    style={commonStyles.input}
                    keyboardType="numeric"
                    value={calories}
                    onChangeText={setCalories}
                    placeholder="Enter calorie count"
                />

                <TimeInput date={date} dateSetter={setDate} />
                {initialDiet && initialDiet.isSpecial && (
                    <SpecialCheckbox
                        isSpecialChecked={isSpecialChecked}
                        setIsSpecialChecked={setIsSpecialChecked}
                    />
                )}
                <CancelAndSaveButtons handleCancel={handleCancel} handleSave={handleSave} />
            </View>
        </View>
    );
};


export default AddDiet;
