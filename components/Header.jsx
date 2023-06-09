import { useState } from 'react'
import Image from 'next/image'
import { FaListUl, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

const links = [
  {
    id: 1,
    title: 'Home',
    url: '#header'
  },
  {
    id: 2,
    title: 'Proyectos',
    url: '#proyectos'
  },
  {
    id: 3,
    title: 'Sobre mi',
    url: '#aboutme'
  },
  {
    id: 4,
    title: 'Contacto',
    url: '#contacto'
  }
]

export function Header () {
  const [menu, setMenu] = useState(false)
  const handleMobileMenu = () => setMenu(!menu)

  return (
    <header className="relative w-full" name="header" id="header">
      <nav className="fixed top-0 left-0 z-20 w-full px-6 transition-all duration-100 lg:px-12 py-3  backdrop-blur bg-slate-800/20">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-10">
          <div className="relative h-12 flex flex-col items-center xs:flex-row justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-slate-800/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                aria-label='boton para el men mobile'
                onClick={handleMobileMenu}
              >
                <FaListUl size={25} color="#ffffff" />
              </button>
            </div>

            {/* menu large */}
            <div className="lg:w-full flex items-center justify-between">
              {/* logo */}
              <div className="flex flex-grow flex-shrink-0 items-center sm:items-stretch">
                <a href="#header"
                  aria-label='logo del portafilio de Ivanosquis'
                  className='cursor-pointer'
                >
                  <Image
                    width={50}
                    height={50}
                    src="/logo-iv-3.svg"
                    alt='logo del portafilio de Ivanosquis'
                  />
                </a>
              </div>

              {/* links */}
              <div className="hidden flex-grow sm:ml-6 sm:block">
                <ul className="flex items-center text-lg justify-center">
                  {
                    links.map(link => (
                      <li key={link.id}>
                      <a
                        className="group text-white py-1 px-2 rounded-md font-thin hover:cursor-pointer hover:text-green-500 ease-in-out duration-300"
                        href={link.url}
                      >
                        <span className='opacity-0 group-hover:opacity-100'>{'<'}</span>
                        {link.title}
                        <span className='opacity-0 group-hover:opacity-100'>{'>'}</span>
                      </a>
                    </li>
                    ))
                  }
                </ul>
              </div>

              {/* {otra info} */}
              <div className='hidden md:flex lg:flex flex-grow justify-end items-center space-x-3'>
                <a
                  href="#"
                  className='rounded p-0.5 hover:scale-110'
                  aria-label='icono de redireccion a github'
                  title='Redirreción a Github'
                >
                  <FaGithub size={25} />
                </a>
                <a
                  href="#"
                  className='rounded p-0.5 hover:scale-110'
                  aria-label='icono de redireccion a twitter'
                  title='Redirreción a Twitter'
                >
                  <FaTwitter size={25} />
                </a>
                <a
                  href="#"
                  className='rounded p-0.5 hover:scale-110'
                  aria-label='icono de redireccion a twitter'
                  title='Redirreción a Twitter'
                >
                  <FaLinkedin size={25} />
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* menu mobile */}
        <div
          className={`${!menu ? 'hidden' : 'block'} h-screen sm:hidden`}
          id="mobile-menu"
        >
          <div className="space-y-4 px-2 pt-2 pb-3 text-center mt-8 text-2xl flex flex-col gap-8">
             {
                    links.map(link => (
                      <a
                        key={link.id}
                        className="group text-white py-1 px-2 font-bold hover:cursor-pointer hover:text-green-500 ease-in-out duration-300 bg-slate-500/40 rounded"
                        href={link.url}
                      >
                        <span className='opacity-0 group-hover:opacity-100'>{'<'}</span>
                        {link.title}
                        <span className='opacity-0 group-hover:opacity-100'>{'>'}</span>
                      </a>
                    ))
                  }
          </div>
        </div>
      </nav>
    </header>
  )
}
