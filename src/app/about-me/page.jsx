import Link from 'next/link'
import { Heading, AboutCard } from '@/components'
import { GitHubIcon, ArrowRightIcon } from '@/components/icons/Icons'
import { SKILLS } from '@/constants'

export const metadata = {
  title: 'Ivanosquis | About me',
  description: 'Welcome to my programming portfolio, where you can find projects developed in React, Vite.js, NextJS, Tailwind CSS and other technologies. I am a passionate developer with experience in different technologies. Learn more about me, my background and my skills in web development and interface design.'
}

export default function AboutMe() {
  return (
    <section>
      <div
        className="max-w-6xl px-4 py-8 mx-auto text-white sm:px-6"
      >
        <div>
          <span className='inline-block text-xl font-semibold text-emerald-400'>¿Who am I?</span>
          <Heading level={2}>About me</Heading>

          <p className="mt-3 leading-relaxed text-gray-300 ">
            Hi! {"I'm"} Iván Rodríguez, a passionate <span className='span-badge'>frontend developer</span> and technology lover. Let me tell you a little bit more about me. With only 23 years old, I graduated as a TSU in computer science in Venezuela, where I acquired the knowledge and skills necessary to embark on this exciting world of programming, and {"I'm"} very excited to develop my career.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-6 md:grid-cols-2">
          <AboutCard title={'Education'} level={4} >
            <p className='mt-3 text-zinc-200'>
              More than a year ago, I obtained a TSU degree in computer science from Elias Calixto Pompa in Venezuela.
            </p>
            <p className='mt-2 text-zinc-200'>
              I have obtained valuable certifications in specialized <span className='span-badge'>JavaScript and React</span> courses through recognized educational platforms such as Udemy, under the expert guidance of professor codigoconjuan, and Platzi.
            </p>
          </AboutCard>

          <AboutCard title={'Skills'} level={4} >
            <ul className='grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-3 mt-3'>
              {SKILLS.map((skill) => (
                <li key={skill.title} className='px-1 py-1 text-sm font-semibold text-center text-black rounded-lg cursor-pointer md:px-2 md:py-2 bg-zinc-100 '>
                  {skill.title}
                </li>
              ))}
            </ul>
          </AboutCard>

          <AboutCard title={'Contributions'} level={4} >
            <p className='mt-3 leading-snug text-zinc-200'>
              Active in the <span className='span-badge'>GitHub</span> community, I passionately collaborate on various projects, gathering experience and helping other developers. Every contribution is a step towards collective and personal growth and strengthening our community.
            </p>
            <a href='https://github.com/ivanosquis10' target='_blank' rel='noreferrer' className='rounded-xl button-ligth hover:scale-95'>
              My activity
              <GitHubIcon />
            </a>
          </AboutCard>

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

          <div className='p-3 text-center transition-all border rounded-md md:col-span-2 border-zinc-800 hover:ring-2 bg-zinc-800/30 hover:ring-emerald-600'>
            <p className='mt-3 leading-snug text-zinc-200'>
              If you have any questions, suggestions or just want to say hello, feel free to contact me.
            </p>
            <Link href='/contact' className='mx-auto rounded-xl md:w-1/4 button-ligth hover:scale-105'>
              My social networks
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </section >
  )
}
