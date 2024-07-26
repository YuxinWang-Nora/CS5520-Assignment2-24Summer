import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import commonStyles from '../Styles/CommonStyles';
import Color from '../Styles/Color';

const ItemCard = ({ content, isWarning, date, shortMeasure }) => {
    return (
        <View style={commonStyles.card}>
            <Text style={commonStyles.cardTitle}>{content}</Text>
            {isWarning && <MaterialIcons name="warning" size={20} color={Color.warning} />}
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
