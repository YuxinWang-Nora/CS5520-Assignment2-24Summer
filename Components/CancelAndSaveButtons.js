import React from "react";
import { View } from "react-native";
import PressableButton from "./PressableButton";
import commonStyles from "../Styles/CommonStyles";

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