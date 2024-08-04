import React from 'react';
import { Pressable, Text } from 'react-native';
import Color from '../Styles/Color';
import commonStyles from '../Styles/CommonStyles';

// This is a reusable button component that can be used in any screen.
// It takes three props:
// onPress: a function that will be called when the button is pressed
// title: the text that will be displayed on the button
// style: an optional style object that can be used to customize the button
// The button will change its style when pressed to give feedback to the user.
const PressableButton = ({ onPress, title, style }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                commonStyles.defaultButton,
                style,
                pressed && commonStyles.pressedButton,
            ]}
        >
            <Text style={commonStyles.ButtonText}>{title}</Text>
        </Pressable>
    );
};

export default PressableButton;
