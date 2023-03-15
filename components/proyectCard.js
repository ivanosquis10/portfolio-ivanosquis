import Image from 'next/image'

const ProyectCard = ({ titulo, stack, image, github, demo }) => {
  // const { titulo, stack, image, github, demo } = proyect
  // console.log(image)
  // const { titulo, stack, image, descripcion, github, demo } = proyecto
  return (
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
  )
}

export default ProyectCard

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
