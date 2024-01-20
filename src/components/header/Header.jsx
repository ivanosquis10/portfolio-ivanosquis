import Link from "next/link"

import { GitHubIcon, LinkedInIcon, TwitterIcon } from "../icons/Icons"

export function Header() {
  return (
    <header className="w-full bg-zinc-800/50" id="header" name="header">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-5 px-4 md:px-0">
        <Link aria-label="logo redirection icon" className="cursor-pointer" href="/">
          <img alt="Ivanosquis logo" height={50} src="/logo.svg" width={50} />
        </Link>

        <div className="flex flex-1 items-center justify-end border-zinc-700 px-0 md:justify-between md:border-l md:pl-5">
          {/* {nav desktop} */}
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <Link
                className="font-semibold tracking-wide text-gray-200 transition-colors hover:text-white"
                href="contact"
              >
                Contact
              </Link>
              <Link
                className="font-semibold tracking-wide text-gray-200 transition-colors hover:text-white"
                href="about-me"
              >
                About me
              </Link>
            </ul>
          </nav>

          <div>
            <div className="flex items-center gap-1 md:gap-2">
              <Link
                className="focus-visible:ring-ring inline-flex items-center justify-center rounded-md border border-zinc-600 px-1 py-2 text-xs font-medium text-gray-300 transition-colors hover:bg-zinc-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 sm:text-sm md:hidden md:border-transparent"
                href="/contact"
              >
                Contact
              </Link>

              <Link
                className="focus-visible:ring-ring inline-flex items-center justify-center rounded-md border border-zinc-600 px-1 py-2 text-xs font-medium text-white transition-colors hover:bg-zinc-800 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 sm:text-sm md:hidden md:border-transparent"
                href="/about-me"
              >
                About me
              </Link>

              <Link
                aria-label="github redirection icon"
                className="focus-visible:ring-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-600 px-0 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 md:border-transparent md:text-gray-300"
                href="https://github.com/ivanosquis10"
                rel="noreferrer"
                target="_blank"
                title="Redirect to Github"
              >
                <GitHubIcon h={26} w={26} />
                <span className="sr-only">GitHub</span>
              </Link>

              <Link
                aria-label="linkedin redirection icon"
                className="focus-visible:ring-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-600 px-0 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 md:border-transparent md:text-gray-300"
                href="https://www.linkedin.com/in/iv%C3%A1n-rodr%C3%ADguez-web/"
                rel="noreferrer"
                target="_blank"
                title="Redirect to linkedin"
              >
                <LinkedInIcon h={26} w={26} />
                <span className="sr-only">linkedin</span>
              </Link>

              <Link
                aria-label="twitter redirection icon"
                className="focus-visible:ring-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-600 px-0 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 md:border-transparent md:text-gray-300"
                href="https://twitter.com/ivanosquis13"
                rel="noreferrer"
                target="_blank"
              >
                <TwitterIcon h={26} w={26} />
                <span className="sr-only">Twitter or X</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
