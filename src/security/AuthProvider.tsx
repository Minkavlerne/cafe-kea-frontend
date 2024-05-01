import { createContext, useState, ReactNode } from "react";
import authProvider, { User } from "../services/authFacade";
import { useContext } from "react";
import { LoginReponse, LoginRequest } from "../services/authFacade";

interface AuthContextType {
    email: string | null;
    signIn: (email: User) => Promise<LoginReponse>;
    signOut: () => void;
    isLoggedIn: () => boolean;
    isLoggedInAs: (role: string[]) => boolean;
}

const AuthContext = createContext<AuthContextType>(null!);

export default function AuthProvider({ children }: { children: ReactNode }) {
    const intialEmail = localStorage.getItem("email") || null;
    const [email, setEmail] = useState<string | null>(intialEmail);
    const signIn = async (user_: LoginRequest) => {
        return authProvider.signIn(user_).then((user) => {
            setEmail(user.email);
            localStorage.setItem("email", user.email);
            localStorage.setItem("role", JSON.stringify(user.roles));
            localStorage.setItem("token", user.token);
            return user;
        });
    };

    const signOut = () => {
        setEmail(null);
        localStorage.removeItem("email");
        localStorage.removeItem("role");
        localStorage.removeItem("token");
    };

    function isLoggedIn() {
        return email !== null;
    }

    function isLoggedInAs(role: string[]) {
        const roles: Array<string> = JSON.parse(localStorage.getItem("roles") || "[]");
        return roles?.some((r) => role.includes(r)) || false;
    }

    const value = { email, signIn, signOut, isLoggedIn, isLoggedInAs };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}
