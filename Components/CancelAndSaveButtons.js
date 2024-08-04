import React from "react";
import { View } from "react-native";
import PressableButton from "./PressableButton";
import commonStyles from "../Styles/CommonStyles";

// This is a reusable component that displays two buttons: Cancel and Save.
// It takes two props:
// handleCancel: a function that will be called when the Cancel button is pressed
// handleSave: a function that will be called when the Save button is pressed
// The buttons are styled using the PressableButton component.
const CancelAndSaveButtons = ({ handleCancel, handleSave }) => {
    return (
        <View style={commonStyles.buttonContainer}>
            <PressableButton
                title="Cancel"
                onPress={handleCancel}
                style={commonStyles.cancelButton} />
            <PressableButton title="Save" onPress={handleSave} />
        </View>
    );
}

export default CancelAndSaveButtons;