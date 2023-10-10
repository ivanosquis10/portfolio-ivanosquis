import { ProjectCard } from '@/components'

export const Projects = () => {
  return (
    <section className='px-2 my-12 md:px-1'>
      <div className='grid gap-10'>
        <ProjectCard
          title='Guitarmood'
          description='Web page in charge of being an ecommerce of guitars and read articles about it, with a shopping cart, database storage.'
          image='/img/guitarla-home.webp'
          stack={['react', 'nextjs', 'supabase', 'tailwind']}
          github='https://github.com/ivanosquis10/guitarmood'
          demo='https://guitarmood-commerce.vercel.app/'
        />

        <ProjectCard
          title='budget-manager'
          description='Web application that allows you to manage your expenses in a very easy way, filter and edit them. Visualize your expenses depending on your budget.'
          image='/img/manager-budget.webp'
          stack={['react', 'typescript', 'vitejs', 'tailwind']}
          github='https://github.com/ivanosquis10/budget-manager'
          demo='https://budget-manager-three.vercel.app/'
          change
        />

        <ProjectCard
          title='planets app'
          description='Web page in charge of viewing various planetary information, using SWR technology for data fetching and cache management.'
          image='/img/app-planets.webp'
          stack={['react', 'typescript', 'vitejs', 'tailwind', 'swr']}
          github='https://github.com/ivanosquis10/planets-project'
          demo='https://app-planets.vercel.app/'
        />

        <ProjectCard
          title='Bolivarium Conversor'
          description='Web application to convert rates from dollars to bolivars, and vice versa, a useful tool for Venezuelans. Information brought from an API and using shadcn.'
          image='/img/bolivarium.webp'
          stack={['react', 'typescript', 'nextjs', 'tailwind']}
          github='https://github.com/ivanosquis10/bolivarium-conversor'
          demo='https://bolivarium-conversor.vercel.app/'
          change
        />
      </div >

    </section >
  )
}

/*

<section className='px-2 my-12 md:px-1'>
      <div className='grid gap-8'>
        <div className='relative grid gap-4 p-2 transition-all rounded-md shadow md:grid-cols-2 bg-zinc-950/50 md:p-3 hover:ring-2 hover:ring-emerald-500/50'>
          <div className='flex flex-col gap-2 rounded-md'>
            <img src="/img/guitarla-home.png" alt="" width={500} height={500} className='object-cover object-center w-full h-full rounded-md shadow aspect-auto' />
            <img src="/img/guitarla-detail.png" alt="" width={500} height={500} className='object-cover object-center w-full rounded-md shadow aspect-auto' />
          </div>
          <div className='grid grid-rows-2 p-4 rounded-md shadow bg-zinc-900'>
            <div className='space-y-2 border'>
              <h3 className='text-3xl font-bold md:text-4xl'>Guitarmood</h3>
              <a href='#'>website</a>
<p className='text-sm md:text-base opacity-80'>
  Pagina web encargada de ser un ecommerce de guitarras y leer articulos sobre la misma, con un carrito de compras, almacenamiento en base de datos.
</p>
            </div >

            <div className='border'>
              <h4 className='mb-2 text-xl font-bold capitalize md:text-2xl'>stack</h4>
              <ul className='flex items-center gap-2'>
                <li className='p-1 rounded-md bg-zinc-800'>
                  <span className='sr-only'>NextJS icon</span>
                  <img width={30} height={30} src="/skillsImg/react.svg" alt="" className='object-cover w-6 md:w-7' />
                </li>
                <li className='p-1 rounded-md bg-zinc-800'>
                  <span className='sr-only'>NextJS icon</span>
                  <img width={30} height={30} src="/skillsImg/nextjs.svg" alt="" className='object-cover w-6 md:w-7' />
                </li>
                <li className='p-1 rounded-md bg-zinc-800'>
                  <span className='sr-only'>NextJS icon</span>
                  <img width={30} height={30} src="/skillsImg/tailwind.svg" alt="" className='object-cover w-6 md:w-7' />
                </li>
                <li className='p-1 rounded-md bg-zinc-800'>
                  <span className='sr-only'>NextJS icon</span>
                  <img width={30} height={30} src="/skillsImg/supabase.svg" alt="" className='object-cover w-6 md:w-7' />
                </li>
              </ul>
            </div>

            <div className='flex items-center gap-2 border'>
              <a href="#" className='flex items-center justify-center flex-1 gap-2 px-4 py-1 font-semibold capitalize transition-all rounded shadow md:flex-none bg-zinc-950 hover:bg-zinc-200 hover:text-black '>
                github
                <GitHubIcon />
              </a>
              <a href="#" className='flex items-center justify-center flex-1 gap-2 px-4 py-1 font-semibold capitalize transition-all rounded shadow md:flex-none bg-zinc-950 hover:bg-zinc-200 hover:text-black '>
                website
                <ArrowRightIcon />
              </a>
            </div>

          </div >
        </div >

      </div >

    </section >

*/

