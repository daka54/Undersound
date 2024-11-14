import { Rol } from "./Rol";

export interface UserAuth {
    id?:              number;
    name:            string;
    email:           string;
    phone:           string;
    city:            string;
    image?:          string;
    password?:        string;
    confirmPassword?: string;
    token?:           string;
    roles?:         Rol[];
}