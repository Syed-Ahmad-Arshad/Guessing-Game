import { Text, StyleSheet } from "react-native";

function Title({children}){
    return (
        <Text style={styles.title}>
            {children}
        </Text>
    )
}


const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        padding: 12,
        borderWidth: 2,
        borderColor: 'white',
    }
  });

export default Title;