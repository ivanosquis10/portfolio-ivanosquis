import { ContactCard, Heading } from '@/components'
import { contactInformation } from '@/constants'

export const metadata = {
  title: 'Ivanosquis | Contact',
  description: 'Welcome to my programming portfolio, where you can find projects developed in React, Vite.js, NextJS, Tailwind CSS and other technologies. Contact me for any project, idea or just to say hello. I am available for collaborations and interesting discussions.'
}

export default function Page() {
  return (
    <section className="max-w-6xl px-4 py-8 mx-auto text-white sm:px-6">
      <div className='animate-fade-right'>
        <span className='inline-block text-xl font-semibold leading-tight text-emerald-400'>{"Let's talk"}</span>
        <Heading level={2}>Get in touch with me</Heading>

        <p className="mt-1 leading-relaxed text-gray-200">
          Thank you for viewing my portfolio! I sincerely appreciate you being here. Feel free to contact me for any exciting projects or if you have any ideas in mind. {"I'm"} not only available for professional matters, {"I'm"} also willing to say hello, chat or even share a game of video games.
        </p>
      </div>

      <div className='grid max-w-4xl grid-cols-1 gap-5 mx-auto mt-6 md:grid-cols-2 animate-fade-up'>
        {contactInformation.map(({ id, url, icon, title, subtitle }) => (
          <ContactCard
            key={id}
            url={url}
            icon={icon}
            title={title}
            subtitle={subtitle}
          />
        ))}
      </div>

    </section>
  )
}
