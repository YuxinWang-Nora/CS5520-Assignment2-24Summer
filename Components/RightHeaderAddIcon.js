import React from "react";
import { View, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import commonStyles from '../Styles/CommonStyles';
import Color from '../Styles/Color';


// This is a reusable component that can be used to add an icon to the right side of the header.
// It takes three props:
// navigation: the navigation object from the screen
// toScreen: the name of the screen to navigate to when the icon is pressed
// secondIcon: the name of the second icon to display
// The component displays two icons: one for adding an item and one for the adding type of item.
const rightHeaderIcon = ({ navigation, toScreen, secondIcon }) => {
    return (
        <View style={commonStyles.rightHeaderIcon}>
            <Pressable
                onPress={() => navigation.navigate(toScreen)}
                style={({ pressed }) => [
                    commonStyles.rightHeaderIcon,
                    pressed && commonStyles.pressedButton,
                ]}>
                <Ionicons
                    name="add"
                    size={25}
                    color={Color.icon}
                />
                <Ionicons
                    name={secondIcon}
                    size={25}
                    color={Color.icon}
                />
            </Pressable>
        </View>
    );
}

export default rightHeaderIcon;