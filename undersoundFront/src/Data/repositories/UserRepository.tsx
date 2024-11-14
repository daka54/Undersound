import * as ImagePicker from 'expo-image-picker';
import { UserAuth } from "../../Domain/entities/UserAuth";
import { UserRepository } from "../../Domain/repositories/UserRepository";
import { ResponseAPIUndersound } from "../sources/remote/models/responseApiundersound";
import { ApiUndersoundForImage } from "../sources/remote/api/ApiUndersound";
import { AxiosError } from "axios";
import mime from 'mime';
import { ImagePickerAsset } from 'expo-image-picker';

export class UserRepositoryImpl implements UserRepository {
    
     async UpdateInfoProfile(user: UserAuth, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPIUndersound> {
        try {
            let data = new FormData();
            if (file) {
                data.append('file', {
                    uri: file.uri,
                    name: file.uri.split('/').pop(),
                    type: mime.getType(file.uri)!
                } as any);
            }

            data.append('body', JSON.stringify(user)as any);
            console.log(JSON.stringify(data));

            const response = await ApiUndersoundForImage.post<ResponseAPIUndersound>('/usersauth/update', data);
            return Promise.resolve(response.data);

        } catch (error) {
            let e =(error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIUndersound = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }            
}