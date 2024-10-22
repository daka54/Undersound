import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MyColors } from '../theme/AppTheme';

interface Props {
    text: string,
    onPress: () => void
}

export const RoundedButton = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={() => onPress()}>
            <LinearGradient
                // Button Linear Gradient
                colors={['#1f362d', '#214E34', '#3c453f']}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                style={styles.button}
                >
                <Text style={styles.text}>{text}</Text>
            </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    button: {
        width: '100%',
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        color: MyColors.secondary,
        fontWeight: 'bold'
    }

});
