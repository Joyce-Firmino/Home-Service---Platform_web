import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./pages/Home/index.tsx";
import { Login } from "./pages/Login/index.tsx";
import { Category } from "./pages/Category/index.tsx";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme.ts";
import { GlobalStyle } from "./global.ts";
import { AuthProvider } from "./context/authContext.tsx";
import { EncontrarPrestador } from "./pages/EncontrarPrestadores/index.tsx";
import { PrivateRoutes } from "./routes/PrivateRoutes.tsx";
import { Teste } from "./pages/Teste/index.tsx";
import { Anuncio } from "./pages/Anuncio/index.tsx";
import { Cadastro } from "./pages/Cadastro/index.tsx";
import { Profile } from "./pages/Profile/index.tsx";
import { CookiesProvider } from "react-cookie";
import { CriarAnuncio } from "./pages/CriarAnuncio/index.tsx";
import { EditarAnuncio } from "./pages/EditarAnuncio/index.tsx";
// import { AuthProvider } from './context/authContext.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoutes>
        <Home />
      </PrivateRoutes>
    ),
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
    element: (
      <PrivateRoutes>
        {" "}
        <Home />{" "}
      </PrivateRoutes>
    ),
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/perfil",
    element: (
      <PrivateRoutes>
        {" "}
        <Profile />{" "}
      </PrivateRoutes>
    ),
  },
  {
    path: "/category",
    element: (
      <PrivateRoutes>
        <Category category="remover depois" />
      </PrivateRoutes>
    ),
  },
  {
    path: "/criarAnuncio",
    element: <CriarAnuncio />,
  },
  {
    path: "/anuncios",
    element: <Anuncio />,
  },
  {
    path: "/editarAnuncio",
    element: <EditarAnuncio />,
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
