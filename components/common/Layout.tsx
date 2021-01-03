import Head from 'next/head'

type Props = {
  title: string
}

const Layout: React.FC<Props> = ({ title, children }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    { children }
    <footer>
      <small>&copy; 2020 fu-cloud</small>
    </footer>
  </div>
)

export default Layout