import Link from 'next/link'
import Layout from '../common/Layout'
import ThumbnailList from './ThumbnailList'

const HomeComponent: React.FC = () => (
  <Layout title="ホーム">
    <main>
      <h1>
        Fu-Cloud
      </h1>
      <Link href="/edit">
        <a>画像をアップする</a>
      </Link>
      <ThumbnailList />
    </main>
  </Layout>
)

export default HomeComponent