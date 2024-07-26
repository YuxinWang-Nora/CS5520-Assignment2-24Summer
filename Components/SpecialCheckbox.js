import Checkbox from 'expo-checkbox';
import { View, Text } from 'react-native';
import Color from '../Styles/Color';
import { commonStyles } from '../Styles/CommonStyles';

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