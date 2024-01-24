import { ProjectCard } from "@/components"
import { projects } from "@/data"

export function Projects() {
  return (
    <section className="my-12 animate-fade-up px-2 md:px-1">
      <div className="relative grid gap-10 md:grid-cols-2">
        {projects.map(({ id, title, description, stack, github, demo }) => (
          <ProjectCard
            key={id}
            demo={demo}
            description={description}
            github={github}
            stack={stack}
            title={title}
          />
        ))}
      </div>
    </section>
  )
}
