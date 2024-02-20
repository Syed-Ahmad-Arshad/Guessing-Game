import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function GuessLogItem({roundNum, guess}){
    return(
    <View style={styles.listItem}>
        <Text style={styles.itemText}># {roundNum}</Text>
        <Text style={styles.itemText}>Guess: {guess}</Text>
    </View>
    )
};

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary_800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent_500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    itemText: {
        fontFamily: 'open-sans',
    }
})

export default GuessLogItem;