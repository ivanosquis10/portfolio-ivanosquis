import Link from 'next/link'
import { GitHubIcon, TwitterIcon } from '../icons/Icons'

export const Footer = () => {
  return (
    <header className="w-full py-1 border-t border-zinc-800" name="header" id="header">
      {/* <div className='absolute w-6 h-6 bg-green bottom-50'>

      </div> */}
      <div className="flex items-center h-16 max-w-6xl gap-5 px-4 mx-auto md:px-0">
        <Link href="/"
          aria-label='logo del portafilio de Ivanosquis'
          className='cursor-pointer'
        >
          <img src="https://avatars.githubusercontent.com/u/83567373?v=4"
            alt="Iván Rodríguez profile picture"
            width={40}
            height={40}
            className='rounded-full'
          />
        </Link>

        <div className="flex items-center justify-end flex-1 px-0 md:border-l border-zinc-700 md:justify-between md:pl-5">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <Link href='contact' className="font-semibold tracking-wide transition-colors text-zinc-100 hover:text-zinc-100/80">
                Contact
              </Link>
              <Link href='about-me' className="font-semibold tracking-wide transition-colors text-zinc-100 hover:text-zinc-100/80">
                About me
              </Link>
            </ul>
          </nav>

          <div>
            <div className="flex items-center gap-1 md:gap-2">
              <Link href='/contact' title='Redirect to Github' className='block md:hidden'
              >
                <div className="inline-flex items-center justify-center px-1 py-2 text-xs font-medium text-white transition-colors border rounded-md sm:text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-zinc-600 md:border-transparent hover:bg-zinc-800 hover:text-accent-foreground">
                  Contact
                </div>
              </Link>

              <Link href='/about-me' className='block md:hidden'
              >
                <div className="inline-flex items-center justify-center px-1 py-2 text-xs font-medium text-white transition-colors border rounded-md sm:text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-zinc-600 md:border-transparent hover:bg-zinc-800 hover:text-accent-foreground">
                  About me
                </div>
              </Link>

              <a target="_blank" rel="noreferrer" href="https://twitter.com/ivanosquis13">
                <div className="inline-flex items-center justify-center px-0 py-2 text-sm font-medium text-white transition-colors border rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-zinc-600 md:border-transparent hover:bg-zinc-800 hover:text-accent-foreground h-9 w-9">
                  <TwitterIcon />
                  <span className="sr-only">Twitter or X</span>
                </div>
              </a>

              <a target="_blank" rel="noreferrer" href="https://github.com/ivanosquis10">
                <div className="inline-flex items-center justify-center px-0 py-2 text-sm font-medium text-white transition-colors border rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-zinc-600 md:border-transparent hover:bg-zinc-800 hover:text-accent-foreground h-9 w-9">
                  <GitHubIcon />
                  <span className="sr-only">Github</span>
                </div>
              </a>

            </div>

          </div>
        </div>
      </div>

      <div className='flex items-center justify-between w-full max-w-6xl px-4 mx-auto text-white md:px-0'>
        <p className='text-sm opacity-70'>
          made in 🇻🇪 | Ivan
        </p>
        <span className='text-sm opacity-70'>
          {new Date().getFullYear()} ©
        </span>
      </div>
    </header>
  )
}
