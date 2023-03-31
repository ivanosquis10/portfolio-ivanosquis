import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [menu, setMenu] = useState(false)
  const handleMobileMenu = () => setMenu(!menu)

  return (
    <header className="relative w-full" name="header" id="header">
      <nav className="fixed top-0 left-0 z-20 w-full px-6 transition-all duration-100 lg:px-12 py-3 shadow backdrop-blur bg-slate-800/20">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-10">
          <div className="relative h-12 flex flex-col items-center xs:flex-row justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-slate-800/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleMobileMenu}
              >
                <svg
                  className="block h-6 w-6"
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* menu large */}
            <div className="lg:w-full flex items-center justify-between">
              {/* logo */}
              <div className="flex flex-shrink-0 items-center sm:items-stretch cursor-pointer">
                <a href="#header">
                  <Image
                    width={50}
                    height={50}
                    src="./logo-iv-3.svg"
                    alt="logo de mi portafolio"
                    priority={true}
                  />
                </a>
              </div>

              {/* links */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center space-x-4 text-lg">
                  <a
                    className="text-white py-1 px-2 rounded-md font-bold hover:cursor-pointer hover:text-green-500 hover:shadow ease-in-out duration-300"
                    aria-current="page"
                    href="#header"
                  >
                    Home
                  </a>

                  <a
                    className="text-white py-1 px-2 rounded-md font-bold hover:cursor-pointer hover:text-green-500 hover:shadow ease-in-out duration-300"
                    href="#aboutme"
                  >
                    Sobre mí
                  </a>

                  <a
                    className="text-white py-1 px-2 rounded-md font-bold hover:cursor-pointer hover:text-green-500 hover:shadow ease-in-out duration-300"
                    href="#proyectos"
                  >
                    Proyectos
                  </a>

                  <a
                    className="text-white py-1 px-2 rounded-md font-bold hover:cursor-pointer hover:text-green-500 hover:shadow ease-in-out duration-300"
                    href="#contacto"
                  >
                    Contacto
                  </a>
                </div>
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
            <a
              className="block text-white py-1 px-2 hover:bg-slate-800 rounded-md font-bold hover:cursor-pointer hover:text-green-500 ease-in-out duration-300 border-b border-green-700"
              aria-current="page"
              href="#header"
            >
              Home
            </a>

            <a
              className="block text-white py-1 px-2 hover:bg-slate-800 rounded-md font-bold hover:cursor-pointer hover:text-green-500 ease-in-out duration-300 border-b border-green-700"
              href="#proyectos"
            >
              Proyectos
            </a>

            <a
              className="block text-white py-1 px-2 hover:bg-slate-800 rounded-md font-bold hover:cursor-pointer hover:text-green-500 ease-in-out duration-300 border-b border-green-700"
              href="#aboutme"
            >
              Sobre mí
            </a>

            <a
              className="block text-white py-1 px-2 hover:bg-slate-800 rounded-md font-bold hover:cursor-pointer hover:text-green-500 ease-in-out duration-300 border-b border-green-700"
              href="#contacto"
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