/*
<section className='px-2 my-12 md:px-1'>
      <div className='grid gap-8'>
        <div className='relative grid gap-4 p-2 transition-all rounded-md shadow md:grid-cols-2 bg-zinc-950/50 md:p-3 hover:ring-2 hover:ring-emerald-500/50'>

          <img src="/img/guitarla-home.png" alt="" width={500} height={500} className='object-cover object-center w-full h-full rounded-md shadow aspect-auto' />

           <img src="/img/guitarla-detail.png" alt="" width={500} height={500} className='object-contain object-center w-full h-full rounded-md shadow aspect-auto' />

          <div className='flex flex-col justify-center order-first space-y-2'>
            <h3 className='text-3xl font-bold md:text-5xl'>Guitarmood</h3>
             <a href='#'>website</a>
            <p className='text-sm md:text-base opacity-80'>
              Pagina web encargada de ser un ecommerce de guitarras y leer articulos sobre la misma, con un carrito de compras, almacenamiento en base de datos.
            </p>
          </div>

          <div className='flex flex-col justify-between'>
            <div className=''>
              <h4 className='mb-2 text-xl font-bold capitalize md:text-2xl'>stack</h4>
              <ul className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3'>
                <li className='flex items-center gap-2 p-1 border rounded-md border-zinc-800'>
                  <img width={30} height={30} src="/skillsImg/react.svg" alt="" className='object-cover w-6 md:w-7' />
                  <span className='font-bold capitalize'>reactjs</span>
                </li>
                <li className='flex items-center gap-2 p-1 border rounded-md border-zinc-800'>
                  <img width={30} height={30} src="/skillsImg/nextjs.svg" alt="" className='object-cover w-6 md:w-7' />
                  <span className='font-bold capitalize'>nextjs</span>
                </li>
                <li className='flex items-center gap-2 p-1 border rounded-md border-zinc-800'>
                  <img width={30} height={30} src="/skillsImg/tailwind.svg" alt="" className='object-cover w-6 md:w-7' />
                  <span className='font-bold capitalize'>tailwindcss</span>
                </li>
                <li className='flex items-center gap-2 p-1 border rounded-md border-zinc-800'>
                  <img width={30} height={30} src="/skillsImg/supabase.svg" alt="" className='object-cover w-6 md:w-7' />
                  <span className='font-bold capitalize'>supabase</span>
                </li>
              </ul>
            </div>

            <div className='flex items-center gap-2'>
              <a href="#" className='flex items-center justify-center flex-1 gap-2 px-4 py-1 font-semibold capitalize transition-all rounded shadow md:flex-none bg-zinc-950 hover:bg-zinc-200 hover:text-black '>
                github
                <GitHubIcon />
              </a>
              <a href="#" className='flex items-center justify-center flex-1 gap-2 px-4 py-1 font-semibold capitalize transition-all rounded shadow md:flex-none bg-zinc-950 hover:bg-zinc-200 hover:text-black '>
                website
                <ArrowRightIcon />
              </a>
            </div>
          </div>

        </div >

      </div >

    </section >

*/
