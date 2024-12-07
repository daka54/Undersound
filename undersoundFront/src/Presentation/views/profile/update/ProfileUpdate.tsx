import React, { useEffect, useState } from 'react'
import { Image, Keyboard, Pressable, Text,  View, ScrollView, KeyboardAvoidingView, Platform, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../../components/RoundedButton';
import useViewModel from './ViewModel';
import styles from './Styles'
import { CustomTextInput } from '../../../components/CustomTextInput';
import Toast from 'react-native-toast-message';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';
import { MyColors } from '../../../theme/AppTheme';
import { ModalPickImage } from '../../../components/ModalPickImage';

interface Props extends StackScreenProps<RootStackParamList, 'ProfileUpdateScreen'>{};

export const ProfileUpdateScreen = ({navigation, route}: Props) => {

    const { user } = route.params;
    const {name, phone, city, image, sucessMessage,errorMessage, loading,modalVisible, onChange, update, pickImage, takePhoto, onChangeInfoUpdate, setModalVisible } = useViewModel(user);
        
    useEffect(() => {
        if (errorMessage !== '') {
          Toast.show({
            type: 'error',
            text1: 'Formulario inválido',
            text2: errorMessage,
            position: 'bottom'
          });
        }
    }, [errorMessage])

    useEffect(() => {
        if (sucessMessage !== '') {
          Toast.show({
            type: 'success',
            text1: 'Actualizado',
            text2: sucessMessage,
            position: 'bottom'
          });
          navigation.navigate('HomeScreen');
        }        
    }, [sucessMessage])
    
    
    return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
        >
        <ScrollView
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 50 }}
            keyboardShouldPersistTaps="handled"
            >
            <Pressable onPress={Keyboard.dismiss} style={styles.container}>
                <Image 
                source = { require('../../../../../assets/vinyls.jpg')} 
                style = {styles.imageBackground}
                />

                <View style={ styles.logoContainer}>
                    <Pressable onPress={ () => setModalVisible(true)}>
                        {
                            image == ''
                            ? user?.image == ''
                                ? <Image
                                    source={ require('../../../../../assets/user.png')}
                                    style={styles.logoImage}
                                    />
                                : <Image
                                    source={{ uri: user?.image}}
                                    style={styles.logoImage}
                                    />
                            : <Image
                                source={{ uri: image}}
                                style={styles.logoImage}
                                />
                        }                    
                    </Pressable>
                    <Text style={styles.logoText}>Selecciona una imagen</Text>
                </View>
                {/* <View style = {styles.form}> */}
                <View style={styles.form}>                
                    <Text style= {styles.formText}>Actualizar</Text>
                
                    <CustomTextInput
                        placeHolder='Nombre Completo'
                        keyboardType='default'
                        image={ require('../../../../../assets/user.png') }
                        property='name'
                        onChangeText={ onChange }
                        value={ name }
                        />

                    <CustomTextInput
                        placeHolder='Telefono'
                        keyboardType='numeric'
                        image={ require('../../../../../assets/phone.png') }
                        property='phone'
                        onChangeText={ onChange }
                        value={ phone }
                        />

                    <CustomTextInput
                        placeHolder='Ciudad'
                        keyboardType='default'
                        image={ require('../../../../../assets/location.png') }
                        property='city'
                        onChangeText={ onChange }
                        value={ city }
                        />

                    <View style = {{marginTop: 40}}>
                        <RoundedButton text='CONFIRMAR' onPress={() => update()} />
                    </View>    
                    
                    {
                        loading &&
                        <ActivityIndicator 
                        style={styles.loading} 
                        size="small" 
                        color={MyColors.primary} 
                        />
                    }

                </View>

                <ModalPickImage
                    openGallery={ pickImage }
                    openCamera={ takePhoto }
                    modalUseState = { modalVisible }
                    setModalUseState={ setModalVisible }
                />        
            </Pressable>
        </ScrollView>
    </KeyboardAvoidingView>
    );
}
/*                     image == ''
                    ? <Image
                        source={ require('../../../../../assets/user.png')}
                        style={styles.logoImage}
                        />
                    : <Image
                        source={{ uri: image}}
                        style={styles.logoImage}
                        /> */