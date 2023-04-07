import Head from 'next/head'
// import localFont from 'next/font/local'
// import { JetBrains_Mono } from 'next/font/google'
import '../styles/globals.css'

// const jetBrainsMono = JetBrains_Mono({
//   subsets: ['latin'],
//   weight: ['300', '500', '700', '800'],
//   variable: '--font-jetbrains',
// })
// const myFont = localFont({
//   src: [
//     {
//       path: '../fonts/JetBrainsMono-Light.woff',
//       weight: 300,
//       style: 'normal',
//     },
//     {
//       path: '../fonts/JetBrainsMono-Regular.woff',
//       weight: 400,
//       style: 'normal',
//     },
//     {
//       path: '../fonts/JetBrainsMono-Medium.woff',
//       weight: 500,
//       style: 'normal',
//     },
//     {
//       path: '../fonts/JetBrainsMono-Bold.woff',
//       weight: 700,
//       style: 'normal',
//     },
//     {
//       path: '../fonts/JetBrainsMono-ExtraBold.woff',
//       weight: 800,
//       style: 'normal',
//     },
//   ],
// })
// <div className={`${jetBrainsMono.variable} font-sans`}>

function MyApp({ Component, pageProps }) {
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
