import React, {useState, useEffect, useContext} from 'react'
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/loginAuth';
import { SaveUserLocalUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal';
import { GetUserLocalUseCase } from '../../../Domain/useCases/userLocal/GetUserLocal';
import { useUserLocal } from '../../hooks/useUserLocal';
import { UserContext } from '../../context/UserContext';


const HomeViewModel = () => {

    const [errorMessage, setErrorMessage] = useState('')
    const [values, setValues] = useState({
        email: '',
        password:'',
    });

    //const { user, getUserSession } = useUserLocal();
    const { user, saveUserSession } = useContext(UserContext);
    console.log('USUARIO DE SESION: ' + JSON.stringify(user));
    
    
    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    };

    const login = async () => {
        if (isValidForm()){
            const response = await LoginAuthUseCase(values.email, values.password);
            console.log('RESPONSE' + JSON.stringify(response));
            if(response.error){
                setErrorMessage(response.body)
            } else {
                saveUserSession(response.body);
            }
        } else {
            setTimeout(() => setErrorMessage(''), 1); // Restablece después de mostrar
        } 
        
    }

    const isValidForm = (): boolean => {
        if(values.email == '') {
            setErrorMessage('Ingresa el email');
            return false;
        }
        if(values.password == '') {
            setErrorMessage('Ingresa la contraseña');
            return false;
        }
        return true;
    }

    return {
        ...values,
        user,
        onChange,
        errorMessage,
        login
    }
}

export default HomeViewModel;