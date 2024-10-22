import React from 'react'
import { Image, Keyboard, Pressable, Text, TextInput, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { MyColors } from '../../theme/AppTheme';
import { RoundedButton } from '../../components/RoundedButton';

export const RegisterScreen = () => {
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
            
                <View style = {styles.formInput}>
                    <Image
                        style = {styles.formIcon}
                        source={ require('../../../../assets/user.png')}
                    />                
                    <TextInput 
                        style = {styles.formTextInput}
                        placeholder='Nombre Completo'
                        keyboardType='default'
                    />
                </View>

                <View style = {styles.formInput}>
                    <Image
                        style = {styles.formIcon}
                        source={ require('../../../../assets/email.png')}
                    />                
                    <TextInput 
                        style = {styles.formTextInput}
                        placeholder='Email'
                        keyboardType='email-address'
                    />
                </View>

                <View style = {styles.formInput}>
                    <Image
                        style = {styles.formIcon}
                        source={ require('../../../../assets/phone.png')}
                    />                
                    <TextInput 
                        style = {styles.formTextInput}
                        placeholder='Telefono'
                        keyboardType='numeric'
                    />
                </View>

                <View style = {styles.formInput}>
                    <Image
                        style = {styles.formIcon}
                        source={ require('../../../../assets/location.png')}
                    />                
                    <TextInput 
                        style = {styles.formTextInput}
                        placeholder='Ciudad'
                        keyboardType='default'
                    />
                </View>

                <View style = {styles.formInput}>
                    <Image
                        style = {styles.formIcon}
                        source={ require('../../../../assets/password.png')}
                    />                
                    <TextInput 
                        style = {styles.formTextInput}
                        placeholder='Contraseña'
                        keyboardType='default'
                        secureTextEntry={true}
                    />
                </View>

                <View style = {styles.formInput}>
                    <Image
                        style = {styles.formIcon}
                        source={ require('../../../../assets/noEye.png')}
                    />                
                    <TextInput 
                        style = {styles.formTextInput}
                        placeholder='Confirmar contraseña'
                        keyboardType='default'
                        secureTextEntry={true}
                    />
                </View>

                <View style = {{marginTop: 30}}>
                    <RoundedButton text='CONFIRMAR' onPress={() => (console.log('entranding'))} />
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
        height: '75%',
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

});
