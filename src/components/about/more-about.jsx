import { AboutCard } from '@/components'

export const MoreAboutMe = () => {
  return (
    <AboutCard title={'More about me'} level={4} >
      <ul className="mt-3 space-y-1 tracking-tighter list-disc list-inside text-zinc-300 ">
        <li>
          {"I'm"} a guy <span className='span-badge'>proactive, responsible and committed</span> with my work.
        </li>
        <li>
          I like to work in a team and learn from others, with ability to solve problems and adaptability.
        </li>
        <li>
          Native Spanish, basic English.
        </li>
        <li>
          Passionate about football and videogames.
        </li>
      </ul>
    </AboutCard>
  )
}
