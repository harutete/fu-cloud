import Link from 'next/link'
import Layout from '../common/Layout'

const uploadImage = () => {
  console.log('hoge')
}
const previewImage = (event: Event) => {
  const targetElement = event.currentTarget as HTMLInputElement
  console.log(targetElement.files)
}
const HomeComponent: React.FC = () => (
  <Layout title="画像をアップロードする">
    <main>
      <h1>
        Upload
      </h1>
      <Link href="/">
        <a>戻る</a>
      </Link>
      <input type="file" accept="image/*" capture="camera" onChange={previewImage} />
      <button type="submit" onClick={uploadImage}>アップロード</button>
    </main>
  </Layout>
)

export default HomeComponent