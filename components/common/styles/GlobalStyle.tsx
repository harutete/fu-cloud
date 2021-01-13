import { Global, css } from '@emotion/react'

const globalStyle = `
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

const GlobalStyle: React.FC = () => (
  <Global
    styles={css`${globalStyle}`}
  />
)

export default GlobalStyle
