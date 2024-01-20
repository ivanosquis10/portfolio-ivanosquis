import "./globals.css"

import { Footer, Header } from "@/components"
import { inter } from "@/fonts"

export const metadata = {
  title: "Ivanosquis | Portfolio",
  description:
    "Welcome to my programming portfolio, where you can find projects developed in React, Vite.js, NextJS, Tailwind CSS and other technologies, check out my work and contact me to collaborate in your next project!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative h-full overflow-x-hidden bg-zinc-900`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
