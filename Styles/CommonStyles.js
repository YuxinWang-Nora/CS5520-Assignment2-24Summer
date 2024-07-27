import { StyleSheet } from "react-native";
import Color from "./Color";

export const commonStyles = StyleSheet.create({
    defaultScreen: {
        flex: 1,
        backgroundColor: Color.background,
    },
    darkScreen: {
        flex: 1,
        backgroundColor: Color.darkBackground,
    },
    rightHeaderIcon: {
        justifyContent: 'space-between',
        marginRight: 10,
        flexDirection: 'row',
    },
    cancelButton: {
        backgroundColor: Color.cancelButton,
    },
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
        backgroundColor: Color.background,
        borderColor: Color.theme,
        borderWidth: 1.5,
        borderRadius: 10,
    },
    addContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'top',
    },
    card: {
        backgroundColor: Color.theme,
        padding: 12,
        marginVertical: 5.3,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardContainer: {
        justifyContent: 'top',
        padding: 20,
    },
    cardTitle: {
        color: Color.titleText,
        fontSize: 16,
        flex: 1,
        marginLeft: 3,
    },
    cardInfoContainer: {
        flexDirection: 'row',
        backgroundColor: Color.cardInfoBackground,
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 3,
        marginLeft: 5,

    },
    cardInforText: {
        color: Color.theme,
        fontSize: 14,
        fontbold: 'bold',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    checkboxText: {
        fontSize: 15,
        color: Color.theme,
    },
    checkbox: {
        marginLeft: 5,
    },
    defaultButton: {
        backgroundColor: Color.buttonBeforePress,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '25%',
    },
    pressedButton: {
        backgroundColor: Color.buttonAfterPress,
        opacity: 0.25
    },
    ButtonText: {
        color: Color.titleText,
        fontSize: 16
    },
    singleButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default commonStyles;