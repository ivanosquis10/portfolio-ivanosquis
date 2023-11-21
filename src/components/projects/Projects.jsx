import { ProjectCard } from '@/components'
import { projects } from '@/constants'

export const Projects = () => {
  return (
    <section className='px-2 my-12 md:px-1 animate-fade-up'>
      <div className='relative grid gap-10'>
        {projects.map(({ id, title, description, image, stack, github, demo, change }) => (
          <ProjectCard
            key={id}
            title={title}
            description={description}
            image={image}
            stack={stack}
            github={github}
            demo={demo}
            change={change}
          />
        ))}
      </div>
    </section>
  )
}
