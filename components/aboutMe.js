import Image from 'next/image'
import Skills from './skills'

export default function AboutMe() {
  return (
    <section className="mx-auto max-w-4xl my-20">
      <h2 className="text-center text-5xl font-bold tracking-tighter border-dashed border-b-4 rounded border-green-500 w-fit mx-auto mb-10">
        Sobre mí
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center items-center">
        <Image
          className="bg-cover"
          width={300}
          height={100}
          src="/logo-iv-3.svg"
          alt="logo ivan"
        />

        <div className="p-10 flex flex-col items-center gap-5 col-span-2">
          <h3 className="text-slate-300 font-thin text-xl tracking-widest">
            Me llamo <span className="font-black text-green-500">Iván</span> y
            tengo 22 años de edad y soy de Venezuela.
          </h3>
          <p className="text-xl text-slate-300 font-thin tracking-widest">
            Soy graduado en informática y autodidacta los 365 días del año.
          </p>

          <p className="text-xl text-slate-300 font-thin tracking-thighter lg:tracking-widest">
            Me encanta aprender e intentar ser mejor todos los días.
          </p>
        </div>
      </div>

      <div>
        <h3>Mis habilidades</h3>
        <div>
          <Skills img='/skillsImg/css.svg' nombre='css' />
        </div>
      </div>
    </section>
  )
}
