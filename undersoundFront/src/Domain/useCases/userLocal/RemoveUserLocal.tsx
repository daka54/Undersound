import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";
import { UserAuth } from "../../entities/UserAuth";

const { remove } = new UserLocalRepositoryImpl();

export const RemoveUserLocalUseCase = async () => {
    return await remove();
}