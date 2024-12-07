import { createContext, useState, useEffect } from "react";
import { UserAuth } from "../../Domain/entities/UserAuth";
import { SaveUserLocalUseCase } from "../../Domain/useCases/userLocal/SaveUserLocal";
import { GetUserLocalUseCase } from "../../Domain/useCases/userLocal/GetUserLocal";
import { RemoveUserLocalUseCase } from "../../Domain/useCases/userLocal/RemoveUserLocal";

export const userInitialState: UserAuth = {
    id:              0,
    name:            '',
    email:           '',
    phone:           '',
    city:            '',
    image:          '',
    password:        '',
    confirmPassword: '',
    token:           '',
    loginCount:     0,
    roles:         [],
}

export interface UserContextProps {
    user: UserAuth;
    saveUserSession: (user: UserAuth) => Promise<void>;
    getUserSession: () => Promise<void>;
    removeUserSession: () => Promise<void>;
}

export const UserContext = createContext( {} as UserContextProps);

export const UserProvider = ( {children}: any) => {

    const [user, setUser] = useState(userInitialState);

    useEffect(() => {
        getUserSession();
    }, [])

    const saveUserSession = async (user: UserAuth) => {
        await SaveUserLocalUseCase(user);
        setUser(user);
    }

    const getUserSession = async () => {
        const user = await GetUserLocalUseCase();
        setUser(user);     
    }

    const removeUserSession = async () => {
        await RemoveUserLocalUseCase;
        setUser(userInitialState);
    }

    return (
        <UserContext.Provider value={{
            user,
            saveUserSession,
            getUserSession,
            removeUserSession
        }}>
                { children }
        </UserContext.Provider>
    )
}