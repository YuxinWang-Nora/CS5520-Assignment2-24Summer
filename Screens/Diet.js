import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import RightHeaderIcon from '../Components/RightHeaderAddIcon';

const Diet = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <RightHeaderIcon
                    navigation={navigation}
                    toScreen="AddDiet"
                    secondIcon="fast-food"
                />
            ),
        });
    }, [navigation]);

    return (
        <View>
            <Text>Diet Screen</Text>
        </View>
    );
};

export default Diet;
