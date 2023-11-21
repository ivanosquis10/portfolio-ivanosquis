import Link from 'next/link'
import { ArrowRightIcon } from '@/components/icons/Icons'

export const FooterAbout = () => {
  return (
    <div className='p-3 text-center transition-all border rounded-md md:col-span-2 border-zinc-800 hover:ring-2 bg-zinc-800/30 hover:ring-emerald-600'>
      <p className='mt-3 leading-snug text-zinc-200'>
        If you have any questions, suggestions or just want to say hello, feel free to contact me.
      </p>
      <Link href='/contact' className='mx-auto rounded-xl md:w-1/4 button-ligth'>
        My social networks
        <ArrowRightIcon />
      </Link>
    </div>
  )
}
