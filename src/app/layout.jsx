import './globals.css'
import { Inter } from 'next/font/google'
import { Footer, Header } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ivanosquis | Portfolio',
  description: 'Welcome to my programming portfolio, where you can find projects developed in React, Vite.js, NextJS, Tailwind CSS and other technologies, check out my work and contact me to collaborate in your next project!'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 h-full overflow-x-hidden relative`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
