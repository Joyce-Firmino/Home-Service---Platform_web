import React, { useContext } from "react";

import { Navigate } from "react-router";

import { AuthContext, AuthProvider } from "../context/authContext";
import { useCookies } from "react-cookie";
import { PrestadorProvider } from "../context/prestadorConntext";

interface Iprops {
  children: React.ReactNode;
}

export function PrivateRoutes({ children }: Iprops) {
  const { authData } = useContext(AuthContext);
  const [cookies] = useCookies(["authToken"]);


    console.log(authData?.token + 'token privateroutes');


    return (
        authData?.token ?
            <AuthProvider>
                <PrestadorProvider>
                    {children}
                </PrestadorProvider>
            </AuthProvider>
            :
            <Navigate to="/login"></Navigate>
    )
}