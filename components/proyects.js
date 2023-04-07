import ProyectCard from './proyectCard'

export default function Proyects() {
  return (
    <section>
      <div
        id='proyectos'
        className='container mx-auto flex justify-center items-center mb-10'
      >
        <div className='mx-auto max-w-5xl mt-20'>
          <h2 className='text-center text-5xl my-5 font-bold tracking-tighter border-dashed border-b-4 rounded border-green-500 w-fit mx-auto'>
            My Projects
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10 p-5 place-content-center'>
            <ProyectCard
              titulo='GuitarLA'
              descripcion='Página de compras de Guitarras y cursos de música'
              stack={['React', 'NextJS', 'Supabase', 'Tailwindcss']}
              image='/img/guitarla.PNG'
              github='https://github.com/ivanosquis10/guitarla-supabase-proyecto'
              demo='https://guitarla-supabase-proyecto.vercel.app/'
            />

            <ProyectCard
              titulo='Quiosco comida'
              descripcion='Página de compras de platillos de comida con carrito de compras'
              stack={['React', 'NextJS', 'Supabase', 'Tailwindcss']}
              image='/img/quiosco.PNG'
              github='https://github.com/ivanosquis10/quiosco-tienda-supabase'
              demo='https://quiosco-tienda-supabase.vercel.app/'
            />

            <ProyectCard
              titulo='control presupuesto'
              descripcion='Planifica tus presupuestos con está app y filtra por categorías'
              stack={['React', 'ViteJS', 'Tailwindcss']}
              image='/img/gastos.png'
              github='https://github.com/ivanosquis10/control-presupuesto-proyecto'
              demo='https://aesthetic-lolly-990a8f.netlify.app/'
            />

            <ProyectCard
              titulo='cotizador criptomonedas'
              descripcion='Cotiza el valor de tus cripto monedas preferidas con está app'
              stack={['React', 'Router DOM', 'styledComp']}
              image='/img/cripto.png'
              github='https://github.com/ivanosquis10/proyecto-cotizacion-crypto'
              demo='https://cerulean-cucurucho-e6c6c9.netlify.app/'
            />

            <ProyectCard
              titulo='crud pacientes'
              descripcion='Página para llevar el control de pacientes veterinarios'
              stack={['React', 'ViteJS', 'Tailwindcss']}
              image='/img/pacientesCrud.PNG'
              github='https://github.com/ivanosquis10/patients-crud-react-udemy'
              demo='https://cute-unicorn-4c9a71.netlify.app/'
            />

            <ProyectCard
              titulo='cotizador seguros autos'
              descripcion='Cotiza el valor de seguros de autos dependiendo del modelo y año'
              stack={['React', 'ViteJS', 'Tailwindcss']}
              image='/img/cotizadorcarros.png'
              github='https://github.com/ivanosquis10/autoinsurance-quotes-project'
              demo='https://autoinsurance-quotes-ivanosquis.vercel.app/'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
