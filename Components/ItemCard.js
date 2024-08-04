import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import commonStyles from '../Styles/CommonStyles';
import Color from '../Styles/Color';

// This is a reusable card component that can be used to display information in a list.
// It takes four props:
// content: the main content of the card
// isWarning: a boolean that determines whether to display a warning icon
// date: the date of the content
// shortMeasure: a short description of the content
// The card is styled using the commonStyles object.
const ItemCard = ({ content, isWarning, date, shortMeasure }) => {
    return (
        <View style={commonStyles.card}>
            <Text style={commonStyles.cardTitle}>{content}</Text>
            {isWarning && <Ionicons name="warning" size={22} color={Color.warning} />}
            <View style={commonStyles.cardInfoContainer}>
                <Text style={commonStyles.cardInforText}>{date}</Text>
            </View>
            <View style={commonStyles.cardInfoContainer}>
                <Text style={commonStyles.cardInforText}>{shortMeasure}</Text>
            </View>
        </View>
    );
};

export default ItemCard;
