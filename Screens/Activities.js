import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import RightHeaderIcon from '../Components/RightHeaderAddIcon';

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
            <Text>Activities Screen</Text>
        </View>
    );
};

export default Activities;
