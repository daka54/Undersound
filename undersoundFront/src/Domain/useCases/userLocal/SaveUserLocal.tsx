import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";
import { UserAuth } from "../../entities/UserAuth";

const { save } = new UserLocalRepositoryImpl();

export const SaveUserLocalUseCase = async (user: UserAuth) => {
    return await save(user);
}