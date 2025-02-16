import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: inherit;
}

body,input,textarea,select {
 font-family: "Roboto", sans-serif;
 font-size: 1rem;
 font-weigth:400;
}
`;