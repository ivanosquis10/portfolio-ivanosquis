import { Seo, Header, Hero, Proyects, AboutMe, Contact, Footer } from '../components'

export default function Home () {
  return (
    <>
    <Seo />
    <div className='text-white overflow-x-hidden'>
      <Header />
      <main>
        <Hero />
        <Proyects />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </div>
    </>
  )
}
