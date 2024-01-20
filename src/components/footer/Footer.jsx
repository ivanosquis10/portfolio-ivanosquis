import Link from "next/link"

import { GitHubIcon, TwitterIcon } from "../icons/Icons"

export function Footer() {
  return (
    <header className="w-full border-t border-zinc-800 py-1" id="header" name="header">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-5 px-4 md:px-0">
        <Link aria-label="logo del portafilio de Ivanosquis" className="cursor-pointer" href="/">
          <img
            alt="Iván Rodríguez profile pic"
            className="rounded-full"
            height={40}
            src="https://avatars.githubusercontent.com/u/83567373?v=4"
            width={40}
          />
        </Link>

        <div className="flex flex-1 items-center justify-end border-zinc-700 px-0 md:justify-between md:border-l md:pl-5">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <Link
                className="font-semibold tracking-wide text-zinc-100 transition-colors hover:text-zinc-100/80"
                href="contact"
              >
                Contact
              </Link>
              <Link
                className="font-semibold tracking-wide text-zinc-100 transition-colors hover:text-zinc-100/80"
                href="about-me"
              >
                About me
              </Link>
            </ul>
          </nav>

          <div>
            <div className="flex items-center gap-1 md:gap-2">
              <Link className="block md:hidden" href="/contact" title="Redirect to Github">
                <div className="focus-visible:ring-ring inline-flex items-center justify-center rounded-md border border-zinc-600 px-1 py-2 text-xs font-medium text-white transition-colors hover:bg-zinc-800 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 sm:text-sm md:border-transparent">
                  Contact
                </div>
              </Link>

              <Link className="block md:hidden" href="/about-me">
                <div className="focus-visible:ring-ring inline-flex items-center justify-center rounded-md border border-zinc-600 px-1 py-2 text-xs font-medium text-white transition-colors hover:bg-zinc-800 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 sm:text-sm md:border-transparent">
                  About me
                </div>
              </Link>

              <a href="https://twitter.com/ivanosquis13" rel="noreferrer" target="_blank">
                <div className="focus-visible:ring-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-600 px-0 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 md:border-transparent">
                  <TwitterIcon />
                  <span className="sr-only">Twitter or X</span>
                </div>
              </a>

              <a href="https://github.com/ivanosquis10" rel="noreferrer" target="_blank">
                <div className="focus-visible:ring-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-600 px-0 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 md:border-transparent">
                  <GitHubIcon />
                  <span className="sr-only">Github</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 text-white md:px-0">
        <p className="text-sm opacity-70">made in 🇻🇪</p>
        <span className="text-sm opacity-70">
          {new Date().getFullYear()} © All rights reserved.
        </span>
      </div>
    </header>
  )
}
