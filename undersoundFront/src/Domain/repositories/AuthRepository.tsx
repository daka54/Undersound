import { ResponseAPIUndersound } from "../../Data/sources/remote/models/responseApiundersound";
import { UserAuth } from "../entities/UserAuth";

export interface AuthRepository {

    register( user: UserAuth): Promise<ResponseAPIUndersound>
    
}