import React, { useContext } from "react";
import { View } from "react-native";
import { ThemeContext } from "../Context/ThemeContext";
import PressableButton from "../Components/PressableButton";
import commonStyles from "../Styles/CommonStyles";

const Settings = () => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <View style={[commonStyles.singleButtonContainer, isDarkTheme ? commonStyles.darkScreen : commonStyles.defaultScreen]}>
            <PressableButton title="Toggle Theme" onPress={toggleTheme} />
        </View>
    );
}

export default Settings;