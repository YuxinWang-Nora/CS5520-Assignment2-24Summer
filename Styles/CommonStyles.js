import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
    defaultScreen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightHeaderIcon: {
        justifyContent: 'space-between',
        marginRight: 10,
        flexDirection: 'row',
    },
    // screenHeader: {
    //     headerStyle: {
    //         backgroundColor: 'purple',
    //     },
    //     headerTintColor: 'white',
    // }
});

export default commonStyles;