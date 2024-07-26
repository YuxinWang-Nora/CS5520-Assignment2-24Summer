import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import Color from '../Styles/Color';
import commonStyles from '../Styles/CommonStyles';

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
