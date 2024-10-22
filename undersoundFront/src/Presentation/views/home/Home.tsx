import React, {useState} from 'react'
import { Image, Keyboard, Pressable, Text, TextInput, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import styles from './Styles'
import { CustomTextInput } from '../../components/CustomTextInput';

export const HomeScreen = () => {

    const { email, password, onChange } = useViewModel();

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
    <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Pressable onPress={Keyboard.dismiss}>
            <Image 
            source = { require('../../../../assets/vinyls.jpg')} 
            style = {styles.imageBackground}
            />

            <View style = {styles.logoContainer}>
            <Text style= {styles.logoText}>Undersound</Text>
            </View>

            <View style = {styles.form}>

                <Text style= {styles.formText}>INGRESAR</Text>

                <CustomTextInput
                    image={require('../../../../assets/user.png')}
                    placeHolder='Email'
                    keyboardType='email-address'
                    property='email'
                    onChangeText={ onChange }
                    value = { email }
                />

                <CustomTextInput
                    image={require('../../../../assets/password.png')}
                    placeHolder='Contraseña'
                    keyboardType='default'
                    property='password'
                    onChangeText={ onChange }
                    value = { password }
                    secureTextEntry= {true}
                />

                <View style = {{marginTop: 30}}>
                    <RoundedButton text='ENTRAR' onPress={() => {
                        console.log('Email:' + email);
                        console.log('Password:' + password);
                    }} />
                </View>

                <View style = { styles.formRegister}>
                    <Text>No tienes cuenta?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen') }>
                        <Text style ={styles.formRegisterText}>Registrate</Text>
                    </TouchableOpacity>                
                </View>
            
            </View>
        </Pressable>
    </KeyboardAvoidingView>
    );
}
    
