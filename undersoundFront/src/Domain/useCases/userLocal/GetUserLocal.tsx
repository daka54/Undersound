import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";
import { UserAuth } from "../../entities/UserAuth";

const { getUser } = new UserLocalRepositoryImpl();

export const GetUserLocalUseCase = async () => {
    return await getUser();
}