import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
  --white: #fff;
  --border: #eaeaea;
  
  --gray-100: #e1e1e6;
  --gray-300: #c4c4cc;
  --gray-400: #8d8d99;
  --gray-600: #323238;
  --gray-700: #29292e;
  --gray-800: #202024;
  --gray-900: #121214;

  --green-300: #00B37E;
  --green-500: #00875f;

  --red-500: #F75A68;

  --primary: #f3938c;
  --secondary: #FFCBCB;

  }

  :focus {
    outline: transparent;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--white);
    color: var(--gray-800);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  .wrapperHome {
    max-width: 78.125rem;
    margin: 2rem auto;
    padding: 0 1rem;

    display: grid;
    grid-template-columns: 1fr 256px;
    gap: 2rem;
    align-items: flex-start;
  }

  .wrapper {
    max-width: 78.125rem;
    margin: 2rem auto;
    padding: 0 1rem;

    display: grid;
    gap: 2rem;
    align-items: flex-start;
  }
`;
