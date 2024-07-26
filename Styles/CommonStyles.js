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
    input: {
        fontSize: 18,
        borderWidth: 1.5,
        padding: 10,
        marginBottom: 15,
        borderRadius: 10,
        borderColor: Color.theme,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    dropDown: {
        marginBottom: 15,
        backgroundColor: '#fafafa',
        borderColor: Color.theme,
        borderWidth: 1.5,
        borderRadius: 10,
    },
    addContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'top',
    },
});

export default commonStyles;