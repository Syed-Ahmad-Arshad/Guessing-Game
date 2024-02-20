import { StyleSheet } from "react-native";
import { Text } from "react-native";
import Colors from "../../constants/colors";


function InstructionText({children, style}){
    return(
        <Text style={[styles.instructionText, style]}>{children}</Text>
    );
};

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: Colors.accent_500,
        fontSize: 24,
    },
});

export default InstructionText;