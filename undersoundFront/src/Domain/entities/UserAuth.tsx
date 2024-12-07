import { Rol } from "./Rol";

export interface UserAuth {
    id?:              number;
    name:             string;
    email:            string;
    phone:            string;
    city:             string;
    image?:           string;
    password?:        string;
    confirmPassword?: string;
    instagram?:       string;
    token?:           string;
    loginCount:       number,
    roles?:           Rol[];
}