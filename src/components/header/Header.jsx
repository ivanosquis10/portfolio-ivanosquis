import Link from 'next/link'
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '../icons/Icons'

export const Header = () => {
  return (
    <header className="w-full bg-zinc-800/50" name="header" id="header">
      <div
        className="flex items-center h-16 max-w-6xl gap-5 px-4 mx-auto md:px-0"
      >
        <Link href="/"
          aria-label='logo redirection icon'
          className='cursor-pointer'
        >
          <img
            width={50}
            height={50}
            src="/logo.svg"
            alt='Ivanosquis logo'
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
              <Link href='/contact' className='block md:hidden'
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

              <a target="_blank" rel="noreferrer" href="https://github.com/ivanosquis10" aria-label='github redirection icon' title='Redirect to Github'
              >
                <div className="inline-flex items-center justify-center px-0 py-2 text-sm font-medium text-white transition-colors border rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-zinc-600 md:border-transparent hover:bg-zinc-800 hover:text-accent-foreground h-9 w-9">
                  <GitHubIcon />
                  <span className="sr-only">GitHub</span>
                </div>
              </a>

              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/iv%C3%A1n-rodr%C3%ADguez-web/" aria-label='linkedin redirection icon' title='Redirect to linkedin' >
                <div className="inline-flex items-center justify-center px-0 py-2 text-sm font-medium text-white transition-colors border rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-zinc-600 md:border-transparent hover:bg-zinc-800 hover:text-accent-foreground h-9 w-9">
                  <LinkedInIcon />
                  <span className="sr-only">linkedin</span>
                </div>
              </a>

              <a target="_blank" rel="noreferrer" href="https://twitter.com/ivanosquis13">
                <div className="inline-flex items-center justify-center px-0 py-2 text-sm font-medium text-white transition-colors border rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-zinc-600 md:border-transparent hover:bg-zinc-800 hover:text-accent-foreground h-9 w-9">
                  <TwitterIcon />
                  <span className="sr-only">Twitter or X</span>
                </div>
              </a>
            </div>

            {/* <button
              className='inline-flex items-center justify-center px-0 py-2 text-sm font-bold transition-colors rounded-md md:hidden bg-zinc-800 h-9 w-9'
            >

              <MenuMobileIcon />
              <span className="sr-only">GitHub</span>
            </button> */}
          </div>
        </div>
      </div>
    </header>
  )
}
