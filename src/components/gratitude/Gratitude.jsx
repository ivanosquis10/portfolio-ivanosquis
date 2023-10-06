import { EmailIcon, TwitterIcon } from '../icons/Icons'

export const Gratitude = () => {
  return (
    <section className='my-8'>
      <div className="relative p-8 lg:px-16">

        <div className='absolute top-0 right-0 w-1/2 h-full mx-auto left-1/2 pattern-dots -z-10 opacity-60'></div>

        <div className="w-full mx-auto mb-4 text-center md:max-w-2xl">
          <span className='inline-block mb-3 text-lg font-semibold md:text-2xl text-emerald-400'>
            Hey, thanks for stopping by.
          </span>
          <h4 className="text-xl font-bold md:text-3xl">
            If you want to talk, talk about a project or play video games
          </h4>

          <p className="hidden text-gray-300 sm:mt-4 sm:block">
            I will be happy to talk to you by twitter, email or discord. {"I'm"} usually very active on those networks
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-2 mx-auto md:gap-4 md:max-w-xl md:flex-row">

          <a href='https://twitter.com/ivanosquis13' target='_blank' rel="noreferrer" className="w-full rounded-xl button-ligth hover:scale-105 md:flex-1">
            <TwitterIcon />
            Follow me!
          </a>
          <a href='mailto:ivanosquis10.12@gmail.com' className="w-full rounded-xl button-ligth hover:scale-105 md:flex-1" target='_blank' rel="noreferrer">
            Email me!
            <EmailIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
