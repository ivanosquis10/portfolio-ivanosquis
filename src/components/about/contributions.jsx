import { Github } from "iconoir-react"

import { AboutCard } from "@/components"

export function Contributions() {
  return (
    <AboutCard level={4} title="Contributions">
      <p className="mt-3 leading-snug text-zinc-200">
        Active in the <span className="span-badge">GitHub</span> community, I passionately
        collaborate on various projects, gathering experience and helping other developers. Every
        contribution is a step towards collective and personal growth and strengthening our
        community.
      </p>
      <a
        className="group relative mt-2 inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-zinc-100 px-5 py-2 font-bold text-black shadow-md duration-500"
        href="https://github.com/ivanosquis10"
        rel="noreferrer"
        target="_blank"
      >
        My activity
        <Github className="ml-1" height={25} strokeWidth={1.5} width={25} />
      </a>
    </AboutCard>
  )
}
