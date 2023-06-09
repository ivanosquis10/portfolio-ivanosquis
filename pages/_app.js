import Head from 'next/head'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ivanosquis - Portfolio</title>
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
