import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRespository";
import { UserAuth } from "../../entities/UserAuth";

const { register } = new AuthRepositoryImpl();

export const RegisterAuthUseCase = async (user: UserAuth) => {
    return await register(user);
}