import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Undersound</Text>
      <Text style={styles.subTitle}>Sign in to yor account</Text>
      <TextInput style={styles.textInput}
        placeholder='correo@correo.com'
      />
      <TextInput style={styles.textInput}
        placeholder='password'
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d0c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 55,
    color: '#34434f',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    color: 'gray'
  },
  textInput: {
    padding: 10,
    paddingStart: 20,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff'
  },
});
