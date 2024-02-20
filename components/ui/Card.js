import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({children}){
    return (
        <View style={styles.inputContainer}>{children}</View>
    );
}


const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 36,
        backgroundColor: Colors.primary_800,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 6,
        shadowOpacity: .35,
    },
  });
export default Card;