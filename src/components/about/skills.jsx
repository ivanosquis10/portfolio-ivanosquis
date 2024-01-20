import { AboutCard } from "@/components"
import { SKILLS } from "@/constants"

export function Skills() {
  return (
    <AboutCard level={4} title="Skills">
      <ul className="mt-3 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-3">
        {SKILLS.map((skill) => (
          <li
            key={skill.title}
            className="cursor-pointer rounded-lg bg-zinc-100 px-1 py-1 text-center text-sm font-semibold text-black md:px-2 md:py-2 "
          >
            {skill.title}
          </li>
        ))}
      </ul>
    </AboutCard>
  )
}
