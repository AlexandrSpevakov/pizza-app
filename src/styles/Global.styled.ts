import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  list-style: none;
  outline: none;
  font-family: 'Nunito', Roboto, system-ui, Tahoma, sans-serif;
  box-sizing: border-box;
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.colors.third};
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: all ${({ theme }) => theme.duration} ease-in-out;
  }

  a,
  span,
  p,
  b,
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${({ theme }) => theme.colors.third};
  }

  h1 {
    font-size: 48px;
  }

  h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 30px;
  }

  a {
    text-decoration: none;
  }
`;

export default Global;
