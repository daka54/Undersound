import React from 'react'
import { Image, Keyboard, Pressable, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MyColors } from '../../theme/AppTheme';
import { RoundedButton } from '../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../App';

export const HomeScreen = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

    return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
        <Image 
        source = { require('../../../assets/vinyls.jpg')} 
        style = {styles.imageBackground}
        />

        <View style = {styles.logoContainer}>
        <Text style= {styles.logoText}>Undersound</Text>
        </View>

        <View style = {styles.form}>

        <Text style= {styles.formText}>INGRESAR</Text>
        
        <View style = {styles.formInput}>
            <Image
            style = {styles.formIcon}
            source={ require('../../../assets/user.png')}
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
            source={ require('../../../assets/password.png')}
            />
            
            <TextInput 
            style = {styles.formTextInput}
            placeholder='Contraseña'
            keyboardType='default'
            secureTextEntry={true}
            />
        </View>

        <View style = {{marginTop: 30}}>
            <RoundedButton text='ENTRAR' onPress={() => (console.log('entranding'))} />
        </View>

        <View style = { styles.formRegister}>
            <Text>No tienes cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen') }>
                <Text style ={styles.formRegisterText}>Registrate</Text>
            </TouchableOpacity>
            
        </View>
        
        </View>
    </Pressable>
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


