import { StyleSheet, ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(true);
  const [rounds, setRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if (!fontsLoaded){
    return <AppLoading />;
  }


  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  function gameOverHandler(numberOfRounds){
    setGameOver(true);
    setRounds(numberOfRounds);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  function startNewGameHandler(){
    setUserNumber(null);
    setRounds(0);
  }

  if (userNumber){
    screen = <GameScreen userNum={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameOver && userNumber){
    screen = <GameOverScreen 
              userNumber={userNumber} 
              onStartNewGame={startNewGameHandler}
              roundsNumber={rounds}
              />
  }

  return (<>
  <LinearGradient colors={[Colors.primary_700, Colors.accent_500]} style={styles.rootScreen}>
    <ImageBackground 
        source={require('./assets/background.png')} 
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>

          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
    </ImageBackground>
  </LinearGradient></>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});
