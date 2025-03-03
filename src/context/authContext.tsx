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
    authData?: AuthDataDTO;
    signIn: (email: string, senha: string) => Promise<AuthDataDTO | undefined>;
    logOut: () => Promise<void>;
    error: boolean;
    setError: React.Dispatch<React.SetStateAction<boolean>>;
    // setAuthData: React.Dispatch<React.SetStateAction<AuthData | undefined>>
}

export function AuthProvider({ children }: IpropsDTO) {
    const [authData, setAuthData] = useState<AuthDataDTO>();
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

            setCookieToken("token", userAutenticated.token, { httpOnly: true });
            setCookieEmail("email", userAutenticated.email, { httpOnly: true });

            setAuthData(authData);

            setError(false);
        }
        catch (error: any) {
            alert('Erro err');
            setError(true)
            return undefined;
        }
    }

    async function logOut(): Promise<void> {
        setAuthData(undefined);
        removeCookieToken('token');
        removeCookieEmail('email');
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
    }, []);



    return (
        <AuthContext.Provider value={{ signIn, logOut, error, setError, authData }}>
            {children}
        </AuthContext.Provider>
    )

}