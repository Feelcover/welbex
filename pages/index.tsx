import Main from '@/components/Main/Main'
import Layout from '@/Layout/Layout'
import Redlight from '@/components/Redlight/Redlight'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welbex</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/ico"
          sizes="32x32"
          href="/images/favicon.ico"
        />
      </Head>
      <Redlight/>
     <Layout>
      <Main/>
     </Layout>
    </>
  )
}
