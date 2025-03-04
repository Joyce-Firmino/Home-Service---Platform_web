import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Home } from './pages/Home/index.tsx'
import { Login } from './pages/Login/index.tsx'
import { Category } from './pages/Category/index.tsx'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme.ts'
import { GlobalStyle } from './global.ts'
import { AuthProvider } from './context/authContext.tsx'
import { EncontrarPrestador } from './pages/EncontrarPrestadores/index.tsx'
import { PrivateRoutes } from './routes/PrivateRoutes.tsx'
import { Anuncio } from "./pages/Anuncio/index.tsx";
import { Cadastro } from "./pages/Cadastro/index.tsx";
import { Profile } from "./pages/Profile/index.tsx";
import { CookiesProvider } from "react-cookie";
import { PrestadorProvider } from "./context/prestadorConntext.tsx";
import { CriarAnuncio } from "./pages/CriarAnuncio/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: `/telaInicialPrestador`,
    element: <PrivateRoutes><Anuncio /></PrivateRoutes>
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/category",
    element: <PrivateRoutes><Category category='remover depois' /></PrivateRoutes>
  },
  {
    path: "/criarAnuncio",
    element: <PrivateRoutes><CriarAnuncio /></PrivateRoutes>
  },
  {
    path: "/prestadores",
    element: <EncontrarPrestador />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/perfil",
    element: <PrivateRoutes> <Profile /> </PrivateRoutes>
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CookiesProvider>
      <AuthProvider>
        <PrestadorProvider>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <RouterProvider router={router} />
          </ThemeProvider>
        </PrestadorProvider>
      </AuthProvider>
    </CookiesProvider>
  </StrictMode>
);

// remover cookiesprovider daqui
