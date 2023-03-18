import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="min-h-full h-screen grid place-content-center gradient">
      <div className="max-w-full px-5 flex flex-col items-center text-center">
        <div className="flex flex-col lg:items-center">
          <div>
            <p className="mt-3 mb-3 text-2xl lg:text-3xl font-thin tracking-tight text-white">
              Bienvenido, soy
            </p>
            <h1 className="text-green-500 font-bold text-5xl lg:text-7xl tracking-tight mb-1">
              Iván Rodríguez
            </h1>
          </div>

          <p className="text-2xl lg:text-3xl font-black lg:tracking-tighter text-slate-100 mb-3">
            Frontend Developer React
          </p>
          <div>
            <p className="lg:text-center w-full lg:w-8/12 mx-auto mt-2 mb-5 text-base lg:text-lg leading-relaxed text-slate-200 md:tracking-tight">
              Tengo 22 años de edad y soy una persona muy proactiva, con ganas
              de aprender y mejorar cada día más.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            className="w-full text-xl p-1 rounded-md  font-bold text-slate-200 text-center ease-in-out duration-300 hover:cursor-pointer hover:bg-slate-800/50 hover:text-green-500 bg-slate-900 rounded-md px-2 py-1 cursor-pointer"
            href="#proyectos"
          >
            Proyectos
          </a>

          <a
            className="w-full text-xl p-1 rounded-md font-bold text-slate-200 text-center ease-in-out duration-300 hover:cursor-pointer hover:bg-slate-800/50 hover:text-green-500 bg-slate-900 rounded-md px-2 py-1 cursor-pointer"
            href="#contacto"
          >
            Contáctame
          </a>
          <a
            className="w-full p-1 bg-slate-900 rounded-md  ease-in-out duration-300 hover:cursor-pointer hover:bg-slate-800/50"
            href="https://github.com/ivanosquis10"
            target="_blank"
          >
            <FaGithub size={25} color="#e2e8f0" />
          </a>
        </div>
      </div>
    </section>
  )
}

/*
   <div className="flex items-center gap-2">
          <a
            className="w-full text-xl bg-green-600/80 p-1 rounded-md shadow shadow-green-900 font-bold text-slate-200 text-center ease-in-out duration-300 hover:cursor-pointer hover:bg-slate-800/50 hover:text-green-500"
            href="#proyectos"
          >
            Proyectos
          </a>

          <a
            className="w-full text-xl bg-green-600/80 p-1 rounded-md shadow shadow-green-900 font-bold text-slate-200 text-center ease-in-out duration-300 hover:cursor-pointer hover:bg-slate-800/50 hover:text-green-500"
            href="#contacto"
          >
            Contáctame
          </a>
          <a
            className="w-full p-1 rounded-md shadow shadow-green-900 ease-in-out duration-300 hover:cursor-pointer hover:bg-slate-800/50"
            href="https://github.com/ivanosquis10"
            target="_blank"
          >
            <Image
              width={30}
              height={30}
              className="bg-cover"
              src="/github.svg"
              alt="logo github"
            />
          </a>
        </div>

*/
