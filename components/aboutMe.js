import Skills from './skills'

export default function AboutMe() {
  return (
    <section id="aboutme" className="mx-auto max-w-4xl mt-20 mb-10">
      <h2 className="text-center text-5xl font-bold tracking-tighter border-dashed border-b-4 rounded border-green-500 w-fit mx-auto mb-5">
        Sobre mí
      </h2>

      <div className="p-10 flex flex-col space-y-5">
        <p className="text-base lg:text-xl text-slate-300 font-medium tracking-wide">
          Soy graduado en informática, soy un{' '}
          <span className="active">apasionado</span> de la tecnología y me gusta
          estar <span className="active">aprendiendo</span> cosas nuevas todos
          los días.
        </p>

        <p className="text-base lg:text-xl text-slate-300 font-medium lg:tracking-wide">
          Soy autodidacta los 365 días del año, soy un chico{' '}
          <span className="active">comunicador</span>,{' '}
          <span className="active">resolutivo</span>, paciente y{' '}
          <span className="active">responsable</span>, y siempre con una
          sonrisa.
        </p>

        <p className="text-base lg:text-xl text-slate-300 font-medium lg:tracking-wide">
          Busco retos que me <span className="active">desafien</span> y un grupo
          de personas con ganas de <span className="active">superarse.</span>
        </p>
      </div>

      <div className="text-center mt-8 space-y-10">
        <h3 className="text-2xl uppercase tracking-thighter w-fit mx-auto font-bold border-dashed border-b-4 border-green-500 ">
          Mis habilidades
        </h3>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-3 lg:gap-0 lg:grid-cols-11 justify-items-center px-5 lg:px-0">
          <Skills img="/skillsImg/html.svg" nombre="html" />
          <Skills img="/skillsImg/css.svg" nombre="css" />
          <Skills img="/skillsImg/js.svg" nombre="javascript" />
          <Skills img="/skillsImg/react.svg" nombre="react" />
          <Skills img="/skillsImg/tailwind.svg" nombre="tailwindcss" />
          <Skills img="/skillsImg/nextjs.svg" nombre="nextjs" />
          <Skills img="/skillsImg/vitejs.svg" nombre="vitejs" />
          <Skills img="/skillsImg/node.svg" nombre="node" />
          <Skills img="/skillsImg/supabase.svg" nombre="supabase" />
          <Skills img="/skillsImg/terminal.svg" nombre="terminal" />
          <Skills img="/skillsImg/git.svg" nombre="git" />
        </div>
      </div>
    </section>
  )
}
