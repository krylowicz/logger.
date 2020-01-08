import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Ubuntu:300,400,500&display=swap');

  *,*::before,*::after {
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: 'Ubuntu', sans-serif;
  }
`;

export default GlobalStyle;
