import { Children, createContext } from "react";

export const AuthContext = createContext('');

export function AuthProvider({ children }) {

    return (
        <AuthContext.Provider value={sigIn, logOut}>
            {children}
        </AuthContext.Provider>
    )

}

