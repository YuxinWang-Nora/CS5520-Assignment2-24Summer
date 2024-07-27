import React, { useContext } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { ThemeContext } from "../Context/ThemeContext";
import RightHeaderIcon from '../Components/RightHeaderAddIcon';
import ItemsList from '../Components/ItemsList';
import commonStyles from '../Styles/CommonStyles';

const Activities = () => {
    const navigation = useNavigation();
    const { isDarkTheme } = useContext(ThemeContext);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <RightHeaderIcon
                    navigation={navigation}
                    toScreen="AddActivities"
                    secondIcon="bicycle"
                />
            ),
        });
    }, [navigation]);

    return (
        <View style={isDarkTheme ? commonStyles.darkScreen : commonStyles.defaultScreen}>
            <ItemsList collectionName="Activities" />
        </View>
    );
};

export default Activities;
