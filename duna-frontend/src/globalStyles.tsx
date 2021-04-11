import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --black: #303943;
    --gray: #B3B6BA;
    --light-gray: #D9DFE9;
    --blue: #98A2E6;
    --light-blue: #6ED3D3;
    --green: #48D0B0;
    --light-green: #48D065;
    --red: #D7782E;
    --light-red: #FB6C6C;
    --pink: #F5A5C2;
    --yellow: #DBD759;
    --light-yellow: #FFD86F;
    --purple: #7F668C;
    --light-purple: #9E74C3;
    --brown: #9B7B61;
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
    text-transform: capitalize;
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
  }

  h3 {
    font-size: 16px;
  }

  h4 {
    font-size: 14px;
    letter-spacing: 2px;
  }
`;

export default GlobalStyle;
