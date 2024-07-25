import { StyleSheet } from "react-native";
import Color from "./Color";

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
    cancelButton: {
        backgroundColor: Color.cancelButton,
    },
    // screenHeader: {
    //     headerStyle: {
    //         backgroundColor: 'purple',
    //     },
    //     headerTintColor: 'white',
    // }
});

export default commonStyles;