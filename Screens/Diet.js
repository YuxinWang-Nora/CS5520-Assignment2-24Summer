import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import RightHeaderIcon from '../Components/RightHeaderAddIcon';
import ItemsList from '../Components/ItemsList';

const Diet = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <RightHeaderIcon
                    navigation={navigation}
                    toScreen="AddDiet"
                    secondIcon="fast-food-outline"
                />
            ),
        });
    }, [navigation]);

    return (
        <View>
            <ItemsList collectionName="Diet" />
        </View>
    );
};

export default Diet;
