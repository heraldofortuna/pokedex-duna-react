import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');

  :root {
    --white: #FFFFFF;
    --black: #303943;
    --gray: #B3B6BA;
    --light-gray: #D9DFE9;
    --blue: #98A2E6;
    --pink: #F5A5C2;
  }

  * {
    color: var(--black);
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: var(--light-gray);
  }
`;

export default GlobalStyle;
