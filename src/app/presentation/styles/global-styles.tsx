import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #0e0e29;
  --light: #f7f7f7;
}
  /* Reset de estilos */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Estilização base */
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: var(--background);
    color: var(--light);
  }

  /* Remover estilos padrão de listas */
  ul, ol {
    list-style: none;
  }

  /* Remover estilos padrão de links */
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  /* Estilização de inputs */
  input,
  textarea,
  button {
    font-family: inherit;
    font-size: inherit;
  }
`
