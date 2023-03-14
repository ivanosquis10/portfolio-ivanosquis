import { data } from '../data/data'
import ProyectCard from './proyectCard'
import Image from 'next/image'

export default function Proyects() {
  console.log(data)
  return (
    <section>
      <div id="projects" className="w-100 flex justify-center items-center">
        <div className="mx-auto max-w-6xl py-8">
          <h2 className="text-center text-5xl mb-8 font-medium">
            Here my <span className="font-bold text-green-500">Projects!</span>
          </h2>
          <div className="md:p-10 flex flex-col flex-wrap items-center justify-center gap-2 md:gap-4 lg:justify-around">
            <Image
              width={350}
              height={200}
              src={gastos}
              className="bg-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* 
<ProyectCard
              titulo="control presupuesto"
              stack={['React', 'Tailwindcss', 'ViteJS']}
              image={imgControl}
              github="https://github.com/ivanosquis10/control-presupuesto-proyecto"
              demo="https://aesthetic-lolly-990a8f.netlify.app/"
            />

            <ProyectCard
              titulo="crud pacientes"
              stack={['React', 'Tailwindcss', 'ViteJS']}
              image={imgPaciente}
              github="https://github.com/ivanosquis10/patients-crud-react-udemy"
              demo="https://cute-unicorn-4c9a71.netlify.app/"
            />

            <ProyectCard
              titulo="cotizador criptomonedas"
              stack={['React', 'styleComponents']}
              image={imgCripto}
              github="https://github.com/ivanosquis10/proyecto-cotizacion-crypto"
              demo="https://cerulean-cucurucho-e6c6c9.netlify.app/"
            />

            <ProyectCard
              titulo="cotizador seguros autos"
              stack={['React', 'Tailwindcss', 'ViteJS']}
              image={imgAuto}
              github="https://github.com/ivanosquis10/autoinsurance-quotes-project"
              demo="https://autoinsurance-quotes-ivanosquis.vercel.app/"
            />
            */
