import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-500']};
  }

  body {
    background: ${(props) => props.theme['ocean-blue-900']};
    color: ${(props) => props.theme['ocean-blue-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
  }

  @media (max-width: 992px) {
    html {
      font-size: 90%;
    }
  }
  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`
