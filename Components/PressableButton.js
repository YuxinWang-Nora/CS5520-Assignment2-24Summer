import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import Color from '../Styles/Color';

const PressableButton = ({ onPress, title, style }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.default,
                style,
                pressed && styles.pressed,
            ]}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    default: {
        backgroundColor: Color.buttonBeforePress,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '25%',
    },
    pressed: {
        backgroundColor: Color.buttonAfterPress,
        opacity: 0.25
    },
    text: {
        color: 'white',
        fontSize: 16
    }
});

export default PressableButton;
