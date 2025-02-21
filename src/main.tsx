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
import { Cadastro } from './pages/Cadastro/index.tsx'
import { EncontrarPrestador } from './pages/EncontrarPrestadores/index.tsx'
import { PrivateRoutes } from "./styles/routes/PrivateRoutes.tsx";
import { Teste } from "./pages/Teste/index.tsx";
import { Anuncio } from "./pages/Anuncio/index.tsx";
import { CookiesProvider } from "react-cookie";
// import { AuthProvider } from './context/authContext.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: `/anuncioCategoria/`,
    element: <Anuncio />,
  },
  {
    path: "/teste",
    element: <PrivateRoutes> <EncontrarPrestador /> </PrivateRoutes>
  },
  {
    path: "/category",
    element: <PrivateRoutes><Category category='remover depois' /></PrivateRoutes>
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CookiesProvider>
      <AuthProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      </AuthProvider>
    </CookiesProvider>

  </StrictMode>
);
