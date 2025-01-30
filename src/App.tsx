import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./global";
import {defaultTheme} from './styles/theme';
import { Login } from "./pages/Login";
import { Category } from "./pages/Category";
function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      {/* <Home /> */}
      {/* <Login /> */}
      <Category/>
    </ThemeProvider>
  )
}

export default App;