import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --black: #303943;
    --gray: #B3B6BA;
    --light-gray: #D9DFE9;
    --blue: #98A2E6;
    --green: #48D0B0;
    --red: #FB6C6C;
    --pink: #F5A5C2;
  }

  * {
    color: var(--black);
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    text-decoration: none;
    padding: 0;
    margin: 0;
    
  }

  body {
    background-color: var(--light-gray);
  }

  h1 {
    font-weight: 700;
  }

  h2 {
    font-weight: 700;
    text-transform: capitalize;
  }

  h3 {
    font-size: 16px;
  }
`;

export default GlobalStyle;
