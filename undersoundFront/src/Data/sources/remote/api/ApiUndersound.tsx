import axios from "axios";

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

export { ApiUndersound, ApiUndersoundForImage }