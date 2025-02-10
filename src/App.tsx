import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./global";
import {defaultTheme} from './styles/theme';
import { Login } from "./pages/Login";
import { Category } from "./pages/Category";
import { Cadastro } from "./pages/Cadastro";
function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Home />
      {/* <Login /> */}
      {/* <Category category="Programador"/> */}
      {/* <Home /> */}
      {/* <EncontrarPrestador/> */}
      <Cadastro/>
    </ThemeProvider>
  )
}

export default App;