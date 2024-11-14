import { AxiosError } from "axios";
import { UserAuth } from "../../Domain/entities/UserAuth";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiUndersound, ApiUndersoundForImage } from "../sources/remote/api/ApiUndersound";
import { ResponseAPIUndersound } from "../sources/remote/models/responseApiundersound";


export class AuthRepositoryImpl implements AuthRepository {

    async register(user: UserAuth): Promise<ResponseAPIUndersound> {
        try {
            
            const response = await ApiUndersound.post<ResponseAPIUndersound>('/usersauth/add', user);
            return Promise.resolve(response.data);

        } catch (error) {
            let e =(error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIUndersound = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async login(email: string, password: string): Promise<ResponseAPIUndersound> {
        try {
            
            const response = await ApiUndersound.post<ResponseAPIUndersound>('/auth/login', {
                user: email,
                password: password
            });
            return Promise.resolve(response.data);

        } catch (error) {
            let e =(error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIUndersound = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

}