import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRespository";


const { login } = new AuthRepositoryImpl();

export const LoginAuthUseCase = async (email: string, password: string) => {
    return await login(email, password);
}