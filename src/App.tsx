import { ThemeProvider } from "styled-components";
import { Home } from "./pages";
import { GlobalStyle } from "./global";
import {defaultTheme} from './styles/theme';
function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Home />
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
