export default function Hero() {
  return (
    <section className="min-h-full h-screen grid place-content-center gradient">
      <div className="max-w-full px-5 flex flex-col items-center text-center">
        <div className="flex flex-col lg:items-center">
          <div>
            <p className="mt-3 mb-3 text-2xl lg:text-3xl font-thin tracking-tight text-white">
              Bienvenido, soy
            </p>
            <h1 className="text-green-500 font-bold text-6xl lg:text-7xl tracking-tight mb-1">
              Iván Rodríguez
            </h1>
          </div>

          <p className="text-2xl lg:text-3xl font-black lg:tracking-tighter text-slate-100 mb-3">
            Frontend Developer React
          </p>
          <div>
            <p className="lg:text-center w-full lg:w-8/12 mx-auto mt-2 mb-5 lg:text-lg leading-relaxed text-white md:tracking-tight">
              Tengo 22 años de edad y soy una persona muy proactiva, con ganas
              de aprender y mejorar cada día más.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a className="w-full text-xl bg-green-600/80 uppercase rounded-md shadow shadow-green-900 font-bold text-slate-900 text-center ease-in-out duration-300 hover:cursor-pointer hover:bg-slate-800/50 hover:text-green-500">
            Proyectos
          </a>
          <a className="w-full text-xl bg-green-600/80 uppercase rounded-md shadow shadow-green-900 font-bold text-slate-900 text-center ease-in-out duration-300 hover:cursor-pointer hover:bg-slate-800/50 hover:text-green-500">
            contáctame
          </a>
        </div>
      </div>
    </section>
  )
}
