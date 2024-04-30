import { API_URL } from "../settings";
import { makeOptions, handleHttpErrors } from "./fetchUtils";
const LOGIN_URL = API_URL + "api/auth/login";


export type User = { email: string, password: string; roles?: string[] };

interface LoginReponse {
    email: string;
    token: string;
    roles: string[];
}

interface LoginRequest {
    email: string;
    password: string;
}

const authProvider = {
    isAuthenticated: false,
    signIn(email_: LoginRequest): Promise<LoginReponse> {
        const opstions = makeOptions("POST", email_);
        return fetch(LOGIN_URL, opstions).then(handleHttpErrors);
    },
    }

export type { LoginReponse, LoginRequest}
export default authProvider;
