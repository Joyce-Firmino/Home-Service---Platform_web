import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../src/context/authContext';

import { Home } from './pages/Home';
import { Anuncio } from './pages/Anuncio';
import { Cadastro } from './pages/Cadastro';
import { Category } from './pages/Category';
import { EncontrarPrestador } from './pages/EncontrarPrestadores';
import { Login } from './pages/Login';
import { CriarAnuncio } from './pages/CriarAnuncio';
import { Profile } from './pages/Profile';

export function Router() {
    const { authData } = useContext(AuthContext);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastrar" element={<Cadastro />} />
            <Route path="/categoria" element={<Category category='' />} />
            <Route path="/encontrarPrestador" element={<EncontrarPrestador />} />
            <Route path="/login" element={<Login />} />
            <Route path="/homePrestador" element={<Anuncio />} />
            <Route path="/criarAnuncio" element={<CriarAnuncio />} />
            <Route path="/perfilPrestador" element={<Profile />} />
        </Routes>

    );
}
