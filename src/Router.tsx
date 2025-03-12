import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../src/context/authContext";

import { Home } from "./pages/Home";
import { Anuncio } from "./pages/Anuncio";
import { Cadastro } from "./pages/Cadastro";
import { Category } from "./pages/Category";
import { EncontrarPrestador } from "./pages/EncontrarPrestadores";
import { Login } from "./pages/Login";
import { CriarAnuncio } from "./pages/CriarAnuncio";
import { Profile } from "./pages/Profile";

export function Router() {
  const { authData } = useContext(AuthContext);

  return (
    <Routes>
      {!authData ? (
        <Route path="/" >
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/anunciosCategoria/:categoria/:id" element={<Category />} />
          <Route path="/prestadores" element={<EncontrarPrestador />} />
          <Route path="/login" element={<Login />} />
        </Route>
      ) : (
        <Route>
          <Route path="/" element={<Anuncio />} />
          <Route path="/criarAnuncio" element={<CriarAnuncio />} />
          <Route path="/perfil" element={<Profile />} />
        </Route>
      )}
    </Routes>
  );
}