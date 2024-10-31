import { UserAuth } from '../../Domain/entities/UserAuth';
import { UserLocalRepository } from '../../Domain/repositories/UserLocalRepository';
import { LocalStorage } from '../sources/local/LocalStorage';

export class UserLocalRepositoryImpl implements UserLocalRepository{

    async save(user: UserAuth): Promise<void> {
        const { save } = LocalStorage();
        await save('user', JSON.stringify(user));
    }

    async getUser(): Promise<UserAuth> {
        const { getItem } = LocalStorage();
        const data = await getItem('user');
        const user: UserAuth = JSON.parse(data as any);
        return user;
    }

    async remove(): Promise<void> {
        const { remove } = LocalStorage();
        await remove('user');
    }
}