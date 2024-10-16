import React from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function ButtonSignIn(){
    return (
        <TouchableOpacity style={styles.container}>
            <LinearGradient
                // Button Linear Gradient
                colors={['#1f362d', '#1d332e', '#3c453f']}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                style={styles.button}
                >
                <Text style={styles.text}>Sign in</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
    },
    button: {
        width: '80%',
        height: 50,
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60
    },
    text: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold'
    }

});