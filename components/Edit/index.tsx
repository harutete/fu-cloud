import Link from 'next/link'
import Layout from '../common/Layout'
import { useState } from 'react'

const HomeComponent: React.FC = () => {
  const uploadImage = () => {
    console.log('upload')
  }

  const previewImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetElement = event.currentTarget as HTMLInputElement
    const targetFiles = targetElement.files[0]
    const fileReader = new FileReader()

    fileReader.addEventListener('load', () => {
      setPreviewImagePath(fileReader.result.toString())
    })

    fileReader.readAsDataURL(targetFiles)
  }

  const [previewImagePath, setPreviewImagePath] = useState('')
    return (
    <Layout title="画像をアップロードする">
      <main>
        <h1>
          Upload
        </h1>
        <Link href="/">
          <a>戻る</a>
        </Link>
        <input type="file" accept="image/*" capture="camera" onChange={previewImage} />
        <div>
          <img src={previewImagePath} alt="" />
        </div>
        <button type="submit" onClick={uploadImage}>アップロード</button>
      </main>
    </Layout>
  )
}

export default HomeComponent