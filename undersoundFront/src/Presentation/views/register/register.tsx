import React from 'react'
import { Image, Keyboard, Pressable, Text, TextInput, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { MyColors } from '../../theme/AppTheme';
import { RoundedButton } from '../../components/RoundedButton';
import useViewModel from './ViewModel';
import styles from './Styles'
import { CustomTextInput } from '../../components/CustomTextInput';

export const RegisterScreen = () => {

    const {name, email, phone, city, password, confirmPassword, onChange, register } = useViewModel();

    return (    
    <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Pressable onPress={Keyboard.dismiss}>
            <Image 
            source = { require('../../../../assets/vinyls.jpg')} 
            style = {styles.imageBackground}
            />

            <View style = {styles.form}>

                <Text style= {styles.formText}>Registrate</Text>
            
                <CustomTextInput
                    placeHolder='Nombre Completo'
                    keyboardType='default'
                    image={ require('../../../../assets/user.png') }
                    property='name'
                    onChangeText={ onChange }
                    value={ name}
                    />

                <CustomTextInput
                    placeHolder='Email'
                    keyboardType='email-address'
                    image={ require('../../../../assets/email.png') }
                    property='email'
                    onChangeText={ onChange }
                    value={ email }
                    />

                <CustomTextInput
                    placeHolder='Telefono'
                    keyboardType='numeric'
                    image={ require('../../../../assets/phone.png') }
                    property='phone'
                    onChangeText={ onChange }
                    value={ phone }
                    />

                <CustomTextInput
                    placeHolder='Ciudad'
                    keyboardType='default'
                    image={ require('../../../../assets/location.png') }
                    property='city'
                    onChangeText={ onChange }
                    value={ city }
                    />

                <CustomTextInput
                    placeHolder='Contraseña'
                    keyboardType='default'
                    image={ require('../../../../assets/password.png') }
                    property='password'
                    onChangeText={ onChange }
                    value={ password }
                    secureTextEntry= {true}
                    />

                <CustomTextInput
                    placeHolder='Confirmar contraseña'
                    keyboardType='default'
                    image={ require('../../../../assets/noEye.png') }
                    property='confirmPassword'
                    onChangeText={ onChange }
                    value={ confirmPassword }
                    secureTextEntry= {true}
                    />

                <View style = {{marginTop: 30}}>
                    <RoundedButton text='CONFIRMAR' onPress={() => register() } />
                </View>        
            </View>
        </Pressable>
    </KeyboardAvoidingView>
    );
}
    