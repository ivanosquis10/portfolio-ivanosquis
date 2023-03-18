import Header from '../components/header'
import Hero from '../components/hero'
import Projects from '../components/proyects'
import AboutMe from '../components/aboutMe'
import Contact from '../components/contact'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Projects />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
