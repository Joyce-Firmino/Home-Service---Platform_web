import React, { useContext } from "react";

import { Navigate } from "react-router";

import { AuthContext } from "../context/authContext";

interface Iprops {
    children: React.ReactNode;
}

export function PrivateRoutes({ children }: Iprops) {
    const { authData } = useContext(AuthContext);

    console.log(authData?.token + 'token privateroutes');
    

    return (
        authData?.token ? <>{children}</> : <Navigate to="/login"></Navigate>
    )
}