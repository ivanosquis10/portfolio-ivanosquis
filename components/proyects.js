import { data } from '../data/data'
import ProyectCard from './proyectCard'
import Image from 'next/image'

export default function Proyects() {
  return (
    <section>
      <div
        id="projects"
        className="container mx-auto flex justify-center items-center"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-5xl my-5 font-bold">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center p-5">
            <ProyectCard
              titulo="control presupuesto"
              stack={['React', 'Tailwindcss', 'ViteJS']}
              image="/img/gastos.png"
              github="https://github.com/ivanosquis10/control-presupuesto-proyecto"
              demo="https://aesthetic-lolly-990a8f.netlify.app/"
            />

            <ProyectCard
              titulo="cotizador criptomonedas"
              stack={['React', 'styleComponents']}
              image="/img/gastos.png"
              github="https://github.com/ivanosquis10/proyecto-cotizacion-crypto"
              demo="https://cerulean-cucurucho-e6c6c9.netlify.app/"
            />

            <ProyectCard
              titulo="crud pacientes"
              stack={['React', 'Tailwindcss', 'ViteJS']}
              image="/img/pacientescrud.png"
              github="https://github.com/ivanosquis10/patients-crud-react-udemy"
              demo="https://cute-unicorn-4c9a71.netlify.app/"
            />

            <ProyectCard
              titulo="cotizador seguros autos"
              stack={['React', 'Tailwindcss', 'ViteJS']}
              image="/img/cotizadorcarros.png"
              github="https://github.com/ivanosquis10/autoinsurance-quotes-project"
              demo="https://autoinsurance-quotes-ivanosquis.vercel.app/"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/*
 <div id="projects" className="w-100 flex justify-center items-center">
        <div className="mx-auto max-w-6xl w-full py-8">
          <h2 className="text-center text-5xl mb-8 font-bold ">My Projects</h2>
          <div className="md:p-5 flex flex-col flex-wrap items-center justify-center gap-2 md:gap-4 ">
            <ProyectCard
              titulo="control presupuesto"
              stack={['React', 'Tailwindcss', 'ViteJS']}
              image="/img/gastos.png"
              github="https://github.com/ivanosquis10/control-presupuesto-proyecto"
              demo="https://aesthetic-lolly-990a8f.netlify.app/"
            />

            <ProyectCard
              titulo="cotizador criptomonedas"
              stack={['React', 'styleComponents']}
              image="/img/gastos.png"
              github="https://github.com/ivanosquis10/proyecto-cotizacion-crypto"
              demo="https://cerulean-cucurucho-e6c6c9.netlify.app/"
            />

            <ProyectCard
              titulo="crud pacientes"
              stack={['React', 'Tailwindcss', 'ViteJS']}
              image="/img/pacientescrud.png"
              github="https://github.com/ivanosquis10/patients-crud-react-udemy"
              demo="https://cute-unicorn-4c9a71.netlify.app/"
            />

            <ProyectCard
              titulo="cotizador seguros autos"
              stack={['React', 'Tailwindcss', 'ViteJS']}
              image="/img/cotizadorcarros.png"
              github="https://github.com/ivanosquis10/autoinsurance-quotes-project"
              demo="https://autoinsurance-quotes-ivanosquis.vercel.app/"
            />
          </div>
        </div>
      </div>

*/
