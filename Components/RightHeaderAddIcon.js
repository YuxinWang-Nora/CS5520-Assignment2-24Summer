import React from "react";
import { View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import commonStyles from '../Styles/CommonStyles';

const rightHeaderIcon = ({ navigation, toScreen, secondIcon }) => {
    return (
        <View style={commonStyles.rightHeaderIcon}>
            <Ionicons
                name="add"
                size={25}
                color="white"
                onPress={() => navigation.navigate(toScreen)}
            />
            <Ionicons
                name={secondIcon}
                size={25}
                color="white"
            />
        </View>
    );
}

export default rightHeaderIcon;