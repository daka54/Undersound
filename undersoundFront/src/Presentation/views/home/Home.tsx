import React, {useState, useEffect} from 'react'
import { Image, Keyboard, Pressable, Text, TextInput, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import styles from './Styles'
import { CustomTextInput } from '../../components/CustomTextInput';
import Toast from 'react-native-toast-message';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'>{};

export const HomeScreen = ({navigation, route}: Props) => {

    const { email, password, errorMessage, user, onChange, login } = useViewModel();

    
    useEffect(() => {
        if (errorMessage !== '') {
          Toast.show({
            type: 'error',
            text1: 'Formulario inválido',
            text2: errorMessage,
            position: 'bottom'
          });
        }
    }, [errorMessage]);
    
    useEffect(() => {
        if(user?.id !== null && user?.id !== undefined && user?.id !== 0) {
            if (user?.loginCount === 0) {
                navigation.replace('QuestionaryScreen');
            } else if (user.roles?.length! > 1) {
                navigation.replace('RolesScreen');
            } else{
                navigation.replace('UserTabsNavigator');
            }
        }
    }, [user])
    

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
                    <RoundedButton text='ENTRAR' onPress={() => login()} />
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
    
