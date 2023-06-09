import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export function ProyectCard ({
  titulo,
  stack,
  github,
  demo,
  image,
  descripcion
}) {
  return (
    <div className='flex flex-col justify-between max-w-sm mx-auto rounded-lg bg-slate-900 ease-in-out duration-300 p-1 border border-slate-500/30 relative '>
      <Image
        src={image}
        alt={`Imagen del proyecto ${titulo}`}
        width={150}
        height={100}
        className='group-hover:blur-sm w-full object-cover rounded-md'
        unoptimized
      />

      { /* TODO: Terminar feature
        <a href="">
        <FaExternalLinkAlt size={55} className='group-hover:opacity-100 opacity-0 absolute right-40 top-20  hover:scale-110 hover:bg-slate-800/90 duration-400 transition-colors  bg-slate-800 rounded-md px-2 py-2'
        />
        </a>
        */
      }

      <div className=' bg-slate-900 mx-4 rounded-lg flex items-center gap-2 -mt-4 z-10 py-2 px-6 border border-slate-500/50'>
        <h3 className='text-white text-base md:text-lg lg:text-xl font-black uppercase'>
          {titulo}
        </h3>
      </div>
      <div className='px-6 py-4 flex flex-col gap-2'>
        <p className='text-white tracking-tighter'>{descripcion}</p>
        <div className='w-full grid grid-cols-2 lg:grid-cols-3 gap-1 items-center py-1 text-center'>
          {stack.map((stack) => (
            <p
              key={stack}
              className='capitalize text-sm text-white font-bold px-2 py-1 rounded-lg bg-slate-800 shadow'
            >
              {stack}
            </p>
          ))}
        </div>

        <div className='flex items-center mt-4 text-white gap-2'>
          <a
            className='bg-slate-800 rounded-md px-2 py-2 cursor-pointer hover:scale-110 hover:bg-slate-800/50 duration-300 transition-colors'
            href={github}
            target='_blank'
            title={`Repositorio del ${titulo}`} rel="noreferrer"
          >
            <FaGithub size={25} />
          </a>

          <a
            className='bg-slate-800 rounded-md px-2 py-2 cursor-pointer flex items-center gap-1 hover:scale-110 hover:bg-slate-800/50 duration-300 transition-colors'
            href={demo}
            target='_blank'
            title={`Demo del proyecto ${titulo}`} rel="noreferrer"
          >
            Demo
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  )
}
