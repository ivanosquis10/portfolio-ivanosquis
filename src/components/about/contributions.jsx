import { AboutCard } from "@/components"
import { GitHubIcon } from "@/components/icons/Icons"

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
        className="button-ligth rounded-xl"
        href="https://github.com/ivanosquis10"
        rel="noreferrer"
        target="_blank"
      >
        My activity
        <GitHubIcon />
      </a>
    </AboutCard>
  )
}
