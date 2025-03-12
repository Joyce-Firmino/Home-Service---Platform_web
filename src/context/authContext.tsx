import { createContext, useEffect, useState } from "react";
import { UsuarioLoginDTO } from "../dto/usuarioLoginDTO";
import { api } from "../api/axios";
import { useCookies } from "react-cookie";
import { IpropsDTO } from "../dto/IpropsDTO";

export const AuthContext = createContext<AuthContextDTO>({} as AuthContextDTO);

interface AuthDataDTO {
    token: string;
    email: string;
}

interface AuthContextDTO {
    authData?: AuthDataDTO | null;
    signIn: (email: string, senha: string) => Promise<AuthDataDTO | undefined>;
    logOut: () => void;
    error: boolean;
    setError: React.Dispatch<React.SetStateAction<boolean>>;
    setAuthData: React.Dispatch<React.SetStateAction<AuthDataDTO | null>>
}

export function AuthProvider({ children }: IpropsDTO) {
    const [authData, setAuthData] = useState<AuthDataDTO | null>(null);
    const [error, setError] = useState(false);

    const [cookieToken, setCookieToken, removeCookieToken] = useCookies(["token"]);
    const [cookieEmail, setCookieEmail, removeCookieEmail] = useCookies(["email"]);


    async function signIn(email: string, senha: string): Promise<AuthDataDTO | undefined> {
        const usuario: UsuarioLoginDTO = {
            email: email,
            senha: senha
        }
        try {
            const response = await api.post('/login', usuario);

            const userAutenticated = response.data as AuthDataDTO;

            api.defaults.headers.common.Authorization= `Bearer ${userAutenticated.token}`;
            api.defaults.headers.common["Email"] = userAutenticated.email;
          
            setCookieToken("token", userAutenticated.token);
            setCookieEmail("email", userAutenticated.email);

            setAuthData(userAutenticated);

            setError(false);
        }
        catch (error: any) {
            setError(true)
            return error;
        }
    }

    function logOut() {
        setAuthData(null);
        removeCookieToken("token");
        removeCookieEmail("email");
    }

    useEffect(() => {
        if (cookieToken.token && cookieEmail.email) {
            const authData: AuthDataDTO = {
                token: cookieToken.token,
                email: cookieEmail.email
            }
            api.defaults.headers.common.Authorization= `Bearer ${cookieToken.token}`;
            api.defaults.headers.common["Email"] = cookieEmail.email;

            setAuthData(authData);
        }
    }, [cookieToken, cookieEmail]);



    return (
        <AuthContext.Provider value={{ signIn, logOut, error, setError, authData, setAuthData }}>
            {children}
        </AuthContext.Provider>
    )

}