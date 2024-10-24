import React, {useState} from 'react'
import { ApiUndersound } from '../../../Data/sources/remote/api/ApiUndersound';

const RegisterViewModel = () => {
    
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
        try {
            
            const response = await ApiUndersound.post('/usersauth/add', values);
            console.log('RESPONDE:' + JSON.stringify(response));
            

        } catch (error) {
            console.log('ERROR' + error);
            
        }
      
    }

    return {
        ...values,
        onChange,
        register
    }
}

export default RegisterViewModel;
