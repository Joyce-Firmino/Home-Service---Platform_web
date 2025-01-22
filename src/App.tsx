import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./global";
import {defaultTheme} from './styles/theme';
import { Login } from "./pages/Login";
function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      {/* <Home /> */}
      <Login />
    </ThemeProvider>
  )
}

export default App;




// import { Home } from "./pages/index";


// function App() {

//   return (
//     <Home />
//   )
// }

// export default App
