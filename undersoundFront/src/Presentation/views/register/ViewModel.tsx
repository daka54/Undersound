import React, {useState} from 'react'
import { ApiUndersound } from '../../../Data/sources/remote/api/ApiUndersound';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';
import * as ImagePicker from 'expo-image-picker';
import { Linking } from 'react-native';


const RegisterViewModel = () => {
    
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [sucessMessage, setSucessMessage] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [values, setvalues] = useState({
        id: 0,
        name: '',
        email: '',
        phone: '',
        city: '',
        image: '',
        password: '',
        confirmPassword: '',
        instagram: ''
    });
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();

    const handlePressTerms = () => {
        // Aquí defines la URL a la que quieres redirigir
        Linking.openURL('https://www.example.com/terminos-y-condiciones');
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        });

        if (!result.canceled){
            onChange('image', result.assets[0].uri);
            setFile(result.assets[0]);
        }
    }

    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        });

        if (!result.canceled){
            onChange('image', result.assets[0].uri);
            setFile(result.assets[0]);
        }
    }

    const onChange = (property: string, value: any) => {
        setvalues({ ...values, [property]: value})
    };

    const register = async () => {
        if (isValidForm()){
            setLoading(true);
            const response = await RegisterAuthUseCase(values);
            setLoading(false);
            setSucessMessage(response.body);
            setTimeout(() => setSucessMessage(''), 100);
            console.log('RESULT: ' + JSON.stringify(response));
        }        
    }

    const isValidForm = (): boolean => {
        if (values.name == ''){
            setErrorMessage('Ingresa tu nombre');
            return false;
        }
        if (values.email == ''){
            setErrorMessage('Ingresa tu correo electronico');
            return false;
        }
        if (values.phone == ''){
            setErrorMessage('Ingresa tu telefono');
            return false;
        }
        if (values.city == ''){
            setErrorMessage('Ingresa tu ciudad');
            return false;
        }
        if (values.password == ''){
            setErrorMessage('Ingresa la contraseña');
            return false;
        }
        if (values.confirmPassword == ''){
            setErrorMessage('Ingresa la confirmacion de la contraseña');
            return false;
        }
        if (values.password !== values.confirmPassword){
            setErrorMessage('Las contraseñas no coinciden')
            return false;
        }
        if (!isChecked){
            setErrorMessage('Acepta los terminos y condiciones')
            return false;
        }
        return true;
    }

    return {
        ...values,
        onChange,
        register,
        errorMessage,
        sucessMessage,
        pickImage,
        takePhoto,
        loading,
        isChecked,
        setIsChecked,
        handlePressTerms
    }
}

export default RegisterViewModel;
