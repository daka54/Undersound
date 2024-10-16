import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Pressable, Keyboard } from 'react-native';
import * as React from "react"
import ButtonSignIn from './components/ButtonSignIn';
import ButtonRegister from './components/ButtonRegister';

export default function App() {
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.mainContainer}>
      {/* Imagen que ocupa todo el ancho y comienza desde el filo superior */}
      <Image 
        source={require('./assets/VinylsEdit.png')}
        style={styles.vinylImage} 
        resizeMode="cover" // Para que cubra todo el contenedor sin distorsión
      />
      
      <View style={styles.container}>
        <Text style={styles.title}>Undersound</Text>
        <Text style={styles.subTitle}>Sign in to your account</Text>

        <TextInput 
          style={styles.textInput}
          placeholder='correo@correo.com'
        />
        <TextInput 
          style={styles.textInput}
          placeholder='password'
          secureTextEntry // Para que se vea como campo de contraseña
        />
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
        <ButtonSignIn></ButtonSignIn>
        <ButtonRegister></ButtonRegister>
        <StatusBar style="auto" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#d3d0c1',
  },
  container: {  
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150, // Espacio para que los elementos no queden encima de la imagen
  },
  vinylImage: {
    ...StyleSheet.absoluteFillObject, // Ocupa todo el espacio de la pantalla
    width: '100%',
    height: 250, // Ajusta la altura según necesites para la imagen
  },
  title: {
    fontSize: 60,
    color: '#4e544a',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 20,
  },
  textInput: {
    padding: 10,
    paddingStart: 20,
    width: '80%',
    height: 50,
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  forgotPassword: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  button: {

  }
});
