import React, { useEffect } from 'react'
import { View, Text, Button, Image, Pressable, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import useViewModel from './ViewModel';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import { RoundedButton } from '../../../components/RoundedButton';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';

export const ProfileInfoScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {  user, removeUserSession } = useViewModel();
  
  useEffect(() => {
    if (user.id === 0){
      navigation.replace('HomeScreen');
    }
  }, [user])
  
  return (
    
    <View  style={styles.container}>
      <Image 
        source = { require('../../../../../assets/vinyls.jpg')} 
        style = {styles.imageBackground}
      />

      <Pressable
        style={ styles.logout }
        onPress={ () => {
          removeUserSession();          
        }}>        
        <Image 
          source = { require('../../../../../assets/logout.png')} 
          style = {styles.logoutImage}
        />
      </Pressable>      

      <View style = {styles.logoContainer}>
        { 
          user?.image !== '' 
            &&
          <Image 
            source = {{uri: user?.image }} 
            style = {styles.logoImage}
          />
        }
        
      </View>

      <View style = {styles.form}>
        <View style={styles.formInfo}>
            <Image
              source={require('../../../../../assets/user.png')}
              style = {styles.formImage}
            />
            <View style={styles.formContent}>
              <Text>{ user?.name}</Text>
              <Text style = {styles.formTextDescription}>Nombre</Text>
            </View>
        </View>

        <View style={{...styles.formInfo, marginTop: 25}}>
            <Image
              source={require('../../../../../assets/email.png')}
              style = {styles.formImage}
            />
            <View style={styles.formContent}>
              <Text>{ user?.email}</Text>
              <Text style = {styles.formTextDescription}>Email</Text>
            </View>
        </View>

        <View style={{...styles.formInfo, marginTop: 25}}>
            <Image
              source={require('../../../../../assets/phone.png')}
              style = {styles.formImage}
            />
            <View style={styles.formContent}>
              <Text>{ user?.phone}</Text>
              <Text style = {styles.formTextDescription}>Telefono</Text>
            </View>
        </View>

        <View style={{...styles.formInfo, marginTop: 25, marginBottom: 40}}>
            <Image
              source={require('../../../../../assets/location.png')}
              style = {styles.formImage}
            />
            <View style={styles.formContent}>
              <Text>{ user?.city}</Text>
              <Text style = {styles.formTextDescription}>Ciudad</Text>
            </View>
        </View>

        <RoundedButton
          onPress={ () => {
            navigation.navigate('ProfileUpdateScreen', {user: user! })
          }}
          text='Actualizar informacion'
        />
      </View>
    </View>
    
  )
}
