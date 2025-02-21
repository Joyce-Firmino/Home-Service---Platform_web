import { Children, createContext, useState } from "react";
import { UsuarioLogin } from "../dto/usuarioLoginDTO";
import { api } from "../api/axios";
import { useCookies } from "react-cookie";

export const AuthContext = createContext<AuthContextDTO>({} as AuthContextDTO);

interface Iprops {
    children: React.ReactNode;
}

interface AuthData {
    token: string;
    email: string;
    papel: number;
}

interface AuthContextDTO {
    authData?: AuthData;
    signIn: (email: string, senha: string) => Promise<AuthData | undefined>;
    logOut: () => Promise<void>;
    error: boolean;
    setError: React.Dispatch<React.SetStateAction<boolean>>;
    setAuthData: React.Dispatch<React.SetStateAction<AuthData | undefined>>
}

export function AuthProvider({ children }: Iprops) {
    const [authData, setAuthData] = useState<AuthData>();
    const [error, setError] = useState(false);

    const [cookies, setCookie, removeCookie] = useCookies(["authToken"]);    

    async function signIn(email: string, senha: string): Promise<AuthData | undefined> {
        const usuario: UsuarioLogin = {
            email: email,
            senha: senha
        }
        try {
            const response = await api.post('/login', usuario);

            const data = response.data as AuthData;

            // Salvando no estado e no AsyncStorage
            setCookie("authToken", data.token, { httpOnly: true });
            setAuthData(data);
            setError(false)
            return data;
        }
        catch (error: any) {
            // Alert.alert('Erro 123', error.response?.data?.error || 'Erro');            
            setError(true)
            return undefined;
        }
    }

    async function logOut(): Promise<void> {
        setAuthData(undefined);
        removeCookie('authToken');
    }



    return (
        <AuthContext.Provider value={{ authData, signIn, logOut, error, setError, setAuthData}}>
            {children}
        </AuthContext.Provider>
    )

}