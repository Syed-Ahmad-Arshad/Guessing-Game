import { View, StyleSheet, Alert, FlatList, useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
imaport PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {AntDesign} from '@expo/vector-icons';
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude){
    const rndNum = Math.floor(Math.random() * (max-min)) + min;
    if (rndNum===exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }
}
 
let min = 1;
let max = 100;

function GameScreen({userNum, onGameOver}){
    const initialGuess = generateRandomBetween(1, 100, userNum)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [rounds, setRounds] = useState([initialGuess]);

    const {width, height} = useWindowDimensions();

    useEffect(()=>{
        console.log('guess: ', currentGuess);
        console.log('userNum', userNum);
        if (currentGuess === userNum){
            console.log("Hurraaah!!!!")
            onGameOver(rounds.length);
        }
    }, [currentGuess, userNum, onGameOver]);

    useEffect(()=>{
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    function nextGuessHandler(direction){
        if ((direction==='lower' && currentGuess < userNum) || (direction==='higher' && currentGuess > userNum)){
            Alert.alert('Lie Detected!', 'You cannot lie to the computer dude!', {text: 'Sorry!', style: 'cancel'});
            return;
        }
        if (direction === 'lower')
        {
            max = currentGuess;
        }
        else {
            min=currentGuess + 1;
        }
        const newRndNum = generateRandomBetween(min, max, currentGuess);
        setCurrentGuess(newRndNum);
        setRounds((currentState)=>[newRndNum, ...currentState]);
    }

    const guessRoundsListLength = rounds.length;

    let content = (
        <>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card>
                <InstructionText style={styles.instrunctionText}>Give me a clue</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                            <AntDesign name="up" size={20}/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <AntDesign name="down" size={20}/>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </>
    )

    if (width > height){
        content = (<>
            <View style={styles.buttonsContainerWide}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                        <AntDesign name="up" size={20}/>
                    </PrimaryButton>
                </View>
                <NumberContainer>
                    {currentGuess}
                </NumberContainer>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                    <AntDesign name="down" size={20}/>
                    </PrimaryButton>
                </View>
            </View>
        </>)
    }

    return(
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.flatListContainer}>
                <FlatList
                    data={rounds} 
                    renderItem={
                        (itemData)=><GuessLogItem roundNum={guessRoundsListLength-itemData.index} guess={itemData.item} />}
                    keyExtractor={(item)=>item}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    instrunctionText: {
        marginBottom: 12,
    },
    flatListContainer: {
        flex: 1,
    },
    buttonsContainerWide: {
        flexDirection: 'row',
        alignItems: 'center'
    }
  });


export default GameScreen;