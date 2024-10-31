import { UserAuth } from "../entities/UserAuth";

export interface UserLocalRepository{

    save(user: UserAuth): Promise<void>;
    getUser(): Promise<UserAuth>;
    remove(): Promise<void>;
}