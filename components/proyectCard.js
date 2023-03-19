import Image from 'next/image'
import { FaGithub, FaShare } from 'react-icons/fa'

export default function ProyectCard({
  titulo,
  stack,
  image,
  github,
  demo,
  descripcion,
}) {
  return (
    <div className="flex flex-col justify-between max-w-sm mx-auto rounded-lg shadow-xl bg-slate-800 hover:bg-slate-700/60 ease-in-out duration-300">
      <div className="p-1">
        <a className="cursor-pointer" href={demo} target="_blank">
          <Image
            width={400}
            height={400}
            className="w-full bg-cover rounded-lg"
            src={image}
            alt={`demo del proyecto ${titulo}`}
            title="Demo del proyecto"
          />
        </a>
      </div>
      <div className="bg-gray-900 mx-4 rounded-lg flex items-center gap-2 -mt-4 z-10 shadow-xl py-2 px-6">
        <h3 className="text-white text-xl font-bold uppercase">{titulo}</h3>
      </div>
      <div className="px-6 py-4 flex flex-col gap-2">
        <p className="text-gray-400 tracking-tighter">{descripcion}</p>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-1 items-center py-1 text-center">
          {stack.map((stack) => (
            <p
              key={stack}
              className="text-sm text-white font-bold px-2 py-1 rounded-lg bg-slate-600"
            >
              {stack}
            </p>
          ))}
        </div>

        <div className="flex items-center mt-4 text-gray-700 gap-2">
          <a
            className="bg-gray-900 rounded-md px-2 py-2 cursor-pointer"
            href={github}
            target="_blank"
            title={`Repositorio del ${titulo}`}
          >
            <FaGithub size={25} color="#94a3b8" />
          </a>

          <a
            className="bg-gray-900 rounded-md px-2 py-2 cursor-pointer"
            href={demo}
            target="_blank"
            title={`Demo del proyecto ${titulo}`}
          >
            <FaShare size={25} color="#94a3b8" />
          </a>
        </div>
      </div>
    </div>
  )
}
