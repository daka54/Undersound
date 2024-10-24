import axios from "axios";

const ApiUndersound = axios.create({
    baseURL: 'http://192.168.1.18:4000/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

export { ApiUndersound }