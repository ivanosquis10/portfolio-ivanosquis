import Layout from '../components/layout'
import Header from '../components/header'
// import AboutMe from './components/AboutMe'
// import Skills from './components/Skills'
import Projects from '../components/proyects'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Hero from '../components/hero'

export default function Home() {
  return (
    <div className="container mx-auto text-white overflow-x-hidden">
      <main>
        <Projects />
        {/*
          <Hero />
          <Projects />
          <Contact />
          */}
      </main>
    </div>
  )
}
