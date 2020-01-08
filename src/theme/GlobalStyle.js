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
    width: 100vw;
    height: 100vh;
    font-family: 'Ubuntu', sans-serif;
    background-image: linear-gradient(to right top, #3051b6, #415bc7, #5166d8, #6170e9, #717bfb);
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export default GlobalStyle;
