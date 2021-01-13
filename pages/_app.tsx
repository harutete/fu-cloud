import { ThemeProvider } from '@emotion/react'
import GlobalStyle from '../components/common/styles/GlobalStyle'
import { theme } from '../components/common/styles/theme'

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default MyApp
