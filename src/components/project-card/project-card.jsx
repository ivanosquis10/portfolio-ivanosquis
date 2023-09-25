import { ArrowRightIcon, GitHubIcon } from '../icons/Icons'

export const ProjectCard = ({ title, description, image, stack, github, demo, change }) => {
  return (
    <div className='relative grid gap-4 p-2 transition-all rounded-md shadow md:grid-cols-2 bg-zinc-950/30 hover:ring-2 hover:ring-emerald-500/50'>

      {/* <div className='grid grid-rows-2'> */}
      {/* <img src="/img/guitarla-home.png" alt="" width={500} height={500} className='object-cover object-center w-full rounded-md shadow aspect-video' /> */}
      <div className='h-[300px] rounded-md'>
        <img src={image} alt={`image of ${title}`} width={500} height={500} className='object-cover object-center w-full h-full rounded-md md:object-cover aspect-auto' />
        {/* </div> */}
      </div>

      <div className={`grid grid-rows-2 p-4 rounded-md shadow bg-zinc-900 ${change ? 'md:order-first' : ''} `}>
        <div className='space-y-2'>
          <h3 className='text-3xl font-bold capitalize md:text-4xl'>{title}</h3>
          <p className='text-sm opacity-80'>
            {description}
          </p>
        </div >

        <div className='mt-2'>
          <h4 className='mb-2 text-xl font-bold capitalize'>stack</h4>
          <ul className='flex items-center gap-2'>
            {
              stack.map((item) => (
                <li className='p-1 rounded-md bg-zinc-800' key={item}>
                  <span className='sr-only'>{item} icon</span>
                  <img width={25} height={25} src={`/skillsImg/${item}.svg`} alt={`${item} icon`} className='object-cover w-6 md:w-7' title={item} />
                </li>
              ))
            }
          </ul>
        </div>

        <div className='flex items-center gap-2'>
          <a href={github} target='_blank' rel='noreferrer' className='rounded-md button-ligth hover:scale-105'>
            Github
            <GitHubIcon />
          </a>
          <a href={demo} target='_blank' rel='noreferrer' className='rounded-md button-ligth hover:scale-105'>
            Website
            <ArrowRightIcon />
          </a>
        </div>

      </div >
    </div >
  )
}
