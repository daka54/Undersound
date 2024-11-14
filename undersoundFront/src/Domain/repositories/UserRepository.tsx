import * as ImagePicker from "expo-image-picker"
import { UserAuth } from "../entities/UserAuth"
import { ResponseAPIUndersound } from "../../Data/sources/remote/models/responseApiundersound"

export interface UserRepository {
    UpdateInfoProfile( user: UserAuth, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPIUndersound>
}