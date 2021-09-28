import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #1db954;
    --color-primary-lighter: #1ed760;

    --color-secondary: #2e77d0;

    --color-neutral-01: #000000;
    --color-neutral-02: #121212;
    --color-neutral-03: #181818;
    --color-neutral-04: #282828;
    --color-neutral-05: #333333;
    --color-neutral-06: #535353;
    --color-neutral-07: #b3b3b3;
    --color-neutral-08: #ffffff;

    --border-radius: 50rem;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  html {
    font-size: 62.5%;
  }

  body {
    color: var(--color-neutral-07);
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    background-color: var(--color-neutral-06);
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    text-decoration: none;
    display: inline-block;
  }

  svg {
    display: block;
  }
`;

export default GlobalStyle;
