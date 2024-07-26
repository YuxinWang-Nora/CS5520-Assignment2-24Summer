import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import RightHeaderIcon from '../Components/RightHeaderAddIcon';
import ItemsList from '../Components/ItemsList';

const Activities = () => {
    const navigation = useNavigation();

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
        <View>
            <ItemsList collectionName="Activities" />
        </View>
    );
};

export default Activities;
