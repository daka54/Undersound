import React, {useState} from 'react'
import { ApiUndersound } from '../../../Data/sources/remote/api/ApiUndersound';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';


const RegisterViewModel = () => {
    
    const [errorMessage, setErrorMessage] = useState('')
    const [sucessMessage, setSucessMessage] = useState('')
    const [values, setvalues] = useState({
        id: 0,
        name: '',
        email: '',
        phone: '',
        city: '',
        password: '',
        confirmPassword: '',
    });
 
    const onChange = (property: string, value: any) => {
        setvalues({ ...values, [property]: value})
    };

    const register = async () => {
        if (isValidForm()){
            const response = await RegisterAuthUseCase(values);
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
        return true;
    }

    return {
        ...values,
        onChange,
        register,
        errorMessage,
        sucessMessage
    }
}

export default RegisterViewModel;
