import Link from 'next/link'
import { HeartIcon, ArrowRightIconFilled } from '@/components/icons/Icons'

export const Hero = () => {
  return (
    <section className="flex items-center justify-between border-b border-zinc-800 animate-fade">
      <div className='flex flex-1 max-w-[980px] flex-col items-start gap-2 px-4 pt-10 md:px-2 pb-4 relative'>
        <div className="inline-flex items-center text-sm font-medium rounded-md">
          <span className="text-sm sm:hidden">Hi, welcome to my portfolio!</span>
          <span className="hidden sm:inline sm:text-base">Hi, welcome to my portfolio</span>
          <HeartIcon />
        </div>
        <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] bg-gradient-to-bl from-white via-green-300 to-green-300 bg-clip-text text-transparent">Iván Rodríguez</h1>

        <p className="max-w-[750px] text-lg sm:text-xl" data-br=":rdd:" data-brr="1">
          {"I'm"} passionate <span className='font-bold text-transparent bg-gradient-to-bl from-zinc-100 via-green-500 to-zinc-200 bg-clip-text'>frontend developer</span> who creates websites and web applications for unique user experiences. I am proactive, constantly learning, and striving to improve.
        </p>
        <div className="relative my-1">

          <Link href='contact' className="rounded-md button-ligth hover:scale-105">
            {"Let's talk"}
            <ArrowRightIconFilled />
          </Link>
        </div>
      </div>
    </section>
  )
}
