import Header from '../components/header'
// import Skills from './components/Skills'
import Projects from '../components/proyects'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Hero from '../components/hero'
import AboutMe from '../components/aboutMe'

export default function Home() {
  return (
    <div className="text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Projects />
        <AboutMe />
      </main>
    </div>
  )
}
