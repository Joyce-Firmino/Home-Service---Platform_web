import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Home } from './pages/Home/index.tsx'
import { Login } from './pages/Login/index.tsx'
import { Category } from './pages/Category/index.tsx'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme.ts'
import { GlobalStyle } from './global.ts'
import { AuthProvider } from './context/authContext.tsx'
import { EncontrarPrestador } from './pages/EncontrarPrestadores/index.tsx'
import { PrivateRoutes } from "./routes/PrivateRoutes.tsx";
import { Teste } from "./pages/Teste/index.tsx";
import { Anuncio } from "./pages/Anuncio/index.tsx";
import { Cadastro } from "./pages/Cadastro/index.tsx";
import { Profile } from "./pages/Profile/index.tsx";
// import { AuthProvider } from './context/authContext.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoutes><Home /></PrivateRoutes>
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/anuncio",
    element: <Anuncio />,
  },
  {
    path: "/teste",
    element: <PrivateRoutes> <Home /> </PrivateRoutes>
  },
  {
    path: "/cadastro",
    element:  <Cadastro />
  },
  {
    path: "/perfil",
    element:  <PrivateRoutes> <Profile /> </PrivateRoutes>
  },
  {
    path: "/category",
    element: <PrivateRoutes><Category category='remover depois' /></PrivateRoutes>
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);