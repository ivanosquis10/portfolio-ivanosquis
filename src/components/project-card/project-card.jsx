import { ArrowRightIcon, GitHubIcon } from '../icons/Icons'

export const ProjectCard = ({ title, description, image, stack, github, demo, change }) => {
  return (
    <div className='relative grid gap-4 p-2 transition-all ease-in border rounded-md shadow-lg spotligth border-zinc-700/60 md:grid-cols-2 bg-zinc-800/30 ring-2 ring-transparent hover:ring-emerald-600'>

      <div className='md:h-[290px] max-h-[290px] rounded-md z-50'>
        <img src={image} alt={`image of ${title} project`} width={300} height={300} className='object-center w-full h-full rounded-md lg:object-cover aspect-auto' loading='lazy' title={`image of ${title}`} />
      </div>

      <div className={`z-50 grid grid-rows-2 p-4 rounded-md shadow bg-zinc-950/70 ${change ? 'md:order-first' : ''} `}>
        <div className='space-y-2'>
          <h3 className='text-3xl font-bold capitalize md:text-4xl'>{title}</h3>
          <p className='text-sm opacity-80'>
            {description}
          </p>
        </div >

        <div className='mt-2'>
          <h4 className='mb-2 text-xl font-bold capitalize'>stack</h4>
          <ul className='flex items-center gap-2'>
            {stack.map((item) => (
              <li className='p-1 rounded-md bg-zinc-800' key={item}>
                <span className='sr-only'>{item} icon</span>
                <img width={25} height={25} src={`/skillsImg/${item}.svg`} alt={`${item} icon`} className='object-cover w-6 md:w-7' title={item} loading='lazy' />
              </li>
            ))}
          </ul>
        </div>

        <div className='flex items-center gap-2 '>
          <a href={github} target='_blank' rel='noopener noreferrer' className='rounded-md button-ligth hover:scale-105'>
            Github
            <GitHubIcon />
          </a>
          <a href={demo} target='_blank' rel='noopener noreferrer' className='rounded-md button-ligth hover:scale-105'>
            Website
            <ArrowRightIcon />
          </a>
        </div>

      </div >
    </div>
  )
}
