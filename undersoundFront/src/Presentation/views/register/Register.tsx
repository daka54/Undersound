import React, { useEffect } from 'react'
import { Image, Keyboard, Pressable, Text,  View, ScrollView, KeyboardAvoidingView, Platform, ActivityIndicator, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import useViewModel from './ViewModel';
import styles from './Styles'
import { CustomTextInput } from '../../components/CustomTextInput';
import Toast from 'react-native-toast-message';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { MyColors } from '../../theme/AppTheme';
import { Checkbox } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';

interface Props extends StackScreenProps<RootStackParamList, 'RegisterScreen'>{};

export const RegisterScreen = ({navigation, route}: Props) => {

    const {name, email, phone, city, password, confirmPassword, sucessMessage,errorMessage, loading, instagram, isChecked,
            onChange, register, pickImage, setIsChecked, handlePressTerms } = useViewModel();

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
        if (sucessMessage !== '') {
          Toast.show({
            type: 'success',
            text1: 'Bienvenido',
            text2: sucessMessage,
            position: 'bottom'
          });
          navigation.navigate('HomeScreen');
        }        
    }, [sucessMessage]);
    
    return (    
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
        <Image 
        source = { require('../../../../assets/vinyls.jpg')} 
        style = {styles.imageBackground}
        />

        {/* <View style = {styles.form}> */}
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            style={styles.form}
        >                       

            <ScrollView contentContainerStyle={{paddingBottom:50}}>
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
                    placeHolder='Instagram'
                    keyboardType='default'
                    image={ require('../../../../assets/instagram.png') }
                    property='instagram'
                    onChangeText={ onChange }
                    value={ instagram }
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
                
                <View
                    style={styles.checkboxContainer}
                    >
                    <View style={styles.checkbox}>
                        <Checkbox
                            status={isChecked ? 'checked' : 'unchecked'}
                            onPress={() => setIsChecked(!isChecked)}
                            color="blue" // Color cuando está marcado
                            uncheckedColor="gray" // Color cuando está desmarcado
                            />
                    </View>
                    <Text >Acepto los {''}
                        <Text style={styles.link} onPress={handlePressTerms}>
                            términos y condiciones
                        </Text>
                    </Text>
                </View>

                <View style = {{marginTop: 30}}>
                    <RoundedButton text='CONFIRMAR' onPress={() => register()} />
                </View>    
            </ScrollView>
            {
                loading &&
                <ActivityIndicator 
                style={styles.loading} 
                size="small" 
                color={MyColors.primary} 
                />
            }

        </KeyboardAvoidingView>
    </Pressable>
    );
}
    