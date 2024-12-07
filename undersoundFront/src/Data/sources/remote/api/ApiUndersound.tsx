import axios from "axios";
import { LocalStorage } from "../../local/LocalStorage";
import { UserAuth } from "../../../../Domain/entities/UserAuth";

const ApiUndersound = axios.create({
    baseURL: 'http://192.168.1.18:4000/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

const ApiUndersoundForImage = axios.create({
    baseURL: 'http://192.168.1.18:4000/api',
    headers: {
        'Content-Type': 'multipart/form-data',
        'accept': 'application/json'
    }
})

// INTERCEPTORS
/* ApiUndersound.interceptors.request.use(
    async(config) => {
        const data = await LocalStorage().getItem('user');
        if(data) {
            const user: UserAuth = JSON.parse(data as any);
            config.headers!['Authorization'] = user?.token!
        }
        return config;
    }
) */

export { ApiUndersound, ApiUndersoundForImage }