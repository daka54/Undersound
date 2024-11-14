import { UserRepositoryImpl } from "../../../Data/repositories/UserRepository"
import { UserAuth } from "../../entities/UserAuth";
import * as ImagePicker from "expo-image-picker";

const { UpdateInfoProfile } = new UserRepositoryImpl();

export const UpdateInfoProfileUseCase = async (user: UserAuth, file: ImagePicker.ImagePickerAsset) => {
      
    return await UpdateInfoProfile(user, file);
}
