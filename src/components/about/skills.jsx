import { AboutCard } from '@/components'
import { SKILLS } from '@/constants'

export const Skills = () => {
  return (
    <AboutCard title={'Skills'} level={4} >
      <ul className='grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-3 mt-3'>
        {SKILLS.map((skill) => (
          <li key={skill.title} className='px-1 py-1 text-sm font-semibold text-center text-black rounded-lg cursor-pointer md:px-2 md:py-2 bg-zinc-100 '>
            {skill.title}
          </li>
        ))}
      </ul>
    </AboutCard>
  )
}
