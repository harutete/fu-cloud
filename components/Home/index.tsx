import Layout from '../common/Layout'
import ThumbnailList from './ThumbnailList'

const HomeComponent: React.FC = () => (
  <Layout title="ホーム">
    <main>
      <h1>
        Fu-Cloud
      </h1>
      <ThumbnailList />
    </main>
  </Layout>
)

export default HomeComponent