import React, {useState} from 'react'
import { ApiUndersound } from '../../../../Data/sources/remote/api/ApiUndersound';
import { UpdateInfoProfileUseCase } from '../../../../Domain/useCases/user/UpdateUser';
import * as ImagePicker from 'expo-image-picker';
import { useUserLocal } from '../../../hooks/useUserLocal';
import { UserAuth } from '../../../../Domain/entities/UserAuth';


const ProfileUpdateViewModel = (user: UserAuth) => {
    
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [sucessMessage, setSucessMessage] = useState('');
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();
    const [values, setValues] = useState(user);
    const { getUserSession } = useUserLocal();
    

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
        // Solicita permisos de cámara
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        
        if (status !== 'granted') {
          alert('Se requiere permiso para acceder a la cámara.');
          return;
        }      
        // Abre la cámara
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          quality: 1,
        });      
        if (!result.canceled) {
          onChange('image', result.assets[0].uri);
          setFile(result.assets[0]);
        }
    };

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value})
    };

    const onChangeInfoUpdate = (name: string, phone: string, city: string) => {
        setValues({ ...values, name, phone, city})
    };

    const update = async () => {
        if (isValidForm()){
            setLoading(false);
            //const response = await RegisterAuthUseCase(values);  
            const response = await UpdateInfoProfileUseCase(values, file!);
            setLoading(false);
            getUserSession();
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
        if (values.phone == ''){
            setErrorMessage('Ingresa tu telefono');
            return false;
        }
        if (values.city == ''){
            setErrorMessage('Ingresa tu ciudad');
            return false;
        }
        return true;
    }

    return {
        ...values,
        onChange,
        update,
        errorMessage,
        sucessMessage,
        pickImage,
        takePhoto,
        loading,
        user,
        onChangeInfoUpdate
    }
}

export default ProfileUpdateViewModel;
