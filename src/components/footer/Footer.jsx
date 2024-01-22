import Link from "next/link"

import { GitHubIcon, TwitterIcon, ArrowUpIcon } from "../icons/Icons"

export function Footer() {
  return (
    <header className="w-full border-t border-zinc-800 py-1" id="header" name="header">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-5 px-4 md:px-0">
        <Link
          aria-label="logo del portafilio de Ivanosquis"
          className="cursor-pointer rounded-full shadow-md"
          href="https://www.linkedin.com/in/iv%C3%A1n-rodr%C3%ADguez-web/"
          rel="noreferrer"
          target="_blank"
          title="Go to LinkedIn"
        >
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
              <a
                className="inline-flex items-center justify-center rounded-md px-2 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 hover:text-accent-foreground focus:outline-none focus:ring-1"
                href="https://twitter.com/ivanosquis13"
                rel="noreferrer"
                target="_blank"
                title="Redirect to Twitter"
              >
                <TwitterIcon />
                <span className="sr-only">Twitter or X</span>
              </a>

              <a
                className="inline-flex items-center justify-center rounded-md px-2 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 hover:text-accent-foreground focus:outline-none focus:ring-1"
                href="https://github.com/ivanosquis10"
                rel="noreferrer"
                target="_blank"
                title="Redirect to Github"
              >
                <GitHubIcon />
                <span className="sr-only">Github</span>
              </a>

              <Link
                className="inline-flex items-center justify-center rounded-md px-2 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 hover:text-accent-foreground focus:outline-none focus:ring-1"
                href="#header"
                title="Back to top"
              >
                <ArrowUpIcon />
                <span className="sr-only">Github</span>
              </Link>
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
