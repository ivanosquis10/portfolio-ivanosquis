import { GitHubIcon, EmailIcon, LinkedInIcon, TwitterIcon, DiscordIcon, LolIcon } from '@/components/icons/Icons'

export const ContactCard = ({ url, icon, title, subtitle }) => {
  const icons = {
    github: <GitHubIcon h={40} w={40} />,
    email: <EmailIcon h={40} w={40} />,
    linkedin: <LinkedInIcon h={40} w={40} />,
    twitter: <TwitterIcon h={40} w={40} />,
    discord: <DiscordIcon h={40} w={40} />,
    lol: <LolIcon h={40} w={40} />
  }

  return (
    <a
      href={url}
      className="flex items-center p-5 space-x-3 transition-all ease-in border shadow-md rounded-xl backdrop-blur-md border-zinc-700/60 ring-2 ring-transparent hover:ring-emerald-600 bg-zinc-800/30"
      target="_blank"
      rel="noreferrer"
    >
      <span className='text-emerald-500'>
        {icons[icon]}
      </span>
      <div className="flex flex-col space-y-[3px]">
        <h5 className="text-base font-semibold leading-none">
          {title}
        </h5>
        <span className="text-sm leading-none md:text-base opacity-60">
          {subtitle}
        </span>
      </div>
    </a>
  )
}
