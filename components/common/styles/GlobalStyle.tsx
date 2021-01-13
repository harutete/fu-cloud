import { Global, css } from '@emotion/react'
import { theme } from './theme'

const globalStyle = `
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {
    font-size: 62.5%;
  }
  body {
    font-size: 1.4rem;
    color: ${theme.textColor}
  }
`

const GlobalStyle: React.FC = () => (
  <Global
    styles={css`${globalStyle}`}
  />
)

export default GlobalStyle
