import Checkbox from 'expo-checkbox';
import { View, Text } from 'react-native';
import Color from '../Styles/Color';
import { commonStyles } from '../Styles/CommonStyles';

// This is a reusable checkbox component that can be used in any screen.
// It takes two props:
// isSpecialChecked: a boolean that determines whether the checkbox is checked
// setIsSpecialChecked: a function that will be called when the checkbox is pressed
const SpecialCheckbox = ({ isSpecialChecked, setIsSpecialChecked }) => {
    return (
        <View style={commonStyles.checkboxContainer}>
            <Text style={commonStyles.checkboxText}>
                The item is marked as special. Select the checkbox if you would like to approve it.
            </Text>
            <Checkbox
                value={isSpecialChecked}
                onValueChange={setIsSpecialChecked}
                color={Color.theme}
                style={commonStyles.checkbox}
            />
        </View>
    );

}

export default SpecialCheckbox;