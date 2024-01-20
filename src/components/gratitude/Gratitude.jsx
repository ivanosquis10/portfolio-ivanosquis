import { EmailIcon, TwitterIcon } from "../icons/Icons"

export function Gratitude() {
  return (
    <section className="my-8">
      <div className="relative p-8 lg:px-16">
        <div className="pattern-dots absolute left-1/2 right-0 top-0 -z-10 mx-auto h-full w-1/2 opacity-60" />

        <div className="mx-auto mb-4 w-full text-center md:max-w-2xl">
          <span className="mb-3 inline-block text-lg font-semibold text-emerald-400 md:text-2xl">
            Hey, thanks for stopping by.
          </span>
          <h4 className="text-xl font-bold md:text-3xl">
            If you want to talk, talk about a project or play video games
          </h4>

          <p className="hidden text-gray-300 sm:mt-4 sm:block">
            I will be happy to talk to you by twitter, email or discord. I'm usually very active on
            those networks
          </p>
        </div>

        <div className="mx-auto flex w-full flex-col items-center justify-center gap-2 md:max-w-xl md:flex-row md:gap-4">
          <a
            className="button-ligth w-full rounded-xl hover:scale-105 md:flex-1"
            href="https://twitter.com/ivanosquis13"
            rel="noreferrer"
            target="_blank"
          >
            <TwitterIcon />
            Follow me!
          </a>
          <a
            className="button-ligth w-full rounded-xl hover:scale-105 md:flex-1"
            href="mailto:ivanosquis10.12@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            Email me!
            <EmailIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
