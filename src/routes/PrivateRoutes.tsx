import React, { useContext } from "react";

import { Navigate } from "react-router";

import { AuthContext } from "../context/authContext";
import { useCookies } from "react-cookie";

interface Iprops {
  children: React.ReactNode;
}

export function PrivateRoutes({ children }: Iprops) {
  const { authData } = useContext(AuthContext);
  const [cookies] = useCookies(["authToken"]);

  console.log(authData?.token + "token privateroutes");

  return cookies.authToken ? (
    <>{children}</>
  ) : (
    <Navigate to="/login"></Navigate>
  );
}
