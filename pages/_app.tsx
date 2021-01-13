import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../components/common/styles/theme'

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default MyApp
