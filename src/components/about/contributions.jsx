import { AboutCard } from '@/components'
import { GitHubIcon } from '@/components/icons/Icons'

export const Contributions = () => {
  return (
    <AboutCard title={'Contributions'} level={4} >
      <p className='mt-3 leading-snug text-zinc-200'>
        Active in the <span className='span-badge'>GitHub</span> community, I passionately collaborate on various projects, gathering experience and helping other developers. Every contribution is a step towards collective and personal growth and strengthening our community.
      </p>
      <a href='https://github.com/ivanosquis10' target='_blank' rel='noreferrer' className='rounded-xl button-ligth'>
        My activity
        <GitHubIcon />
      </a>
    </AboutCard>
  )
}
