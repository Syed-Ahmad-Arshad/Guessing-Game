import { Image, View, StyleSheet, 
Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({userNumber, roundsNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <Title>
                GAME OVER!
            </Title>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.imageStyle} 
                    source={require('../assets/success.png')} 
                />
            </View>
            <Text style={styles.summaryText}>
                The program guessed your number <Text style={styles.highlight}>{userNumber}</Text> in <Text style={styles.highlight}>{roundsNumber}</Text> turns!
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary_800,
        overflow: 'hidden',
        marginVertical: 36,
    },
    imageStyle: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary_700,
    }
});

export default GameOverScreen;