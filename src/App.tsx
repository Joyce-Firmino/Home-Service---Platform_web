import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "././global";
import { defaultTheme } from "./styles/theme";
import { Router } from "./Router";

import { CookiesProvider } from "react-cookie";
import { PrestadorProvider } from "./context/prestadorConntext.tsx";

import { AuthProvider } from "./context/authContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CookiesProvider>
        <AuthProvider>
          <PrestadorProvider>
            <BrowserRouter>
              <GlobalStyle />
              <Router />
            </BrowserRouter>
          </PrestadorProvider>
        </AuthProvider>
      </CookiesProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
