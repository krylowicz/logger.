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
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: 'Ubuntu', sans-serif;

  }
`;

export default GlobalStyle;
