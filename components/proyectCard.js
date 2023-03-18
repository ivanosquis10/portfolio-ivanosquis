import Image from 'next/image'

export default function ProyectCard({
  titulo,
  stack,
  image,
  github,
  demo,
  descripcion,
}) {
  // const { titulo, stack, image, github, demo } = proyect
  // console.log(image)
  // const { titulo, stack, image, descripcion, github, demo } = proyecto
  return (
    <div className="flex flex-col max-w-sm mx-auto rounded-lg shadow-xl bg-slate-800 hover:bg-slate-700/60 ease-in-out duration-300">
      <div>
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
            className="bg-gray-900 rounded-md px-2 py-1 cursor-pointer"
            href={github}
            target="_blank"
            title={`Repositorio del ${titulo}`}
          >
            <Image
              width={30}
              height={30}
              className="bg-cover"
              src="/github.svg"
              alt="logo github"
              title="repositorio del proyecto"
            />
          </a>

          <a
            className="bg-gray-900 rounded-md px-2 py-1 cursor-pointer"
            href={demo}
            target="_blank"
            title={`Demo del proyecto ${titulo}`}
          >
            <Image
              width={30}
              height={30}
              className="bg-cover"
              src="/demo.svg"
              alt="logo demo del proyecto"
              title="demo del proyecto"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

/* 
<div className="grid grid-cols-1 lg:grid-cols-2 place-content-center gap-3 w-full p-2 h-screen">
      <div className="">
        <div>
          <a
            className="cursor-pointer"
            href="https://aesthetic-lolly-990a8f.netlify.app/"
            target="_blank"
          >
            <Image
              width={500}
              height={400}
              className="bg-cover rounded-xl"
              src={image}
              alt={`demo del proyecto ${titulo}`}
              title="Demo del proyecto"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full">
        <h3 className="text-3xl lg:text-5xl text-slate-100 font-bold uppercase">
          {titulo}
        </h3>
        <p className="text-gray-400 text-xl">aqui va la descripcion </p>

        <div className="flex items-center gap-1">
          {stack.map((stack) => (
            <p
              key={stack}
              className="border-2 border-green-600 text-base md:text-lg text-white font-bold px-1 rounded-md"
            >
              {stack}
            </p>
          ))}
        </div>

        <div className="">
          <a href={github} target="_blank" title={`Repositorio del ${titulo}`}>
            github
          </a>

          <a href={demo} target="_blank" title={`Demo del proyecto ${titulo}`}>
            demo
          </a>
        </div>
      </div>
    </div>

*/

/*

 <div className="w-10/12 mx-2 sm:w-100 lg:mb-5 mb-8 border-t-2 py-1 border-green-500 shadow-3xl hover:shadow-md rounded-md ease-in-out duration-200">
      <div className="text-xl md:text-3xl py-3 text-center">
        <h3 className="font-bold uppercase">{titulo}</h3>
      </div>
      <div>
        <div className="sm:w-11/12 mx-auto flex justify-center items-center gap-3 p-4 ">
          <div className="flex items-center gap-2">
            {stack.map((stack) => (
              <p className="border-2 border-green-600 text-base md:text-lg text-white font-bold  px-1 rounded-md">
                {stack}
              </p>
            ))}
          </div>
        </div>

        <div className="w-11/12 mx-auto p-4">
          <div className="grid md:grid-cols-2 items-center gap-3">
            <a
              className="cursor-pointer"
              href="https://aesthetic-lolly-990a8f.netlify.app/"
              target="_blank"
            >
              <Image
                width={350}
                height={200}
                className="bg-cover rounded-xl"
                src={`./${image}`}
                alt={`demo del proyecto ${titulo}`}
                title="Demo del proyecto"
              />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 py-4 mt-2">
            <a
              href={github}
              target="_blank"
              title={`Repositorio del ${titulo}`}
            ></a>

            <a
              href={demo}
              target="_blank"
              title={`Demo del proyecto ${titulo}`}
            ></a>
          </div>
        </div>
      </div>
    </div>

    */
