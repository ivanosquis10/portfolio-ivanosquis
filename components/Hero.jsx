import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

export function Hero () {
  return (
    <section className="w-full mt-28 md:mt-0 md:py-2 md:h-screen flex gradient-dos
    ">
      <div className='grid place-content-center container mx-auto px-7 md:px-12'>
      {/* <div className='mx-auto container px-12 pt-36 md:pt-48 pb-24 border'> */}
        <div className='flex flex-col items-center md:flex-row-reverse md:justify-between relative'>
          <div className="hidden md:w-3/12 h-full md:block">
            <Image
              width={260}
              height={320}
              className='h-full w-full object-cover object-center'
              priority
              src="/avatar.svg"
              alt="Avatar image"
            />
          </div>

          <div className=' w-full md:w-9/12 h-full text-start mt-5'>
            <span className='text-white rounded font-bold tracking-tighter text-sm md:text-xl'>Hola! Soy</span>
            <h1 className="text-white font-bold text-5xl md:text-6xl tracking-tighter mt-1 mb-2">
              Iván Rodríguez
            </h1>

            <p className="bg-green-500 px-1 md:w-fit rounded text-lg lg:text-3xl font-black md:tracking-widest text-slate-900 mb-3 leading-relaxed text-center md:text-start">
              React Frontend Developer
            </p>
            <div>

            <p className="text-start w-full my-5 text-base lg:text-lg leading-relaxed text-white md:tracking-wider font-light">
                Desarrollador web apasionado por la creación de sitios y aplicaciones web que brinden una experiencia única al usuario.<br/>
                Proactivo, con ganas
                de aprender, mejorar cada día y superarme.
              </p>
            </div>

            <div className="flex items-start space-x-3 pb-10 md:pb-0">
              <a href='#proyectos' className="flex rounded-t items-center py-1 px-4 capitalize gap-1 text-white font-bold transition-all text-lg duration-300 hover:bg-green-500/80 hover:text-slate-900 border-b ">
                <FaArrowRight size={18} />
                proyectos
              </a>

              <a href='#proyectos' className="flex rounded-t items-center py-1 px-4 capitalize gap-1 text-white font-bold transition-all text-lg duration-300 hover:bg-green-500/80 hover:text-slate-900 border-b ">
                <FaArrowRight size={18} />
                Contacto
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
