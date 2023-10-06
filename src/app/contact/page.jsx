import { ContactCard, Heading } from '@/components'

export const metadata = {
  title: 'Ivanosquis | Contact',
  description: 'Welcome to my programming portfolio, where you can find projects developed in React, Vite.js, NextJS, Tailwind CSS and other technologies. Contact me for any project, idea or just to say hello. I am available for collaborations and interesting discussions.'
}

export default function Page() {
  return (
    <section>
      <div
        className="max-w-6xl px-4 py-8 mx-auto text-white sm:px-6"
      >
        <span className='inline-block text-xl font-semibold leading-tight text-emerald-400'>{"Let's talk"}</span>
        <Heading level={2}>Get in touch with me</Heading>

        <p className="mt-3 leading-relaxed text-gray-200">
          Thank you for viewing my portfolio! I sincerely appreciate you being here. Feel free to contact me for any exciting projects or if you have any ideas in mind. {"I'm"} not only available for professional matters, {"I'm"} also willing to say hello, chat or even share a game of video games.
        </p>

        <div className='grid max-w-4xl grid-cols-1 gap-5 mx-auto mt-6 md:grid-cols-2'>
          <ContactCard
            url={'https://github.com/ivanosquis10'}
            icon={'github'}
            title={'GitHub | @ivanosquis10'}
            subtitle={'View my projects and contributions.'}
          />

          <ContactCard
            url={'https://www.linkedin.com/in/iv%C3%A1n-rodr%C3%ADguez-web/'}
            icon={'linkedin'}
            title={'Linkedin | Iván Rodríguez'}
            subtitle={"Let's connect and talk about life"}
          />

          <ContactCard
            url={'https://twitter.com/ivanosquis13'}
            icon={'twitter'}
            title={'Twitter | @ivanosquis13'}
            subtitle={'Follow me and I follow you on X'}
          />

          <ContactCard
            url={'mailto:ivanosquis10.12@gmail.com'}
            icon={'email'}
            title={'Gmail | ivanosquis10.12@gmail'}
            subtitle={'Send me an email'}
          />

          <ContactCard
            url={'https://discordapp.com/users/Ivanosquis10#5178'}
            icon={'discord'}
            title={'Discord | Ivanosquis10#5178'}
            subtitle={"Let's play or talk on discord"}
          />

          <ContactCard
            url={'https://discordapp.com/users/Ivanosquis10#5178'}
            icon={'lol'}
            title={'LOL | ivanosquisxd_lol'}
            subtitle={'Add me and play lol if you want :)'}
          />
        </div>
      </div>
    </section>
  )
}
