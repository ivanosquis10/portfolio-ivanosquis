import { AboutCard } from "@/components"

export function MoreAboutMe() {
  return (
    <AboutCard level={4} title="More about me">
      <ul className="mt-3 list-inside list-disc space-y-1 tracking-tighter text-zinc-300 ">
        <li>
          I'm a guy <span className="span-badge">proactive, responsible and committed</span> with my
          work.
        </li>
        <li>
          I like to work in a team and learn from others, with ability to solve problems and
          adaptability.
        </li>
        <li>Native Spanish, basic English.</li>
        <li>Passionate about football and videogames.</li>
      </ul>
    </AboutCard>
  )
}
