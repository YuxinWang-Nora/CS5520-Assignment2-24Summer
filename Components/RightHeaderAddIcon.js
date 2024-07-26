import React from "react";
import { View, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import commonStyles from '../Styles/CommonStyles';
import Color from '../Styles/Color';

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