import React, {useState} from 'react'
import { Image, Keyboard, Pressable, Text, TextInput, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { MyColors } from '../../theme/AppTheme';
import { RoundedButton } from '../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
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
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.8,
        bottom: '35%'
    },
    form: {
        width: '100%',
        height: '40%',
        backgroundColor: MyColors.secondary,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding:30
    },
    formText:{
        fontWeight: 'bold',
        fontSize: 16
    },
    formIcon:{
        width: 30,
        height: 30,
        marginTop: 5
    },
    formInput:{
        flexDirection: 'row',
        marginTop: 30
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#979B8D',
        marginLeft: 15
    },
    formRegister:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    formRegisterText: {
        fontStyle: 'italic',
        color: '#5C7457',
        borderBottomWidth: 1,
        borderBottomColor: '#5C7457',
        fontWeight: 'bold',
        marginLeft: 10
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '35%'
    },
    logoText: {
        color: '#d3d0c1',
        textAlign: 'center',
        fontSize: 60,
        fontWeight: 'bold',
    },

});


