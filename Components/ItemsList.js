import React, { useState, useEffect } from 'react';
import { FlatList, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, onSnapshot } from 'firebase/firestore';
import { database } from '../Firebase/firebaseSetup';
import ItemCard from './ItemCard';
import commonStyles from '../Styles/CommonStyles';

// This is a reusable component that displays a list of items.
// It takes one prop:
// collectionName: the name of the collection in the Firestore database
// The component fetches the data from the specified collection and displays it in a list.
// Each item in the list is a Pressable component that navigates to the Add{collectionName} screen.
const ItemsList = ({ collectionName }) => {
    const [items, setItems] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(database, collectionName), (snapshot) => {
            const updatedData = [];
            snapshot.forEach(doc => updatedData.push({ ...doc.data(), id: doc.id }));
            setItems(updatedData);
        });

        return () => unsubscribe();
    }, []);

    const renderItem = ({ item }) => {
        const formattedDate = new Date(item.date).toDateString();
        return (
            <Pressable
                onPress={() => navigation.navigate(`Add${collectionName}`, { data: item })}
                style={({ pressed }) => [
                    pressed && commonStyles.pressedCard,
                ]
                }
            >
                <ItemCard
                    content={item.description || item.type}
                    isWarning={item.isSpecial}
                    date={formattedDate}
                    shortMeasure={item.calories ? `${item.calories} cal` : `${item.duration} min`}
                />
            </Pressable>
        );
    };

    return (
        <View style={commonStyles.cardContainer}>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default ItemsList;
